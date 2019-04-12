package cn.superbio.spbbase.upc.DO;

import com.baomidou.mybatisplus.annotation.TableName;

/**
 * @Author: lxy
 * @Date: 2019/4/9 14:59
 */
@TableName("auth_dept_user")
public class AuthDeptUser {
    private Long id;
    private Long deptId;
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDeptId() {
        return deptId;
    }

    public void setDeptId(Long deptId) {
        this.deptId = deptId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
