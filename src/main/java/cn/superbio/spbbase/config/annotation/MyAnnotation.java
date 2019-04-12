package cn.superbio.spbbase.config.annotation;

import java.lang.annotation.*;

/**
 * @Author: lxy
 * @Date: 2019/4/8 11:16
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Inherited
@Target(ElementType.METHOD)//注解作用于方法
public @interface MyAnnotation {
    String name()default "linxinyu";
}
