package cn.superbio.spbbase.upc.DO;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 权限标识
 *
 * @author lxy
 */

@TableName("auth_permission")
public class SysPermission   implements Serializable {


    private static final long serialVersionUID = 1214468373312944076L;
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
