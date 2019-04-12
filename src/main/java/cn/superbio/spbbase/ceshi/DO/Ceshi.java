package cn.superbio.spbbase.ceshi.DO;

import com.baomidou.mybatisplus.annotation.TableName;

/**
 * @Author: lxy
 * @Date: 2019/3/29 10:24
 */
@TableName("ce_user")
public class Ceshi {

    private Integer id;
    private String caseName;
    private String caseDept;
    private Integer caseAge;

    @Override
    public String toString() {
        return "Ceshi{" +
                "id=" + id +
                ", caseName='" + caseName + '\'' +
                ", caseDept='" + caseDept + '\'' +
                ", caseAge=" + caseAge +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCaseName() {
        return caseName;
    }

    public void setCaseName(String caseName) {
        this.caseName = caseName;
    }

    public String getCaseDept() {
        return caseDept;
    }

    public void setCaseDept(String caseDept) {
        this.caseDept = caseDept;
    }

    public Integer getCaseAge() {
        return caseAge;
    }

    public void setCaseAge(Integer caseAge) {
        this.caseAge = caseAge;
    }
}
