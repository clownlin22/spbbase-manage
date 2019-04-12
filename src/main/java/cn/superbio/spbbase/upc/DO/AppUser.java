package cn.superbio.spbbase.upc.DO;


import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;


/**
 * @author lxy
 */
@TableName("auth_user")
public class AppUser   implements Serializable {


    private static final long serialVersionUID = -8041607467716738042L;
    private Long id;
    private String name;
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
