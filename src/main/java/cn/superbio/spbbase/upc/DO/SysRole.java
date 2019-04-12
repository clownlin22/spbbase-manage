package cn.superbio.spbbase.upc.DO;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 角色
 * @author lxy
 */

@TableName("auth_role")
public class SysRole   implements Serializable {


    private static final long serialVersionUID = 2837084449806512031L;
    private Long id;
    private String code;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
