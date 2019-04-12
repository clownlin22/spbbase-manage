package cn.superbio.spbbase.upc.DO;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * @Author: lxy
 * @Date: 2019/4/8 16:19
 */
@TableName("auth_role_data_limit")
public class AuthRoleDataLimit implements Serializable {
    private static final long serialVersionUID = 1784706065553492299L;

    private Long id;
    private Long roleId;
    private Long dataLimitId;

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getDataLimitId() {
        return dataLimitId;
    }

    public void setDataLimitId(Long dataLimitId) {
        this.dataLimitId = dataLimitId;
    }
}
