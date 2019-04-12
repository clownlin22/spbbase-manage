/*
Navicat MySQL Data Transfer

Source Server         : lin
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : spbbase

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2019-04-12 13:52:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for auth_data_limit
-- ----------------------------
DROP TABLE IF EXISTS `auth_data_limit`;
CREATE TABLE `auth_data_limit` (
  `id` bigint(20) DEFAULT NULL,
  `resource_name` varchar(100) DEFAULT NULL COMMENT '资源名称',
  `table_name` varchar(100) DEFAULT NULL COMMENT '资源对应表名称',
  `scope` tinyint(4) DEFAULT NULL COMMENT '数据范围：只自己，本部门，下级部门（包括本部门），指定部门，全部',
  `dept_ids` varchar(2000) DEFAULT NULL COMMENT '当数据范围是指定部门时，保存指定部门的ids'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_data_limit
-- ----------------------------
INSERT INTO `auth_data_limit` VALUES ('1', 'ce_user', 'ce_user', '2', '1');
INSERT INTO `auth_data_limit` VALUES ('2', 'ce_user3', 'ce_user3', '3', '1,2,3');

-- ----------------------------
-- Table structure for auth_dept
-- ----------------------------
DROP TABLE IF EXISTS `auth_dept`;
CREATE TABLE `auth_dept` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `parent_ids` varchar(255) DEFAULT NULL,
  `tree_sort` int(11) DEFAULT NULL,
  `tree_sorts` varchar(400) DEFAULT NULL,
  `tree_leaf` tinyint(4) DEFAULT NULL,
  `tree_depth` tinyint(4) DEFAULT NULL,
  `tree_names` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_dept
-- ----------------------------
INSERT INTO `auth_dept` VALUES ('1', '1', '1', '1', '1', '1', '1', '1', null, null);
INSERT INTO `auth_dept` VALUES ('2', '2', '2', '2', '2', '2', '2', '2', null, null);
INSERT INTO `auth_dept` VALUES ('3', '3', '3', '3', '3', '3', '3', '3', null, null);

-- ----------------------------
-- Table structure for auth_dept_role
-- ----------------------------
DROP TABLE IF EXISTS `auth_dept_role`;
CREATE TABLE `auth_dept_role` (
  `id` int(11) NOT NULL,
  `dept_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_dept_role
-- ----------------------------

-- ----------------------------
-- Table structure for auth_dept_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_dept_user`;
CREATE TABLE `auth_dept_user` (
  `id` bigint(20) NOT NULL,
  `dept_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `default` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_dept_user
-- ----------------------------
INSERT INTO `auth_dept_user` VALUES ('1', '1', '1', null);

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` bigint(40) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES ('1', 'admin', '保存权限标识', null, null);
INSERT INTO `auth_permission` VALUES ('2', 'user', '修改权限标识', null, null);
INSERT INTO `auth_permission` VALUES ('3', 'back:permission:save3', '保存', null, null);

-- ----------------------------
-- Table structure for auth_resouce
-- ----------------------------
DROP TABLE IF EXISTS `auth_resouce`;
CREATE TABLE `auth_resouce` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) DEFAULT NULL COMMENT '资源名称',
  `table_name` varchar(100) DEFAULT NULL COMMENT '资源对应表名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_resouce
-- ----------------------------

-- ----------------------------
-- Table structure for auth_role
-- ----------------------------
DROP TABLE IF EXISTS `auth_role`;
CREATE TABLE `auth_role` (
  `id` bigint(20) NOT NULL COMMENT '主键',
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `systemic` tinyint(4) DEFAULT NULL,
  `disabled` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_role
-- ----------------------------
INSERT INTO `auth_role` VALUES ('1', 'SUPER_ADMIN', '超级管理员', null, null, null, null);
INSERT INTO `auth_role` VALUES ('2', 'SUPER_TEST', '测试', null, null, null, null);

-- ----------------------------
-- Table structure for auth_role_data_limit
-- ----------------------------
DROP TABLE IF EXISTS `auth_role_data_limit`;
CREATE TABLE `auth_role_data_limit` (
  `id` bigint(20) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `data_limit_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_role_data_limit
-- ----------------------------
INSERT INTO `auth_role_data_limit` VALUES ('1', '1', '1');
INSERT INTO `auth_role_data_limit` VALUES ('2', '1', '2');

-- ----------------------------
-- Table structure for auth_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_role_permission`;
CREATE TABLE `auth_role_permission` (
  `id` bigint(20) NOT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `permission_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_role_permission
-- ----------------------------
INSERT INTO `auth_role_permission` VALUES ('1', '1', '1');
INSERT INTO `auth_role_permission` VALUES ('2', '1', '2');
INSERT INTO `auth_role_permission` VALUES ('3', '1', '3');
INSERT INTO `auth_role_permission` VALUES ('4', '2', '1');
INSERT INTO `auth_role_permission` VALUES ('5', '2', '2');

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` bigint(20) NOT NULL COMMENT '主键',
  `login_name` varchar(100) DEFAULT NULL COMMENT '登录名',
  `name` varchar(100) DEFAULT NULL COMMENT '用户名',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `phone` char(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `disabled` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
INSERT INTO `auth_user` VALUES ('1', 'admin', 'admin', '{noop}admin', null, null, '1');
INSERT INTO `auth_user` VALUES ('2', 'aa', 'aa', '{bcrypt}$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', null, null, null);
INSERT INTO `auth_user` VALUES ('3', 'bb', 'bb', '$2a$10$eQiaDkH883GEsWuJnHlzUuPOJ95Zo3FZ2QZkBV.BQ1TYPhdXo2nDS', null, null, null);
INSERT INTO `auth_user` VALUES ('4', 'dd', 'dd', '$2a$10$3uOoX1ps14CxuotogUoDreW8zXJOZB9XeGdrC/xDV36hhaE8Rn9HO', null, null, null);
INSERT INTO `auth_user` VALUES ('5', 'ee', 'ee', '{bcrypt}$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', null, null, null);

-- ----------------------------
-- Table structure for auth_user_role
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_role`;
CREATE TABLE `auth_user_role` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`user_id`),
  CONSTRAINT `userId` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of auth_user_role
-- ----------------------------
INSERT INTO `auth_user_role` VALUES ('1', '1', '1');
INSERT INTO `auth_user_role` VALUES ('2', '1', '2');
INSERT INTO `auth_user_role` VALUES ('3', '2', '1');

-- ----------------------------
-- Table structure for ce_user
-- ----------------------------
DROP TABLE IF EXISTS `ce_user`;
CREATE TABLE `ce_user` (
  `id` int(50) NOT NULL,
  `case_name` varchar(100) DEFAULT NULL,
  `case_age` int(50) DEFAULT NULL,
  `case_dept` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ce_user
-- ----------------------------
INSERT INTO `ce_user` VALUES ('1', 'lin', '1', '1');
INSERT INTO `ce_user` VALUES ('2', 'admin', '2', '2');
INSERT INTO `ce_user` VALUES ('3', 'yu', '3', '3');

-- ----------------------------
-- Table structure for databasechangelog
-- ----------------------------
DROP TABLE IF EXISTS `databasechangelog`;
CREATE TABLE `databasechangelog` (
  `ID` varchar(255) NOT NULL,
  `AUTHOR` varchar(255) NOT NULL,
  `FILENAME` varchar(255) NOT NULL,
  `DATEEXECUTED` datetime NOT NULL,
  `ORDEREXECUTED` int(11) NOT NULL,
  `EXECTYPE` varchar(10) NOT NULL,
  `MD5SUM` varchar(35) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `COMMENTS` varchar(255) DEFAULT NULL,
  `TAG` varchar(255) DEFAULT NULL,
  `LIQUIBASE` varchar(20) DEFAULT NULL,
  `CONTEXTS` varchar(255) DEFAULT NULL,
  `LABELS` varchar(255) DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of databasechangelog
-- ----------------------------
INSERT INTO `databasechangelog` VALUES ('V01__init_schema', 'admyvi', 'classpath:db/changelog/spbbase/authcenter/V01__init_schema.xml', '2018-12-03 09:25:37', '1', 'EXECUTED', '7:0048b1e976641f2f10b77b37eac233cf', 'createTable tableName=sys_user', '初始化权限认证平台服务数据库结构', null, '3.5.4', null, null, '3800337659');
INSERT INTO `databasechangelog` VALUES ('V01__init_schema', 'fudong', 'classpath:db/changelog/spbbase/attahment/V01__init_schema.xml', '2019-02-19 11:01:40', '2', 'EXECUTED', '7:ec0232d13e71adf6e40c1bfe700b5aed', 'createTable tableName=spbbase_attachment', '初始化基础附件服务数据库结构', null, '3.5.4', null, null, '0545299620');

-- ----------------------------
-- Table structure for databasechangeloglock
-- ----------------------------
DROP TABLE IF EXISTS `databasechangeloglock`;
CREATE TABLE `databasechangeloglock` (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of databasechangeloglock
-- ----------------------------
INSERT INTO `databasechangeloglock` VALUES ('1', '\0', null, null);

-- ----------------------------
-- Table structure for oauth_client_details
-- ----------------------------
DROP TABLE IF EXISTS `oauth_client_details`;
CREATE TABLE `oauth_client_details` (
  `client_id` varchar(128) NOT NULL,
  `resource_ids` varchar(256) DEFAULT NULL,
  `client_secret` varchar(256) DEFAULT NULL COMMENT '密码',
  `scope` varchar(256) DEFAULT NULL,
  `authorized_grant_types` varchar(256) DEFAULT NULL COMMENT '支持的授权方式',
  `web_server_redirect_uri` varchar(256) DEFAULT NULL,
  `authorities` varchar(256) DEFAULT NULL,
  `access_token_validity` int(11) DEFAULT NULL COMMENT 'access_token有效期（单位秒）',
  `refresh_token_validity` int(11) DEFAULT NULL COMMENT 'refresh_token有效期（单位秒）',
  `additional_information` varchar(4096) DEFAULT NULL,
  `autoapprove` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='oauth2的client表';

-- ----------------------------
-- Records of oauth_client_details
-- ----------------------------
INSERT INTO `oauth_client_details` VALUES ('system', '', '{noop}system', 'app', 'authorization_code,password', '', '', '500', '20', '', '');
INSERT INTO `oauth_client_details` VALUES ('test', null, '{noop}test', 'app', 'authorization_code,password,refresh_token', null, null, '500', '20', null, null);

-- ----------------------------
-- Table structure for spbbase_dict
-- ----------------------------
DROP TABLE IF EXISTS `spbbase_dict`;
CREATE TABLE `spbbase_dict` (
  `id` bigint(20) NOT NULL COMMENT '主键',
  `name` varchar(100) DEFAULT NULL COMMENT '字典名称',
  `code` varchar(100) DEFAULT NULL COMMENT '字典编码',
  `systemic` tinyint(4) DEFAULT NULL COMMENT '是否是系统字典：0. 否，1. 是',
  `disabled` tinyint(4) DEFAULT NULL COMMENT '是否禁用：0.否；1.是',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of spbbase_dict
-- ----------------------------

-- ----------------------------
-- Table structure for spbbase_dict_value
-- ----------------------------
DROP TABLE IF EXISTS `spbbase_dict_value`;
CREATE TABLE `spbbase_dict_value` (
  `id` bigint(20) NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `dict_code` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `systemic` tinyint(4) DEFAULT NULL,
  `disabled` tinyint(4) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `parent_ids` varchar(200) DEFAULT NULL,
  `tree_sort` int(11) DEFAULT NULL,
  `tree_sorts` varchar(400) DEFAULT NULL,
  `tree_leaf` tinyint(4) DEFAULT NULL,
  `tree_depth` tinyint(4) DEFAULT NULL,
  `tree_names` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of spbbase_dict_value
-- ----------------------------

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` bigint(20) unsigned NOT NULL,
  `login_name` varchar(20) NOT NULL COMMENT '登录名',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
