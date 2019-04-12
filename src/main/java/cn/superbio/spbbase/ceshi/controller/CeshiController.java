package cn.superbio.spbbase.ceshi.controller;

import cn.superbio.spbbase.ceshi.DO.Ceshi;
import cn.superbio.spbbase.ceshi.service.CeshiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: lxy
 * @Date: 2019/3/27 10:53
 */
@RestController
@RequestMapping("/ceshi1")
public class CeshiController {

    @GetMapping("/aa")
    public String aa() {
        return "aa";
    }
    @GetMapping("/bb")
    public String bb() {
        return "bb";
    }
    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/cc")
    public String cc() {
        return "cc";
    }
    @PreAuthorize("hasAuthority('dd')")
    @GetMapping("/dd")
    public String dd() {
        return "dd";
    }
    @RequestMapping(value = "/**.js")
    public String qwqq() {
        System.out.println("dsf");
        return null;
    }
    @RequestMapping(value = "/**.**")
    public String qq() {
        System.out.println("dsf");
        return null;
    }
    @RequestMapping(value = "/**.**.**")
    public String q1q() {
        System.out.println("dsf");
        return null;
    }

    @Autowired
    private CeshiService ceshiService;

    @GetMapping("/selectceshi")
    public List<Ceshi> selectceshi() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ceshiService.list();
    }



}
