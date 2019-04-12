package cn.superbio.spbbase.config.mp;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import com.baomidou.mybatisplus.extension.plugins.PerformanceInterceptor;
import com.baomidou.mybatisplus.extension.plugins.tenant.TenantHandler;
import com.google.common.collect.Lists;
import net.sf.jsqlparser.expression.Expression;
import net.sf.jsqlparser.expression.LongValue;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * @author lxy
 */
@Configuration
@MapperScan("cn.superbio.spbbase.upc.mapper")
public class MybatisPlusConfig {

    @Autowired
    private ApiContext apiContext;

    private static final List<String> IGNORE_TENANT_TABLES =
            Lists.newArrayList("ce_user");

    @Bean
    public PaginationInterceptor paginationInterceptor() {
        PaginationInterceptor paginationInterceptor = new PaginationInterceptor();

        // SQL解析处理拦截：增加租户处理回调。
        TenantSqlParser3 tenantSqlParser = new TenantSqlParser3()
                .setTenantHandler(new TenantHandler() {

                    @Override
                    public Expression getTenantId() {
                        if(apiContext.getCurrentProviderId().equals("")){
                            return null;
                        }
                        return new LongValue(apiContext.getCurrentProviderId());
                    }

                    @Override
                    public String getTenantIdColumn() {
                        if(apiContext.getSystemTenantId().equals("")){
                            return null;
                        }
                        return apiContext.getSystemTenantId();
                    }

                    @Override
                    public boolean doTableFilter(String tableName) {
                        return IGNORE_TENANT_TABLES.stream().anyMatch((e) -> !e.equalsIgnoreCase(tableName));
                    }
                });
        paginationInterceptor.setSqlParserList(Lists.newArrayList(tenantSqlParser));
        return paginationInterceptor;
    }

    @Bean(name = "performanceInterceptor")
    public PerformanceInterceptor performanceInterceptor() {
        return new PerformanceInterceptor();
    }





}