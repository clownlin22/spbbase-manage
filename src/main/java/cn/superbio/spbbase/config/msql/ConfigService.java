package cn.superbio.spbbase.config.msql;


import cn.superbio.spbbase.upc.DO.LoginAppUser;
import cn.superbio.spbbase.upc.DO.LoginClient;
import cn.superbio.spbbase.upc.controller.AppUserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;

/**
 * @Author: lxy
 * @Date: 2019/3/4 12:52
 */
@Configuration
public class ConfigService implements UserDetailsService,ClientDetailsService {

    @Autowired
    private AppUserController appUserController;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        LoginAppUser loginAppUser = appUserController.findByUsername(username);
        if (loginAppUser == null) {
            throw new AuthenticationCredentialsNotFoundException("用户不存在");
        }
        return  loginAppUser;
    }

    @Override
    public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
        LoginClient byClientId = appUserController.findByClientId(clientId);
        if(byClientId == null){
            throw new AuthenticationCredentialsNotFoundException("连接失败");
        }
        return byClientId;
    }

}
