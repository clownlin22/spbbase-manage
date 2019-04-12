package cn.superbio.spbbase.ceshi.controller;

import cn.superbio.spbbase.ceshi.DO.Ceshi;
import cn.superbio.spbbase.ceshi.service.CeshiService;
import cn.superbio.spbbase.config.annotation.MyAnnotation;
import cn.superbio.spbbase.config.mp.ApiContext;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: lxy
 * @Date: 2019/4/8 11:18
 */
@RestController
@RequestMapping("/ceshi")
public class ceshi2Controller {

    @Autowired
    private CeshiService ceshiService;
    @Autowired
    private ApiContext apiContext;


    @GetMapping("/aa")
    public List<Ceshi> people1() {
        return ceshiService.list();
    }
    @MyAnnotation(name = "ce_user")
    @GetMapping("/a")
    public List<Ceshi> people2() {
        //QueryWrapper<Ceshi> userQueryWrapperr = new QueryWrapper<>();
        //userQueryWrapperr.eq("case_age", 1);
        //return ceshiService.list(userQueryWrapperr);
        return ceshiService.list();
    }


    @GetMapping("/bb")
    public List<Ceshi> people3() {
        return ceshiService.list();
    }
    @MyAnnotation(name = "ce_user2")
    @GetMapping("/b")
    public List<Ceshi> people4() {
        return ceshiService.list();
    }


    @GetMapping("/cc")
    public List<Ceshi> people5() {
        return ceshiService.list();
    }
    @MyAnnotation(name = "ce_user3")
    @GetMapping("/c")
    public List<Ceshi> people6() {
        return ceshiService.list();
    }

    @MyAnnotation(name = "ce_user3")
    @GetMapping("/ccc")
    public IPage<Ceshi> people7() {
        Page<Ceshi> ceshiPage=new Page<>(0,1);
        QueryWrapper<Ceshi> ceshiQueryWrapper = new QueryWrapper<>();
        return ceshiService.page(ceshiPage, ceshiQueryWrapper);
    }

}
