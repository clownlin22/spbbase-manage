package cn.superbio.spbbase.config.Interceptor;

import cn.superbio.spbbase.config.annotation.MyAnnotation;
import cn.superbio.spbbase.config.mp.ApiContext;
import cn.superbio.spbbase.upc.DO.AuthDataLimit;
import cn.superbio.spbbase.upc.DO.LoginAppUser;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * @Author: lxy
 * @Date: 2019/4/8 15:38
 */
public class LoginInterceptor implements HandlerInterceptor {

    private static final Logger log = LoggerFactory.getLogger(LoginInterceptor.class);

    @Autowired
    private ApiContext apiContext;

    /**
     * 进入controller层之前拦截请求
     */
    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws Exception {
        if (handler instanceof HandlerMethod) {
            HandlerMethod h = (HandlerMethod) handler;

            if (h.getMethod().isAnnotationPresent(MyAnnotation.class)) {

                Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                UserDetails principal1 = (UserDetails) principal;
                LoginAppUser loginAppUser = (LoginAppUser) principal1;
                List<AuthDataLimit> authDataLimits = loginAppUser.getAuthDataLimits();

                MyAnnotation myAnno = h.getMethod().getAnnotation(MyAnnotation.class);
                if (StringUtils.isNoneBlank(myAnno.name())) {
                    for(AuthDataLimit a :authDataLimits) {
                        String name = myAnno.name();
                        String tableName = a.getTableName();
                        if (myAnno.name().equals(a.getTableName())) {
                            //所有
                            if (a.getScope() == 0) {
                                //仅自己
                            } else if (a.getScope() == 1) {
                                apiContext.setSystemTenantId("case_name");
                                apiContext.setCurrentProviderId(a.getUserName());
                                //自己所在部门
                            } else if (a.getScope() == 2 ) {
                                apiContext.setSystemTenantId("case_dept");
                                apiContext.setCurrentProviderId(a.getDeptId().toString());
                                //自己所在部门及下级部门   指定部门   指定部门及下级部门
                            } else if (a.getScope() == 3 || a.getScope() == 4 || a.getScope() == 5) {
                                apiContext.setSystemTenantId("case_dept");
                                apiContext.setCurrentProviderId(a.getDeptIds());
                            }
                            return HandlerInterceptor.super.preHandle(httpServletRequest, httpServletResponse, handler);
                        }else{
                            apiContext.setSystemTenantId("case_name");
                            apiContext.setCurrentProviderId(a.getUserName());
                        }
                    }
                }
            }else{
                apiContext.setSystemTenantId("");
                apiContext.setCurrentProviderId("");
            }
        }
        return HandlerInterceptor.super.preHandle(httpServletRequest, httpServletResponse, handler);
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, ModelAndView modelAndView) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, Exception e) throws Exception {
    }

}
