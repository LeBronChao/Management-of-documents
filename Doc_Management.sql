/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : 39.106.96.41:3306
 Source Schema         : Doc_Management

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 21/12/2020 09:13:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Doc_Titles
-- ----------------------------
DROP TABLE IF EXISTS `Doc_Titles`;
CREATE TABLE `Doc_Titles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `DocId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `bold` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of Doc_Titles
-- ----------------------------
BEGIN;
INSERT INTO `Doc_Titles` VALUES (34, 15, '关于组织中层干部参加市直单位处级干部专题培训班的通知', '1', 1, '2020-12-17 11:38:09', '2020-12-17 11:38:09');
COMMIT;

-- ----------------------------
-- Table structure for Docs
-- ----------------------------
DROP TABLE IF EXISTS `Docs`;
CREATE TABLE `Docs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` text,
  `text_html` text,
  `pub_time` datetime DEFAULT NULL,
  `click_count` int(11) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `exm_status` int(11) DEFAULT NULL,
  `pub_username` varchar(255) DEFAULT NULL,
  `exm_username` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of Docs
-- ----------------------------
BEGIN;
INSERT INTO `Docs` VALUES (15, '行政通知', '党委组织部', '关于组织中层干部参加市直单位处级干部专题培训班的通知', '全校各单位：\n根据市委组织部《关于举办市直单位处级干部专题培训班的通知》要求，现就我校中层干部参加市直单位处级干部专题培训班的有关事项通知如下：\n一、主题内容\n以习近平新时代中国特色社会主义思想为指导，把学习贯彻习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳重要讲话和重要指示精神，与学习贯彻党的十九届五中全会精神结合起来，与学习贯彻《深圳建设中国特色社会主义先行示范区综合改革试点实施方案（2020-2025年）》结合起来，引导全市党员领导干部进一步提高政治站位,深刻认识习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳的重大意义，深刻领会习近平总书记重要讲话、重要指示的精神实质和丰富内涵，深刻领悟习近平总书记的亲切关怀和厚望重托，深刻领会党的十九届五中全会精神，准确把握“十四五”时期经济社会发展指导思想、主要目标和必须遵循的原则，增强“四个意识”、坚定“四个自信”、做到“两个维护”，不忘初心、牢记使命、感恩奋进, 坚定不移朝着建设中国特色社会主义先行示范区的方向前行，努力创建社会主义现代化强国的城市范例，创造让世界刮目相看的新的更大奇迹，为全面建设社会主义现代化国家、实现第二个百年奋斗目标作出新的更大贡献。\n二、 培训对象\n（一）各部门正、副主任（部长），协理副主任（部长）；\n（二）各学院正、副院长，副书记、外事专员、校企合作专员。\n三、 培训安排\n培训班共举办10期，每期安排5个半天时间，集中观看伟中书记在全市正局级主要领导干部学习贯彻习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳重要讲话和重要指示精神暨学习贯彻党的十九届五中全会精神专题研讨班上的动员讲话暨主题报告录像、有关领导和专家专题辅导报告录像、邀请中央党校或市委党校教师围绕学习贯彻党的十九届五中全会精神进行授课，保证每人集中学习培训时间不少于2天半。\n四、 时间地点\n集中学习于2020年12月14日至2021年1月18日在市委党校大礼堂举行。具体安排如下：\n第1期：每周一上午9:00-12:00,即2020年12月14日、12月21日、12月28日、2021年1月4日、1月11日的上午；\n第2期：每周一下午2:30-5:30,即2020年12月14日、12月21日、12月28日、2021年1月4日、1月11日的下午；\n第3期：每周二上午9:00-12:00,即2020年12月15日、12月22日、12月29日、2021年1月5日、2021年1月12日的上午；\n第4期：每周二下午2:30-5:30,即2020年12月15日、12月22日、12月29日、2021年1月5日、1月12日的下午；\n第5期：每周三上午9:00-12:00,即2020年12月16日、12月23日、12月30日、2021年1 月6日、2021年1月13日的上午；\n第6期：每周三下午2:30-5:30,即2020年12月16日、12月23日、12月30日、2021年1 月6日、2021年1月13日的下午；\n第7期：每周四上午9:00-12:00,即2020年12月17日、12月24日、12月31日、2021年1月7日、2021年1月14日的上午；\n第8期：每周四下午2:30-5:30 ,即2020年12月17日、12月24日、12月31日、2021年1月7日、2021年1月14日的下午；\n第9期：前四次为每周五上午9:00-12:00,即2020年12月18日、12月25日、2021年1月8日、2021年1月15日的上午，第五次为2021年1月18日（周一）的上午；\n第10期：前四次为每周五下午2:30-5:30,即2020年12月18日、12月25日、2021年1月8日、2021年1月15日的下午，第五次为2021年1月18日（周一）的下午。\n五、有关要求\n（一）请各单位安排好工作，确保应训人员全部参训； 统筹好参训批次，保证各期参训人数基本相当。\n（二）培训通过网上平台报名，请各单位于12月7日前登录“广东省干部培训网络学院”深圳专区平台（manage.gdgbpx.com/gdce/desktop.aspx）完成报名工作。原则上不请假不调期，因特殊原因需请假的，需在网上平台的“请假管理”中提交申请并书面说明原因，报市委组织部按程序审批。未经批准不得请假、调期、换人。\n（三）请各有关单位认真做好组织安排工作，严格落实新冠肺炎疫情有关防控措施，排查风险隐患，确保安全。拟参训人员会前14天内如有新冠肺炎疑似症状、疫情中高风险地区人员接触史、疫情中高风险地区驻留史或其他疑似情况的，请及时报告并请假调期。请各单位严格落实责任，并做好有关核查、防护措施。学员培训期间需全程佩戴口罩，自觉接受体温检测。\n（四）请参加培训的同志于培训班次开始前15分钟，到市委党校大礼堂报到。培训期间须专心参训，不得迟到早退,市委组织部会同市委党校将采取现场点名和课间巡查的方式，严格培训管理，适时通报培训及考勤情况。\n特此通知。\n \n附件：报名操作指引', '<p style=\"text-align:left;text-indent:2em;\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">全校各单位：</span></span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">根据市委组织部《关于举办市直单位处级干部专题培训班的通知》要求，现就我校中层干部参加市直单位处级干部专题培训班的有关事项通知如下：</span></span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"MsoNormal\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">一、主题内容</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">以习近平新时代中国特色社会主义思想为指导，把学习贯彻习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳重要讲话和重要指示精神，与学习贯彻党的十九届五中全会精神结合起来，与学习贯彻《深圳建设中国特色社会主义先行示范区综合改革试点实施方案（2020-2025年）》结合起来，引导全市党员领导干部进一步提高政治站位,深刻认识习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳的重大意义，深刻领会习近平总书记重要讲话、重要指示的精神实质和丰富内涵，深刻领悟习近平总书记的亲切关怀和厚望重托，深刻领会党的十九届五中全会精神，准确把握“十四五”时期经济社会发展指导思想、主要目标和必须遵循的原则，增强“四个意识”、坚定“四个自信”、做到“两个维护”，不忘初心、牢记使命、感恩奋进, 坚定不移朝着建设中国特色社会主义先行示范区的方向前行，努力创建社会主义现代化强国的城市范例，创造让世界刮目相看的新的更大奇迹，为全面建设社会主义现代化国家、实现第二个百年奋斗目标作出新的更大贡献。</span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">二、</span></span></span></span> <span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">培训对象</span></span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（一）各部门正、副主任（部长），协理副主任（部长）；</span></span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（二）各学院正、副院长，副书记、外事专员、校企合作专员。</span></span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"MsoNormal\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">三、</span></span></span> <span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">培训安排</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">培训班共举办10期，每期安排5个半天时间，集中观看伟中书记在全市正局级主要领导干部学习贯彻习近平总书记出席深圳经济特区建立40周年庆祝大会和视察广东、深圳重要讲话和重要指示精神暨学习贯彻党的十九届五中全会精神专题研讨班上的动员讲话暨主题报告录像、有关领导和专家专题辅导报告录像、邀请中央党校或市委党校教师围绕学习贯彻党的十九届五中全会精神进行授课，<strong>保证每人集中学习培训时间不少于2天半。</strong></span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">四、</span></span></span> <span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">时间地点</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">集中学习于2020年12月14日至2021年1月18日在市委党校大礼堂举行。具体安排如下：</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第1期：每周一上午9:00-12:00,即2020年12月14日、12月21日、12月28日、2021年1月4日、1月11日的上午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第2期：每周一下午2:30-5:30,即2020年12月14日、12月21日、12月28日、2021年1月4日、1月11日的下午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第3期：每周二上午9:00-12:00,即2020年12月15日、12月22日、12月29日、2021年1月5日、2021年1月12日的上午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第4期：每周二下午2:30-5:30,即2020年12月15日、12月22日、12月29日、2021年1月5日、1月12日的下午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第5期：每周三上午9:00-12:00,即2020年12月16日、12月23日、12月30日、2021年1 月6日、2021年1月13日的上午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第6期：每周三下午2:30-5:30,即2020年12月16日、12月23日、12月30日、2021年1 月6日、2021年1月13日的下午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第7期：每周四上午9:00-12:00,即2020年12月17日、12月24日、12月31日、2021年1月7日、2021年1月14日的上午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第8期：每周四下午2:30-5:30 ,即2020年12月17日、12月24日、12月31日、2021年1月7日、2021年1月14日的下午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第9期：前四次为每周五上午9:00-12:00,即2020年12月18日、12月25日、2021年1月8日、2021年1月15日的上午，第五次为2021年1月18日（周一）的上午；</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">第10期：前四次为每周五下午2:30-5:30,即2020年12月18日、12月25日、2021年1月8日、2021年1月15日的下午，第五次为2021年1月18日（周一）的下午。</span></span></span></p><p style=\"text-align:justify;text-indent:2em;\" align=\"justify\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">五、有关要求</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（一）请各单位安排好工作，确保应训人员全部参训；</span></span></span> <span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">统筹好参训批次，保证各期参训人数基本相当。</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（二）培训通过网上平台报名，请各单位于12月7日前登录“广东省干部培训网络学院”深圳专区平台（manage.gdgbpx.com/gdce/desktop.aspx）完成报名工作。<strong>原则上不请假不调期，因特殊原因需请假的，需在网上平台的“请假管理”中提交申请并书面说明原因，报市委组织部按程序审批。未经批准不得请假、调期、换人。</strong></span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（三）请各有关单位认真做好组织安排工作，严格落实新冠肺炎疫情有关防控措施，排查风险隐患，确保安全。<strong>拟参训人员会前14天内如有新冠肺炎疑似症状、疫情中高风险地区人员接触史、疫情中高风险地区驻留史或其他疑似情况的，请及时报告并请假调期。请各单位严格落实责任，并做好有关核查、防护措施。学员培训期间需全程佩戴口罩，自觉接受体温检测。</strong></span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"15\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">（四）请参加培训的同志于培训班次开始前15分钟，到市委党校大礼堂报到。培训期间须专心参训，不得迟到早退,市委组织部会同市委党校将采取现场点名和课间巡查的方式，严格培训管理，适时通报培训及考勤情况。</span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">特此通知。</span></span></span></span></p><p style=\"text-align:left;text-indent:2em;\" class=\"MsoNormal\"> </p><p style=\"text-align:left;text-indent:2em;\" class=\"MsoNormal\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\"><span style=\"letter-spacing:0ptpx\"><span style=\"font-size:16ptpx\">附件：报名操作指引</span></span></span></span></p>', '2020-12-17 11:38:09', 14, 'http://39.106.96.41:3001/public/doc_files/15_报名操作指引.docx', '报名操作指引.docx', 1, 'LeBronChao', 'LeBronChao', '2020-12-17 11:38:09', '2020-12-20 09:02:50');
COMMIT;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS `SequelizeMeta`;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `jur` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_no` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of Users
-- ----------------------------
BEGIN;
INSERT INTO `Users` VALUES (1, '20183220095', 'c0bdf91c10da8114dcd094c15fd6c7be', '巢炜文', '13025440633', '大数据与互联网学院', 0, '2020-12-14 08:04:19', '2020-12-14 08:04:19');
INSERT INTO `Users` VALUES (3, '20183220114', '1254729475ce015dece5da3b484538c3', '谢森豪', '13380938170', '大数据与互联网学院', 0, '2020-12-14 17:12:51', '2020-12-14 17:12:51');
INSERT INTO `Users` VALUES (4, '20183290012', '25d55ad283aa400af464c76d713c07ad', '唐海乐', '19866057969', '大数据与互联网学院', 3, '2020-12-15 15:27:31', '2020-12-15 15:27:31');
INSERT INTO `Users` VALUES (5, '20183220174', '25f9e794323b453885f5181f1b624d0b', '麦不易', '13144463365', '图书馆', 3, '2020-12-16 01:55:54', '2020-12-16 01:55:54');
INSERT INTO `Users` VALUES (6, '20183220129', '393e8214861ebf476003769921624d63', '陈鑫', '13691987367', '大数据与互联网学院', 0, '2020-12-16 08:02:39', '2020-12-16 08:02:39');
INSERT INTO `Users` VALUES (7, '201902010223', '63f671380f32bda2f98f827f0617aa6a', '敬浩先', '13612809876', '大数据与互联网学院', 3, '2020-12-19 01:50:55', '2020-12-19 01:50:55');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
