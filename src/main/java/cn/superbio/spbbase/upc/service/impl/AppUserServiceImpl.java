package cn.superbio.spbbase.upc.service.impl;


import cn.superbio.spbbase.upc.DO.AppUser;
import cn.superbio.spbbase.upc.mapper.AppUserMapper;
import cn.superbio.spbbase.upc.service.AppUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl extends ServiceImpl<AppUserMapper, AppUser> implements AppUserService {


}
