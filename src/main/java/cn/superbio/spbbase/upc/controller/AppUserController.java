package cn.superbio.spbbase.upc.controller;


import cn.superbio.spbbase.upc.DO.*;
import cn.superbio.spbbase.upc.service.*;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.ConsumerTokenServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

/**
 * @author lxy
 */
@Api(tags = "登录接口")
@RequestMapping("/api")
@RestController
public class AppUserController {

    @Autowired
    private AppUserService appUserService;
    @Autowired
    private SysRoleService sysRoleService;
    @Autowired
    private SysPermissionService sysPermissionService;
    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private RolePermissionService rolePermissionService;
    @Autowired
    private ClientService clientService;
    @Autowired
    private AuthDataLimitService authDataLimitService;
    @Autowired
    private AuthRoleDataLimitService authRoleDataLimitService;
    @Autowired
    private AuthDeptUserService authDeptUserService;

    public LoginAppUser findByUsername(String username) {
        QueryWrapper<AppUser> userQueryWrapperr = new QueryWrapper<>();
        userQueryWrapperr.eq("name", username);
        AppUser appUser = appUserService.getOne(userQueryWrapperr);

        if (appUser != null) {
            LoginAppUser loginAppUser = new LoginAppUser();
            //设置用户
            loginAppUser.setId(appUser.getId());
            loginAppUser.setName(appUser.getName());
            loginAppUser.setPassword(appUser.getPassword());

            //获取部门
            QueryWrapper<AuthDeptUser> authDeptUserQueryWrapper = new QueryWrapper<>();
            authDeptUserQueryWrapper.eq("user_id", appUser.getId());
            AuthDeptUser one = authDeptUserService.getOne(authDeptUserQueryWrapper);

            //// 设置角色
            //根据id获取多个角色id
            QueryWrapper<UserRole> userRoleQueryWrapper = new QueryWrapper<>();
            userRoleQueryWrapper.eq("user_id", appUser.getId());
            List<UserRole> userRoles = userRoleService.list(userRoleQueryWrapper);
            if (userRoles.size() != 0) {
                //设置角色id
                List<Long> roleIds = new ArrayList<>();
                userRoles.forEach(userRole -> roleIds.add(userRole.getRoleId()));
                //获取角色
                List<SysRole> sysRoles = (List<SysRole>) sysRoleService.listByIds(roleIds);
                loginAppUser.setSysRoles(sysRoles);

                //// 设置权限
                //根据角色id获取多个权限id
                QueryWrapper<RolePermission> rolePermissionQueryWrapper = new QueryWrapper<>();
                rolePermissionQueryWrapper.in("role_id", roleIds);
                List<RolePermission> rolePermissions = rolePermissionService.list(rolePermissionQueryWrapper);
                if (rolePermissions.size() != 0) {
                    //设置权限id
                    List<Long> permissionsIds = new ArrayList<>();
                    rolePermissions.forEach(rolePermission -> permissionsIds.add(rolePermission.getPermissionId()));
                    //获取权限
                    List<SysPermission> sysPermissions = (List<SysPermission>) sysPermissionService.listByIds(permissionsIds);
                    loginAppUser.setSysPermissions(sysPermissions);
                }

                //设置数据权限
                QueryWrapper<AuthRoleDataLimit> authRoleDataLimitQueryWrapper = new QueryWrapper<>();
                rolePermissionQueryWrapper.in("role_id", roleIds);
                List<AuthRoleDataLimit> authRoleDataLimits = authRoleDataLimitService.list(authRoleDataLimitQueryWrapper);
                if (authRoleDataLimits.size() != 0) {
                    //设置权限id
                    List<Long> data_limit_ids = new ArrayList<>();
                    authRoleDataLimits.forEach(authRoleDataLimit -> data_limit_ids.add(authRoleDataLimit.getDataLimitId()));
                    //获取权限
                    List<AuthDataLimit> authDataLimits = (List<AuthDataLimit>) authDataLimitService.listByIds(data_limit_ids);
                    authDataLimits.forEach(a -> a.setDeptId(one.getDeptId()));
                    authDataLimits.forEach(a -> a.setUserName(appUser.getName()));
                    loginAppUser.setAuthDataLimits(authDataLimits);
                }

            }
            return loginAppUser;
        }
        return null;
    }

    public LoginClient findByClientId(String clientId) {
        QueryWrapper<Client> clientQueryWrapper = new QueryWrapper<>();
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        clientQueryWrapper.eq("client_id", clientId);
        Client client = clientService.getOne(clientQueryWrapper);

        //获取client
        LoginClient loginClient = new LoginClient();
        loginClient.setClientId(client.getClientId());
        loginClient.setResourceIds(stringSet(client.getResourceIds()));
        loginClient.setClientSecret(client.getClientSecret());
        loginClient.setScope(stringSet(client.getScope()));
        loginClient.setAuthorizedGrantTypes(stringSet(client.getAuthorizedGrantTypes()));
        loginClient.setRegisteredRedirectUri(stringSet(client.getWebServerRedirectUri()));
        loginClient.setAccessTokenValiditySeconds(client.getAccessTokenValidity());
        loginClient.setRefreshTokenValiditySeconds(client.getRefreshTokenValidity());
        loginClient.setAdditionalInformation(stringObjectHashMap);
        loginClient.setAutoapprove(client.getAutoapprove());

        return loginClient;
    }

    @ApiOperation(value = "根据用户查询权限角色", notes = "根据用户查询权限角色")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "username", dataType = "string", value = "用户名", required = true),
    })
    @GetMapping(value = "/authcenter/findAuthoritiesByUsername", params = "username")
    public List<String> findAuthoritiesByUsername(String username) {
        List<String> authorities = new ArrayList<>();
        //根据用户名查询id
        QueryWrapper<AppUser> userQueryWrapperr = new QueryWrapper<>();
        userQueryWrapperr.eq("name", username);
        AppUser appUser = appUserService.getOne(userQueryWrapperr);
        if (appUser != null) {
            //// 设置角色
            //根据id获取多个角色id
            QueryWrapper<UserRole> userRoleQueryWrapper = new QueryWrapper<>();
            userRoleQueryWrapper.eq("id", appUser.getId());
            List<UserRole> userRoles = userRoleService.list(userRoleQueryWrapper);
            if (userRoles.size() != 0) {
                //设置角色id
                List<Long> roleIds = new ArrayList<>();
                userRoles.forEach(userRole -> roleIds.add(userRole.getRoleId()));
                //获取角色
                List<SysRole> sysRoles = (List<SysRole>) sysRoleService.listByIds(roleIds);

                //// 设置权限
                //根据角色id获取多个权限id
                QueryWrapper<RolePermission> rolePermissionQueryWrapper = new QueryWrapper<>();
                rolePermissionQueryWrapper.in("role_id", roleIds);
                List<RolePermission> rolePermissions = rolePermissionService.list(rolePermissionQueryWrapper);
                if (rolePermissions.size() != 0) {
                    //设置权限id
                    List<Long> permissionsIds = new ArrayList<>();
                    rolePermissions.forEach(rolePermission -> permissionsIds.add(rolePermission.getPermissionId()));
                    //获取权限
                    List<SysPermission> sysPermissions = (List<SysPermission>) sysPermissionService.listByIds(permissionsIds);
                    sysPermissions.forEach(ss -> authorities.add(ss.getCode()));
                }
            }
        }
        return authorities;
    }

    public Set<String> stringSet(String object) {
        HashSet<String> strings = new HashSet<>();
        if (object != null && !"".equals(object)) {
            List<String> lists = Arrays.asList(object.split(","));
            lists.forEach(list -> strings.add(list));
        }
        return strings;
    }

    @Autowired
    private ConsumerTokenServices tokenServices;

    @ApiOperation(value = "注销登录", notes = "注销登录")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "token", dataType = "string", value = "token令牌", required = true),
            @ApiImplicitParam(name = "access_token", dataType = "string", value = "token令牌", required = true),
    })
    @GetMapping("/authcenter/removetoken")
    public void logout(String access_token, @RequestHeader(required = false, value = "Authorization") String token) {
        if (StringUtils.isBlank(access_token)) {
            if (StringUtils.isNoneBlank(token)) {
                access_token = token.substring(OAuth2AccessToken.BEARER_TYPE.length() + 1);
            }
        }
        tokenServices.revokeToken(access_token);
    }

    @ApiOperation(value = "当前用户", notes = "当前用户")
    @GetMapping("/currentUser")
    public LoginAppUser currentUser() {
        //获取凭证
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof OAuth2Authentication) {
            OAuth2Authentication oAuth2Auth = (OAuth2Authentication) authentication;
            authentication = oAuth2Auth.getUserAuthentication();

            if (authentication instanceof UsernamePasswordAuthenticationToken) {
                UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) authentication;
                Object principal = authentication.getPrincipal();
                if (principal instanceof LoginAppUser) {
                    return (LoginAppUser) principal;
                }
            }
        }
        return null;
    }

    @ApiOperation(value = "图表数据", notes = "图表数据")
    @GetMapping("/fake_chart_data")
    public String fake_chart_data() {
        return null;
    }



}
