package cn.superbio.spbbase.config.mp;

import com.google.common.collect.Maps;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * @author lxy
 */
@Component
public class ApiContext {
    private static final String KEY_CURRENT_PROVIDER_ID = "KEY_CURRENT_PROVIDER_ID";
    private static final String KEY_SYSTEM_TENANT_ID = "KEY_SYSTEM_TENANT_ID";
    private static final Map<String, Object> mContext = Maps.newConcurrentMap();

    public void setCurrentProviderId(String providerId) {
        mContext.put(KEY_CURRENT_PROVIDER_ID, providerId);
    }

    public String getCurrentProviderId() {
        return (String) mContext.get(KEY_CURRENT_PROVIDER_ID);
    }

    public void setSystemTenantId(String tenantId) {
        mContext.put(KEY_SYSTEM_TENANT_ID, tenantId);
    }

    public String getSystemTenantId() {
        return   (String)mContext.get(KEY_SYSTEM_TENANT_ID);
    }


}