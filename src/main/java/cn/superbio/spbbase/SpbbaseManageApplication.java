package cn.superbio.spbbase;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan( "cn.superbio.spbbase.*.mapper*")
@SpringBootApplication(exclude = {cn.superbio.spbbase.core.backend.mybatisplus.MybatisPlusAutoConfiguration.class })
public class SpbbaseManageApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpbbaseManageApplication.class, args);
    }

}
