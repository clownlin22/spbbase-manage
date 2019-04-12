package cn.superbio.spbbase.upc.DO;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * @Author: lxy
 * @Date: 2019/3/4 10:34
 */
@TableName("auth_user_role")
public class UserRole implements Serializable {
    private static final long serialVersionUID = -2232764687931429402L;
    private Long id;
    private Long userId;
    private Long roleId;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }
}
