/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : Doc_Management

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 17/12/2020 16:38:23
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Doc_Titles
-- ----------------------------
DROP TABLE IF EXISTS `Doc_Titles`;
CREATE TABLE `Doc_Titles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `DocId` int DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8  COLLATE utf8_general_ci DEFAULT NULL,
  `bold` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of Doc_Titles
-- ----------------------------
BEGIN;
INSERT INTO `Doc_Titles` VALUES (25, 10, '关于叶汉权一个月后冲击大厂的通知', '1', 0, '2020-12-15 15:56:41', '2020-12-15 15:56:41');
INSERT INTO `Doc_Titles` VALUES (26, 11, '关于叶汉权晚归的通报批评', '0', 1, '2020-12-15 15:59:54', '2020-12-15 15:59:54');
INSERT INTO `Doc_Titles` VALUES (27, 7, '关于叶汉权是傻逼的公示', '1', 1, '2020-12-15 15:23:00', '2020-12-15 15:31:26');
INSERT INTO `Doc_Titles` VALUES (28, 8, '关于叶汉权保卫莫斯科退无可退的通报', '0', 1, '2020-12-15 16:24:01', '2020-12-15 16:24:01');
INSERT INTO `Doc_Titles` VALUES (29, 9, '关于叶汉权明天不去上Web开发课程的通知', '1', 0, '2020-12-15 15:55:13', '2020-12-15 15:55:13');
COMMIT;

-- ----------------------------
-- Table structure for Docs
-- ----------------------------
DROP TABLE IF EXISTS `Docs`;
CREATE TABLE `Docs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `text` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `text_html` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `pub_time` datetime DEFAULT NULL,
  `click_count` int DEFAULT NULL,
  `file_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `file_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `exm_status` int DEFAULT NULL,
  `pub_username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `exm_username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of Docs
-- ----------------------------
BEGIN;
INSERT INTO `Docs` VALUES (7, '学术科研', '大数据与互联网学院', '关于叶汉权是傻逼的公示', '叶汉权确实是个傻逼！', '<p><span style=\"font-size:64px\"><span style=\"color:#c0392b\">叶汉权确实是个傻逼！</span></span></p>', '2020-12-15 15:23:00', 9, 'http://39.106.96.14:3001/public/doc_files/7_叶汉权是傻逼证明.JPG', '叶汉权是傻逼证明.JPG', 1, 'LeBronChao', 'LeBronChao', '2020-12-15 15:23:00', '2020-12-16 08:06:00');
INSERT INTO `Docs` VALUES (8, '学生工作', '中德智能制造学院', '关于叶汉权保卫莫斯科退无可退的通报', '叶汉权进入坦克兵不用拖鞋，誓死保卫莫斯科，退无可退！', '<p><span style=\"font-size:30px\"><span style=\"color:#c0392b\">叶汉权进入坦克兵不用拖鞋，誓死保卫莫斯科，退无可退！</span></span></p>', '2020-12-15 15:54:03', 9, 'http://39.106.96.14:3001/public/doc_files/8_叶汉权惨死.JPG', '叶汉权惨死.JPG', 1, 'LeBronChao', 'LeBronChao', '2020-12-15 16:24:01', '2020-12-16 15:09:25');
INSERT INTO `Docs` VALUES (9, '教学教务', '大数据与互联网学院', '关于叶汉权明天不去上Web开发课程的通知', '叶汉权决定明天逃课！', '<p>叶汉权决定明天逃课！</p>', '2020-12-15 15:55:13', 4, '', '', 1, 'LeBronChao', 'LeBronChao', '2020-12-15 15:55:13', '2020-12-16 15:09:14');
INSERT INTO `Docs` VALUES (10, '学术科研', '城市交通与物流学院', '关于叶汉权一个月后冲击大厂的通知', '叶汉权：我自学一个月后必进大厂。', '<p><span style=\"font-size:30px\"><strong><span style=\"color:#003ba5\">叶汉权：我自学一个月后必进大厂。</span></strong></span></p>', '2020-12-15 15:56:41', 0, '', '', 2, 'LeBronChao', 'LeBronChao', '2020-12-15 15:56:41', '2020-12-15 15:57:01');
INSERT INTO `Docs` VALUES (11, '校园生活', '教务部', '关于叶汉权晚归的通报批评', '叶汉权日常外出宵夜酗酒，醉到不成人形由爹地们扛回，特此通报批评！', '<p>叶汉权日常外出宵夜酗酒，醉到不成人形由爹地们扛回，特此通报批评！</p>', '2020-12-15 15:59:54', 1, '', '', 0, 'LeBronChao', 'LeBronChao', '2020-12-15 15:59:54', '2020-12-16 02:01:04');
COMMIT;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------
BEGIN;
INSERT INTO `SequelizeMeta` VALUES ('20201212015102-create-doc.js');
INSERT INTO `SequelizeMeta` VALUES ('20201212022659-create-doc-title.js');
INSERT INTO `SequelizeMeta` VALUES ('20201212032840-create-doc.js');
INSERT INTO `SequelizeMeta` VALUES ('20201212032857-create-doc-title.js');
INSERT INTO `SequelizeMeta` VALUES ('20201212040710-create-doc-title.js');
INSERT INTO `SequelizeMeta` VALUES ('20201212040735-create-doc.js');
INSERT INTO `SequelizeMeta` VALUES ('20201214070104-create-user.js');
INSERT INTO `SequelizeMeta` VALUES ('20201215061046-create-doc.js');
COMMIT;

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `unit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `jur` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_no` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` VALUES (1, '20183220095', 'c0bdf91c10da8114dcd094c15fd6c7be', '巢炜文', '13025440633', '大数据与互联网学院', 0, '2020-12-14 08:04:19', '2020-12-14 08:04:19');
INSERT INTO `Users` VALUES (3, '20183220114', '1254729475ce015dece5da3b484538c3', '谢森豪', '13380938170', '大数据与互联网学院', 0, '2020-12-14 17:12:51', '2020-12-14 17:12:51');
INSERT INTO `Users` VALUES (4, '20183290012', '25d55ad283aa400af464c76d713c07ad', '唐海乐', '19866057969', '大数据与互联网学院', 3, '2020-12-15 15:27:31', '2020-12-15 15:27:31');
INSERT INTO `Users` VALUES (5, '20183220174', '25f9e794323b453885f5181f1b624d0b', '麦不易', '13144463365', '图书馆', 3, '2020-12-16 01:55:54', '2020-12-16 01:55:54');
INSERT INTO `Users` VALUES (6, '20183220129', '393e8214861ebf476003769921624d63', '陈鑫', '13691987367', '大数据与互联网学院', 3, '2020-12-16 08:02:39', '2020-12-16 08:02:39');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
