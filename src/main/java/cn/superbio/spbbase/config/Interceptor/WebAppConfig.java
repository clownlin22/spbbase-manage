package cn.superbio.spbbase.config.Interceptor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Author: lxy
 * @Date: 2019/4/8 15:38
 */
@Configuration
public class WebAppConfig implements WebMvcConfigurer {

    @Bean
    public HandlerInterceptor getLoginInterceptor(){
        return new LoginInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(getLoginInterceptor()).addPathPatterns("/**");
    }
}
