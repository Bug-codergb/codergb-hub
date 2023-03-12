/*
 Navicat Premium Data Transfer

 Source Server         : NodeMySQL
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : codergb-hub

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 12/03/2023 18:58:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for block
-- ----------------------------
DROP TABLE IF EXISTS `block`;
CREATE TABLE `block`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cate` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of block
-- ----------------------------
INSERT INTO `block` VALUES ('1667028360697', '上传的视频', '1', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:00', '2022-11-24 22:05:54');
INSERT INTO `block` VALUES ('1667028411493', '热门上传视频', '1', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:51', '2022-11-24 22:05:55');
INSERT INTO `block` VALUES ('1667028433872', '短视频', '1', '每当有短视频上传后，此板块就会有显示', '2022-10-29 15:27:13', '2022-11-24 22:05:58');
INSERT INTO `block` VALUES ('1667028473518', '正在直播', '2', '此板块会在直播期间显示', '2022-10-29 15:27:53', '2022-11-24 22:05:58');
INSERT INTO `block` VALUES ('1667028537659', '过往的直播归档的视频', '2', '此板块会在已归档的直播视频时显示', '2022-10-29 15:28:57', '2022-11-24 22:06:02');
INSERT INTO `block` VALUES ('1667028570849', '即将开始的直播', '2', '此板块会在已安排的直播时显示', '2022-10-29 15:29:30', '2022-11-24 22:06:04');
INSERT INTO `block` VALUES ('1667028637618', '单个播放列表', '3', '', '2022-10-29 15:30:37', '2022-11-24 22:06:05');
INSERT INTO `block` VALUES ('1667028662350', '创建的播放列表', '3', '', '2022-10-29 15:31:02', '2022-11-24 22:06:07');
INSERT INTO `block` VALUES ('1667028677380', '多个播放列表', '3', '', '2022-10-29 15:31:17', '2022-11-24 22:06:09');
INSERT INTO `block` VALUES ('1667028710453', '订阅的频道', '4', '显示您订阅的频道', '2022-10-29 15:31:50', '2022-11-24 22:06:10');
INSERT INTO `block` VALUES ('1667028720735', '精选频道', '4', '', '2022-10-29 15:32:00', '2022-11-24 22:06:12');

-- ----------------------------
-- Table structure for block_content
-- ----------------------------
DROP TABLE IF EXISTS `block_content`;
CREATE TABLE `block_content`  (
  `blockId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  INDEX `blockId`(`blockId` ASC) USING BTREE,
  INDEX `cId`(`cId` ASC) USING BTREE,
  INDEX `pId`(`pId` ASC) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  CONSTRAINT `block_content_ibfk_1` FOREIGN KEY (`blockId`) REFERENCES `block` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_2` FOREIGN KEY (`cId`) REFERENCES `channel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_3` FOREIGN KEY (`pId`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_4` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of block_content
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isExplore` int NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1665897694232', '让他人', '2022-10-16 13:21:34', '2022-10-16 13:21:34', 0);
INSERT INTO `category` VALUES ('1665897699123', '任何人', '2022-10-16 13:21:39', '2022-10-16 13:21:39', 0);
INSERT INTO `category` VALUES ('1665897702064', '温热', '2022-10-16 13:21:42', '2023-01-20 21:24:02', 1);
INSERT INTO `category` VALUES ('1665897705187', '他今天', '2022-10-16 13:21:45', '2022-10-16 13:21:45', 0);
INSERT INTO `category` VALUES ('1665897708367', '微软', '2022-10-16 13:21:48', '2022-10-16 13:21:48', 0);
INSERT INTO `category` VALUES ('1665897712689', '复活复活', '2022-10-16 13:21:52', '2023-01-20 21:23:59', 1);
INSERT INTO `category` VALUES ('1665897715639', '任何一人', '2022-10-16 13:21:55', '2022-10-16 13:21:55', 0);
INSERT INTO `category` VALUES ('1665897719079', '恶气呃', '2022-10-16 13:21:59', '2022-10-16 13:21:59', 0);
INSERT INTO `category` VALUES ('1665897721642', '二哥突然', '2022-10-16 13:22:01', '2022-10-16 13:22:01', 0);
INSERT INTO `category` VALUES ('1665897724379', '儿胡同', '2022-10-16 13:22:04', '2023-01-20 21:23:57', 1);
INSERT INTO `category` VALUES ('1665897728729', '微软4人', '2022-10-16 13:22:08', '2022-10-16 13:22:08', 0);
INSERT INTO `category` VALUES ('1665897747495', '让国人', '2022-10-16 13:22:27', '2022-10-16 13:22:27', 0);
INSERT INTO `category` VALUES ('1665897751639', '请问', '2022-10-16 13:22:31', '2023-01-20 21:23:55', 1);

-- ----------------------------
-- Table structure for channel
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `alias` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `official` int NULL DEFAULT NULL,
  `trailer` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `featured` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `banner` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of channel
-- ----------------------------
INSERT INTO `channel` VALUES ('1265648948484', 'rwrewr', 'rewr', '1674222431747', 'dewe', 0, NULL, NULL, '1677303213508', '2023-01-25 15:43:33', '2023-02-25 13:33:33');
INSERT INTO `channel` VALUES ('1668927539032', 'vvvvvvvvvvvvvvvvvvvvvvvvvv', 'Jajajaja', '1667300096850', 'gggvvvvvvvvvvvvvvvvvvvvvvvvvvv反反复复烦烦烦烦烦烦烦烦烦烦烦烦额', 0, '1668935663798', '1668925793223', '1669298036342', '2022-11-20 14:59:07', '2022-11-24 21:53:56');
INSERT INTO `channel` VALUES ('1668930069921', '集团年后wife org v', 'sd', '1664789923657', 'rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位', 0, '1667111868216', '1667117126446', '1675174705480', '2022-11-20 15:41:34', '2023-01-31 22:18:25');
INSERT INTO `channel` VALUES ('1671344573529', 'dsd', 'dsd', '1667726102164', 'sfffewfwefwefewfvv分为氛围分为服务范围', 0, '1672641317970', '1672644074588', '1671344668397', '2022-12-18 14:23:31', '2023-01-02 16:00:00');
INSERT INTO `channel` VALUES ('1764894894852', '2rewrr', '23', '1674222407471', '32', 0, NULL, NULL, '1674632868391', '2023-01-25 15:42:13', '2023-01-25 15:47:48');
INSERT INTO `channel` VALUES ('1804866155566', 'ghgh', 'gbgb', '1674222445348', '45', 0, NULL, NULL, '1674633031409', '2023-01-25 15:42:51', '2023-01-25 15:50:31');
INSERT INTO `channel` VALUES ('3332323232333', '本人刷哎', '的威风威风', '1678512762310', '分威风', NULL, '1678512906798', NULL, '1678513177984', '2023-03-11 13:33:41', '2023-03-11 15:17:46');
INSERT INTO `channel` VALUES ('4333333333333', '二分', '访问', '1674222418492', 'rw分威风威风', 0, NULL, NULL, '1677309782781', '2023-01-25 15:44:15', '2023-02-25 15:23:02');
INSERT INTO `channel` VALUES ('4353454354555', 'dsfs', 'vvvv', '1674222436007', '34fwfre', 0, NULL, NULL, '1674632956452', '2023-01-25 15:43:14', '2023-01-25 15:49:16');
INSERT INTO `channel` VALUES ('5656565656566', 'dadad', 'sdsadsa', '1674222425812', 'tjtjytjytjyt', 0, NULL, NULL, '1677308494819', '2023-01-25 15:43:55', '2023-02-25 15:01:34');

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `sourceUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `online` int NULL DEFAULT NULL,
  `targetUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `deleteUser` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES ('1678618528643', '1', '1678512762310', 1, '1664789923657', NULL, '2023-03-12 18:55:28', '2023-03-12 18:55:28');

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE,
  INDEX `collection_userId_fk`(`userId` ASC) USING BTREE,
  CONSTRAINT `collection_userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('1674263667533', '343434', '1674200230627', '从v地方v地方v地方v', '1674222407471', '2023-01-21 09:14:27', '2023-01-25 18:53:27');
INSERT INTO `collection` VALUES ('1674547615747', 'edewdewdewdewde', '1674200031043', 'wfwfwef', '1667726102164', '2023-01-24 16:06:55', '2023-01-25 17:29:51');
INSERT INTO `collection` VALUES ('1674547795680', 'ewwedvfffffffff', '1674200031043', 'ffwfw', '1667726102164', '2023-01-24 16:09:55', '2023-01-25 17:29:52');
INSERT INTO `collection` VALUES ('1674562409747', 'vvvvvv', '1674200031043', 'sdfsfsdfs', '1667726102164', '2023-01-24 20:13:29', '2023-01-25 17:29:54');
INSERT INTO `collection` VALUES ('1674630095160', 'viojgvrjgtiojti', '1674630093543', 'fsfsdf', '1674222445348', '2023-01-25 15:01:35', '2023-01-25 17:29:54');
INSERT INTO `collection` VALUES ('1674630510128', 'wfwefwfwfewfefw', '1674630509000', 'fsfsf', '1674222445348', '2023-01-25 15:08:30', '2023-01-25 17:29:55');
INSERT INTO `collection` VALUES ('1674630630976', '10', '1674630630042', 'sfsdfds', '1674222445348', '2023-01-25 15:10:30', '2023-01-25 17:29:56');
INSERT INTO `collection` VALUES ('1674630645488', '100', '1674630643203', 'fsfdsf', '1674222445348', '2023-01-25 15:10:45', '2023-01-25 17:29:57');
INSERT INTO `collection` VALUES ('1674633193451', 'RELEASED', '1674633192562', 'sfsdf', '1674222407471', '2023-01-25 15:53:13', '2023-01-25 17:29:57');
INSERT INTO `collection` VALUES ('1674633216393', 'he Hit List', '1674633215445', 'fsdfds', '1674222407471', '2023-01-25 15:53:36', '2023-01-25 17:29:58');
INSERT INTO `collection` VALUES ('1674633250985', 'J-Hits!', '1674633250137', 'fsfsd', '1674222407471', '2023-01-25 15:54:10', '2023-01-25 17:29:59');
INSERT INTO `collection` VALUES ('1674633275394', '日本乐坛迅速走红的热门金曲', '1674633274497', 'fsfsdf', '1674222407471', '2023-01-25 15:54:35', '2023-01-25 17:29:59');
INSERT INTO `collection` VALUES ('1674633304286', '流行金曲', '1674633303233', 'fsfsf', '1674222407471', '2023-01-25 15:55:04', '2023-01-25 17:30:00');
INSERT INTO `collection` VALUES ('1674633329548', '2010 年代日本音乐', '1674633328551', 'fsfdsf', '1674222407471', '2023-01-25 15:55:29', '2023-01-25 17:30:02');
INSERT INTO `collection` VALUES ('1674639079702', 'vvvdfvfdvfdvfdvvvvv', '1674200031043', 'rfeferferfrefrefrfreferf', '1667726102164', '2023-01-25 17:31:19', '2023-01-25 17:31:19');
INSERT INTO `collection` VALUES ('1674639325321', '分为氛围分为氛围服务g人格', '1674639324028', 'f违法的全球恶的访问肥肉reregister', '1674222407471', '2023-01-25 17:35:25', '2023-01-25 17:35:25');
INSERT INTO `collection` VALUES ('1674640100096', '人纷纷热纷纷乳房非人非任飞', '1674640099289', '风热风热风热', '1674222407471', '2023-01-25 17:48:20', '2023-01-25 17:48:20');
INSERT INTO `collection` VALUES ('1674640113382', 'vrtgrttrhr wdwed', '1674640112507', 'fewfwefwf', '1674222407471', '2023-01-25 17:48:33', '2023-01-25 17:48:33');
INSERT INTO `collection` VALUES ('1675256242920', '二风热风热分', '1675256241916', '二分', '1664789923657', '2023-02-01 20:57:22', '2023-02-01 20:57:22');
INSERT INTO `collection` VALUES ('1675256454288', '111', '1675256452572', '1212', '1664789923657', '2023-02-01 21:00:54', '2023-02-01 21:00:54');
INSERT INTO `collection` VALUES ('1675256463248', '2', '1675256462106', '2', '1664789923657', '2023-02-01 21:01:03', '2023-02-01 21:01:03');
INSERT INTO `collection` VALUES ('1675256545541', '为分文未付', '1675256544176', 'e我', '1674222407471', '2023-02-01 21:02:25', '2023-02-01 21:02:25');
INSERT INTO `collection` VALUES ('1676899020229', '给i鬼鬼顾国贵', '1676899018977', '有一个一共偶哦光谱给', '1674222445348', '2023-02-20 21:17:00', '2023-02-20 21:17:00');
INSERT INTO `collection` VALUES ('1676899169950', '鬼鬼跟i哦故意共同分摊', '1676899168330', 'i后就哦几乎后悔', '1674222445348', '2023-02-20 21:19:29', '2023-02-20 21:19:29');

-- ----------------------------
-- Table structure for collection_video
-- ----------------------------
DROP TABLE IF EXISTS `collection_video`;
CREATE TABLE `collection_video`  (
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sort` int NOT NULL,
  PRIMARY KEY (`cId`, `vId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of collection_video
-- ----------------------------
INSERT INTO `collection_video` VALUES ('1674630630976', '1674204298817', 1);
INSERT INTO `collection_video` VALUES ('1674630630976', '1674211881903', 1);
INSERT INTO `collection_video` VALUES ('1674630630976', '1674212180782', 1);
INSERT INTO `collection_video` VALUES ('1674630630976', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674630645488', '1674212309138', 2);
INSERT INTO `collection_video` VALUES ('1674630645488', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674630645488', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633193451', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633216393', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633250985', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633275394', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633304286', '1674212598117', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674200195530', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674200319056', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674204125033', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674204298817', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674211881903', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674212180782', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674212309138', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674212417900', 12);
INSERT INTO `collection_video` VALUES ('1674633329548', '1674212598117', 12);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `replyId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  INDEX `replyId`(`replyId` ASC) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`replyId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1674218819053', '2323', '1667300096850', '1674199982940', NULL, '2023-01-20 20:46:59', '2023-01-20 20:46:59');
INSERT INTO `comment` VALUES ('1674219322162', 'rwrwrwrwererwr', '1667300096850', '1674200046723', NULL, '2023-01-20 20:55:22', '2023-01-20 20:55:22');
INSERT INTO `comment` VALUES ('1675174379511', '12121212121212121212', '1664789923657', '1674212180782', NULL, '2023-01-31 22:12:59', '2023-01-31 22:12:59');
INSERT INTO `comment` VALUES ('1675174386111', '给v让个人隔热隔热哥哥', '1664789923657', '1674212180782', NULL, '2023-01-31 22:13:06', '2023-01-31 22:13:06');
INSERT INTO `comment` VALUES ('1675174390732', '个合同合同还是defer个', '1664789923657', '1674212180782', NULL, '2023-01-31 22:13:10', '2023-01-31 22:13:10');
INSERT INTO `comment` VALUES ('1675174398443', '一天一天建议添加一条具有调节一天就一天', '1664789923657', NULL, '1675174379511', '2023-01-31 22:13:18', '2023-01-31 22:13:18');
INSERT INTO `comment` VALUES ('1675174404563', '爱妃服务网分为热武器热情热情热情而确认确认', '1664789923657', NULL, '1675174379511', '2023-01-31 22:13:24', '2023-01-31 22:13:24');
INSERT INTO `comment` VALUES ('1675174410436', '漫画美军官员今天发货的隔热隔热隔热隔热', '1664789923657', NULL, '1675174379511', '2023-01-31 22:13:30', '2023-01-31 22:13:30');
INSERT INTO `comment` VALUES ('1675174418301', '葛瑞阁如果是v规划建议亏哦iu一i', '1664789923657', NULL, '1675174379511', '2023-01-31 22:13:38', '2023-01-31 22:13:38');
INSERT INTO `comment` VALUES ('1675174431798', '郭太皇太后图哈特而改为Greg', '1664789923657', NULL, '1675174410436', '2023-01-31 22:13:51', '2023-01-31 22:13:51');
INSERT INTO `comment` VALUES ('1677903389060', 'gergergegregerg', '1667300096850', '1675174120100', NULL, '2023-03-04 12:16:29', '2023-03-04 12:16:29');
INSERT INTO `comment` VALUES ('1677903392405', 'gergregregreg', '1667300096850', '1675174120100', NULL, '2023-03-04 12:16:32', '2023-03-04 12:16:32');
INSERT INTO `comment` VALUES ('1678003622101', '温热我热我热温热我热温热微软', '1674222425812', '1677913812494', NULL, '2023-03-05 16:07:02', '2023-03-05 16:07:02');
INSERT INTO `comment` VALUES ('1678003873398', '予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎', '1674222436007', '1678003854022', NULL, '2023-03-05 16:11:13', '2023-03-05 16:11:13');

-- ----------------------------
-- Table structure for dm
-- ----------------------------
DROP TABLE IF EXISTS `dm`;
CREATE TABLE `dm`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `text` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  CONSTRAINT `dm_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dm
-- ----------------------------
INSERT INTO `dm` VALUES ('1674219397179', 'ddasd', '01:16', '1674211881903', '1667300096850', '2023-01-20 20:56:37', '2023-01-20 20:56:37');
INSERT INTO `dm` VALUES ('1675174355142', '而微软微软为', '00:07', '1674717470061', '1664789923657', '2023-01-31 22:12:35', '2023-01-31 22:12:35');
INSERT INTO `dm` VALUES ('1675256592436', '纷纷', '00:03', '1675174589862', '1664789923657', '2023-02-01 21:03:12', '2023-02-01 21:03:12');
INSERT INTO `dm` VALUES ('1678003894167', 'Greg阴风怒号，浊浪排空，日星隐曜', '00:58', '1678003854022', '1674222436007', '2023-03-05 16:11:34', '2023-03-05 16:11:34');
INSERT INTO `dm` VALUES ('1678004028093', '京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予', '00:07', '1674204298817', '1674222436007', '2023-03-05 16:13:48', '2023-03-05 16:13:48');
INSERT INTO `dm` VALUES ('1678004054014', '连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。', '00:21', '1674204298817', '1674222436007', '2023-03-05 16:14:14', '2023-03-05 16:14:14');
INSERT INTO `dm` VALUES ('1678004061477', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，', '00:38', '1674204298817', '1674222436007', '2023-03-05 16:14:21', '2023-03-05 16:14:21');
INSERT INTO `dm` VALUES ('1678004068845', '一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之', '00:45', '1674204298817', '1674222436007', '2023-03-05 16:14:28', '2023-03-05 16:14:28');
INSERT INTO `dm` VALUES ('1678004075181', '滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上', '00:52', '1674204298817', '1674222436007', '2023-03-05 16:14:35', '2023-03-05 16:14:35');
INSERT INTO `dm` VALUES ('1678004081788', '连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。(隐曜 一作：隐耀；淫雨 通：霪雨)', '00:04', '1674204298817', '1674222436007', '2023-03-05 16:14:41', '2023-03-05 16:14:41');

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `picUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vioUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `originalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `filename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` int NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of file
-- ----------------------------
INSERT INTO `file` VALUES ('1674199935054', 'http://localhost:8888/image/1674199935054', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674199935053.jpg', 119804, '2023-01-20 15:32:15', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674199926446', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-01-20 15:32:59', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674200031043', 'http://localhost:8888/image/1674200031043', NULL, '3.webp', 'image/webp', './upload/image', '1674200031039.webp', 85024, '2023-01-20 15:33:51', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200016544', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2023-01-20 15:34:03', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674200106101', 'http://localhost:8888/image/1674200106101', NULL, '1670486044628_539539601_200.jpg', 'image/jpeg', './upload/image', '1674200106099.jpg', 50409, '2023-01-20 15:35:06', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200091290', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2023-01-20 15:36:31', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674200230627', 'http://localhost:8888/image/1674200230627', NULL, '3183845842.jpg', 'image/jpeg', './upload/image', '1674200230626.jpg', 73184, '2023-01-20 15:37:10', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200214358', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2023-01-20 15:38:36', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674204052794', 'http://localhost:8888/image/1674204052794', NULL, '3648126291.jpg', 'image/jpeg', './upload/image', '1674204052792.jpg', 106867, '2023-01-20 16:40:52', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674204032369', NULL, 'http://localhost:8888/video/c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', '怪盗基德.mp4', NULL, './upload/video/', 'c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', NULL, '2023-01-20 16:42:03', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674204262747', 'http://localhost:8888/image/1674204262747', NULL, 'd82a28f5cacc1ed1b49af75b3c11fc8f95cf83d4.jpg', 'image/jpeg', './upload/image', '1674204262742.jpg', 106498, '2023-01-20 16:44:22', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674204241693', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-01-20 16:44:57', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674211850134', NULL, 'http://localhost:8888/video/d774d2468c81a72607d7cf6e666b7ecd.m3u8', '808389520-1-16.mp4', NULL, './upload/video/', 'd774d2468c81a72607d7cf6e666b7ecd.m3u8', NULL, '2023-01-20 18:51:04', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674211872548', 'http://localhost:8888/image/1674211872548', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674211872546.jpg', 36408, '2023-01-20 18:51:12', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212032510', 'http://localhost:8888/image/1674212032510', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674212032509.jpg', 12857, '2023-01-20 18:53:52', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212154984', NULL, 'http://localhost:8888/video/14012f2678f887445b24f9ebd76df0b4.m3u8', '卡塔尔世界杯.mp4', NULL, './upload/video/', '14012f2678f887445b24f9ebd76df0b4.m3u8', NULL, '2023-01-20 18:56:00', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674212169820', 'http://localhost:8888/image/1674212169820', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1674212169818.jpg', 78289, '2023-01-20 18:56:09', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212241381', 'http://localhost:8888/image/1674212241381', NULL, 'hq720.png', 'image/png', './upload/image', '1674212241372.png', 120228, '2023-01-20 18:57:21', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212215995', NULL, 'http://localhost:8888/video/29822064e596b4b965457c3276c4ffed.m3u8', '梵高.mp4', NULL, './upload/video/', '29822064e596b4b965457c3276c4ffed.m3u8', NULL, '2023-01-20 18:58:28', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674212384537', 'http://localhost:8888/image/1674212384537', NULL, 'p2185073849.webp', 'image/webp', './upload/image', '1674212384534.webp', 71402, '2023-01-20 18:59:44', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212362331', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-01-20 19:00:16', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674212512334', 'http://localhost:8888/image/1674212512334', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1674212512333.jpg', 42026, '2023-01-20 19:01:52', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212489238', NULL, 'http://localhost:8888/video/a932e9d92c87e538f345e77c143841e2.m3u8', '成log.mp4', NULL, './upload/video/', 'a932e9d92c87e538f345e77c143841e2.m3u8', NULL, '2023-01-20 19:03:15', '2023-01-21 08:53:23');
INSERT INTO `file` VALUES ('1674629079602', 'http://localhost:8888/image/1674629079602', NULL, 'gb.jpg', 'image/jpeg', './upload/image', '1674629079596.jpg', 60177, '2023-01-25 14:44:39', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674629431367', 'http://localhost:8888/image/1674629431367', NULL, 'gb.jpg', 'image/jpeg', './upload/image', '1674629431366.jpg', 68180, '2023-01-25 14:50:31', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674629534266', 'http://localhost:8888/image/1674629534266', NULL, 'gb.jpg', 'image/jpeg', './upload/image', '1674629534265.jpg', 65082, '2023-01-25 14:52:14', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674629651095', 'http://localhost:8888/image/1674629651095', NULL, 'gb.jpg', 'image/jpeg', './upload/image', '1674629651094.jpg', 65406, '2023-01-25 14:54:11', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674629686230', 'http://localhost:8888/image/1674629686230', NULL, 'gb.jpg', 'image/jpeg', './upload/image', '1674629686228.jpg', 68180, '2023-01-25 14:54:46', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674630093543', 'http://localhost:8888/image/1674630093543', NULL, '1670486044628_539539601_200.jpg', 'image/jpeg', './upload/image', '1674630093542.jpg', 95999, '2023-01-25 15:01:33', '2023-01-25 15:03:13');
INSERT INTO `file` VALUES ('1674630509000', 'http://localhost:8888/image/1674630509000', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674630508997.jpg', 94271, '2023-01-25 15:08:29', '2023-01-25 15:08:29');
INSERT INTO `file` VALUES ('1674630630042', 'http://localhost:8888/image/1674630630042', NULL, '3.webp', 'image/webp', './upload/image', '1674630630041.webp', 72802, '2023-01-25 15:10:30', '2023-01-25 15:10:30');
INSERT INTO `file` VALUES ('1674630643203', 'http://localhost:8888/image/1674630643203', NULL, '2462589981.jpg', 'image/jpeg', './upload/image', '1674630643202.jpg', 63362, '2023-01-25 15:10:43', '2023-01-25 15:10:43');
INSERT INTO `file` VALUES ('1674632370220', 'http://localhost:8888/image/1674632370220', NULL, '2462589981.jpg', 'image/jpeg', './upload/channel/avatar', '1674632370217.jpg', 62990, '2023-01-25 15:39:30', '2023-01-25 15:39:30');
INSERT INTO `file` VALUES ('1674632385532', 'http://localhost:8888/image/1674632385532', NULL, 'hq720.png', 'image/png', './upload/image', '1674632385530.png', 122599, '2023-01-25 15:39:45', '2023-01-25 15:39:45');
INSERT INTO `file` VALUES ('1674632438703', 'http://localhost:8888/image/1674632438703', NULL, '3.webp', 'image/webp', './upload/channel/avatar', '1674632438702.webp', 83200, '2023-01-25 15:40:38', '2023-01-25 15:40:38');
INSERT INTO `file` VALUES ('1674632672642', 'http://localhost:8888/image/1674632672642', NULL, '2462589981.jpg', 'image/jpeg', './upload/channel/avatar', '1674632672641.jpg', 61608, '2023-01-25 15:44:32', '2023-01-25 15:44:32');
INSERT INTO `file` VALUES ('1674632789745', 'http://localhost:8888/image/1674632789745', NULL, '2.jpg', 'image/jpeg', './upload/channel/avatar', '1674632789744.jpg', 105055, '2023-01-25 15:46:29', '2023-01-25 15:46:29');
INSERT INTO `file` VALUES ('1674632868391', 'http://localhost:8888/image/1674632868391', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1674632868390.jpg', 100595, '2023-01-25 15:47:48', '2023-01-25 15:47:48');
INSERT INTO `file` VALUES ('1674632956452', 'http://localhost:8888/image/1674632956452', NULL, 'cb1c3ef50e22b6096fde67febe863494caefebad.png', 'image/png', './upload/image', '1674632956451.png', 226231, '2023-01-25 15:49:16', '2023-01-25 15:49:16');
INSERT INTO `file` VALUES ('1674633031409', 'http://localhost:8888/image/1674633031409', NULL, 'ww.jpeg', 'image/jpeg', './upload/image', '1674633031406.jpeg', 239304, '2023-01-25 15:50:31', '2023-01-25 15:50:31');
INSERT INTO `file` VALUES ('1674633192562', 'http://localhost:8888/image/1674633192562', NULL, '489969227.jpg', 'image/jpeg', './upload/image', '1674633192561.jpg', 72192, '2023-01-25 15:53:12', '2023-01-25 15:53:12');
INSERT INTO `file` VALUES ('1674633215445', 'http://localhost:8888/image/1674633215445', NULL, '3644204234.jpg', 'image/jpeg', './upload/image', '1674633215443.jpg', 43177, '2023-01-25 15:53:35', '2023-01-25 15:53:35');
INSERT INTO `file` VALUES ('1674633250137', 'http://localhost:8888/image/1674633250137', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1674633250136.jpg', 74901, '2023-01-25 15:54:10', '2023-01-25 15:54:10');
INSERT INTO `file` VALUES ('1674633274497', 'http://localhost:8888/image/1674633274497', NULL, 'd82a28f5cacc1ed1b49af75b3c11fc8f95cf83d4.jpg', 'image/jpeg', './upload/image', '1674633274496.jpg', 88894, '2023-01-25 15:54:34', '2023-01-25 15:54:34');
INSERT INTO `file` VALUES ('1674633303233', 'http://localhost:8888/image/1674633303233', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674633303231.jpg', 65582, '2023-01-25 15:55:03', '2023-01-25 15:55:03');
INSERT INTO `file` VALUES ('1674633328551', 'http://localhost:8888/image/1674633328551', NULL, 'p2185073849.webp', 'image/webp', './upload/image', '1674633328550.webp', 84366, '2023-01-25 15:55:28', '2023-01-25 15:55:28');
INSERT INTO `file` VALUES ('1674639284185', 'http://localhost:8888/image/1674639284185', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1674639284182.jpg', 72697, '2023-01-25 17:34:44', '2023-01-25 17:34:44');
INSERT INTO `file` VALUES ('1674639324028', 'http://localhost:8888/image/1674639324028', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1674639324027.jpg', 71932, '2023-01-25 17:35:24', '2023-01-25 17:35:24');
INSERT INTO `file` VALUES ('1674640099289', 'http://localhost:8888/image/1674640099289', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674640099287.jpg', 97849, '2023-01-25 17:48:19', '2023-01-25 17:48:19');
INSERT INTO `file` VALUES ('1674640112507', 'http://localhost:8888/image/1674640112507', NULL, '109951168221730139.jpg', 'image/jpeg', './upload/image', '1674640112506.jpg', 65823, '2023-01-25 17:48:32', '2023-01-25 17:48:32');
INSERT INTO `file` VALUES ('1674698090429', 'http://localhost:8888/image/1674698090429', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1674698090426.jpg', 44696, '2023-01-26 09:54:50', '2023-01-26 09:54:50');
INSERT INTO `file` VALUES ('1674698073764', NULL, 'http://localhost:8888/video/6933a2f225c0519e362cf4ec1b29a761.m3u8', 'see you agin.mp4', NULL, './upload/video/', '6933a2f225c0519e362cf4ec1b29a761.m3u8', NULL, '2023-01-26 09:54:51', '2023-01-26 09:54:51');
INSERT INTO `file` VALUES ('1674709350967', NULL, 'http://localhost:8888/video/a932e9d92c87e538f345e77c143841e2.m3u8', '成log.mp4', NULL, './upload/video/', 'a932e9d92c87e538f345e77c143841e2.m3u8', NULL, '2023-01-26 13:04:24', '2023-01-26 13:04:24');
INSERT INTO `file` VALUES ('1674709472989', 'http://localhost:8888/image/1674709472989', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674709472988.jpg', 119975, '2023-01-26 13:04:32', '2023-01-26 13:04:32');
INSERT INTO `file` VALUES ('1674709565803', 'http://localhost:8888/image/1674709565803', NULL, '2.jpg', 'image/jpeg', './upload/image', '1674709565800.jpg', 129982, '2023-01-26 13:06:05', '2023-01-26 13:06:05');
INSERT INTO `file` VALUES ('1674709555023', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2023-01-26 13:07:50', '2023-01-26 13:07:50');
INSERT INTO `file` VALUES ('1674717212228', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-01-26 15:14:41', '2023-01-26 15:14:41');
INSERT INTO `file` VALUES ('1674717254263', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-01-26 15:15:27', '2023-01-26 15:15:27');
INSERT INTO `file` VALUES ('1674717462404', 'http://localhost:8888/image/1674717462404', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674717462401.jpg', 36629, '2023-01-26 15:17:42', '2023-01-26 15:17:42');
INSERT INTO `file` VALUES ('1675174064114', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2023-01-31 22:08:12', '2023-01-31 22:08:12');
INSERT INTO `file` VALUES ('1675174113069', 'http://localhost:8888/image/1675174113069', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1675174113067.jpg', 46319, '2023-01-31 22:08:33', '2023-01-31 22:08:33');
INSERT INTO `file` VALUES ('1675174484085', 'http://localhost:8888/image/1675174484085', NULL, '2462589981.jpg', 'image/jpeg', './upload/image', '1675174484082.jpg', 63860, '2023-01-31 22:14:44', '2023-01-31 22:14:44');
INSERT INTO `file` VALUES ('1675174470427', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2023-01-31 22:16:25', '2023-01-31 22:16:25');
INSERT INTO `file` VALUES ('1675174705480', 'http://localhost:8888/image/1675174705480', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1675174705479.jpg', 158848, '2023-01-31 22:18:25', '2023-01-31 22:18:25');
INSERT INTO `file` VALUES ('1675256241916', 'http://localhost:8888/image/1675256241916', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1675256241913.jpg', 70024, '2023-02-01 20:57:21', '2023-02-01 20:57:21');
INSERT INTO `file` VALUES ('1675256452572', 'http://localhost:8888/image/1675256452572', NULL, '1.jpg', 'image/jpeg', './upload/image', '1675256452570.jpg', 94764, '2023-02-01 21:00:52', '2023-02-01 21:00:52');
INSERT INTO `file` VALUES ('1675256462106', 'http://localhost:8888/image/1675256462106', NULL, '1242910458.jpg', 'image/jpeg', './upload/image', '1675256462105.jpg', 72271, '2023-02-01 21:01:02', '2023-02-01 21:01:02');
INSERT INTO `file` VALUES ('1675256544176', 'http://localhost:8888/image/1675256544176', NULL, 'ww.jpeg', 'image/jpeg', './upload/image', '1675256544175.jpeg', 81766, '2023-02-01 21:02:24', '2023-02-01 21:02:24');
INSERT INTO `file` VALUES ('1676899018977', 'http://localhost:8888/image/1676899018977', NULL, '1356806980.jpg', 'image/jpeg', './upload/image', '1676899018975.jpg', 56363, '2023-02-20 21:16:58', '2023-02-20 21:16:58');
INSERT INTO `file` VALUES ('1676899168330', 'http://localhost:8888/image/1676899168330', NULL, '2049078194 (1).jpg', 'image/jpeg', './upload/image', '1676899168329.jpg', 83470, '2023-02-20 21:19:28', '2023-02-20 21:19:28');
INSERT INTO `file` VALUES ('1677303213508', 'http://localhost:8888/image/1677303213508', NULL, '1356806980.jpg', 'image/jpeg', './upload/image', '1677303213504.jpg', 23632, '2023-02-25 13:33:33', '2023-02-25 13:33:33');
INSERT INTO `file` VALUES ('1677308411469', 'http://localhost:8888/image/1677308411469', NULL, 'wallhaven-49e8gd.png', 'image/png', './upload/image', '1677308411467.png', 100230, '2023-02-25 15:00:11', '2023-02-25 15:00:11');
INSERT INTO `file` VALUES ('1677308399313', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2023-02-25 15:00:27', '2023-02-25 15:00:27');
INSERT INTO `file` VALUES ('1677308494819', 'http://localhost:8888/image/1677308494819', NULL, 'wallhaven-49e8gd.png', 'image/png', './upload/image', '1677308494818.png', 298277, '2023-02-25 15:01:34', '2023-02-25 15:01:34');
INSERT INTO `file` VALUES ('1677309782781', 'http://localhost:8888/image/1677309782781', NULL, '1848905788.jpg', 'image/jpeg', './upload/image', '1677309782780.jpg', 16810, '2023-02-25 15:23:02', '2023-02-25 15:23:02');
INSERT INTO `file` VALUES ('1677904234789', NULL, 'http://localhost:8888/video/d54fee7e3cd2b721183dd24b5affbfb4.m3u8', '123.mp4', NULL, './upload/video/', 'd54fee7e3cd2b721183dd24b5affbfb4.m3u8', NULL, '2023-03-04 12:31:25', '2023-03-04 12:31:25');
INSERT INTO `file` VALUES ('1677907300976', 'http://localhost:8888/image/1677907300976', NULL, '157514682.jpg', 'image/jpeg', './upload/image', '1677907300973.jpg', 43423, '2023-03-04 13:21:40', '2023-03-04 13:21:40');
INSERT INTO `file` VALUES ('1677911105226', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '775996062-1-208.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2023-03-04 14:25:58', '2023-03-04 14:25:58');
INSERT INTO `file` VALUES ('1677911182732', 'http://localhost:8888/image/1677911182732', NULL, '10673188_220811446034_2.jpg', 'image/jpeg', './upload/image', '1677911182730.jpg', 28775, '2023-03-04 14:26:22', '2023-03-04 14:26:22');
INSERT INTO `file` VALUES ('1677912986136', 'http://localhost:8888/image/1677912986136', NULL, '1.jpg', 'image/jpeg', './upload/image', '1677912986135.jpg', 120325, '2023-03-04 14:56:26', '2023-03-04 14:56:26');
INSERT INTO `file` VALUES ('1677913146008', 'http://localhost:8888/image/1677913146008', NULL, 'wallhaven-5gg6d3.png', 'image/png', './upload/image', '1677913146007.png', 92547, '2023-03-04 14:59:06', '2023-03-04 14:59:06');
INSERT INTO `file` VALUES ('1677913286490', NULL, 'http://localhost:8888/video/0a6a82a6a91537e044ac7f284262b2bb.m3u8', 'tom and jenrry.mp4', NULL, './upload/video/', '0a6a82a6a91537e044ac7f284262b2bb.m3u8', NULL, '2023-03-04 15:02:09', '2023-03-04 15:02:09');
INSERT INTO `file` VALUES ('1677913615907', 'http://localhost:8888/image/1677913615907', NULL, '109951168221730139.jpg', 'image/jpeg', './upload/image', '1677913615906.jpg', 51094, '2023-03-04 15:06:55', '2023-03-04 15:06:55');
INSERT INTO `file` VALUES ('1677913627575', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2023-03-04 15:07:33', '2023-03-04 15:07:33');
INSERT INTO `file` VALUES ('1677913754223', 'http://localhost:8888/image/1677913754223', NULL, '2265481084.jpg', 'image/jpeg', './upload/image', '1677913754222.jpg', 71957, '2023-03-04 15:09:14', '2023-03-04 15:09:14');
INSERT INTO `file` VALUES ('1677913761084', NULL, 'http://localhost:8888/video/d54fee7e3cd2b721183dd24b5affbfb4.m3u8', '123.mp4', NULL, './upload/video/', 'd54fee7e3cd2b721183dd24b5affbfb4.m3u8', NULL, '2023-03-04 15:10:06', '2023-03-04 15:10:06');
INSERT INTO `file` VALUES ('1677914691922', 'http://localhost:8888/image/1677914691922', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1677914691921.jpg', 43801, '2023-03-04 15:24:51', '2023-03-04 15:24:51');
INSERT INTO `file` VALUES ('1677914700439', NULL, 'http://localhost:8888/video/c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', '怪盗基德.mp4', NULL, './upload/video/', 'c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', NULL, '2023-03-04 15:26:32', '2023-03-04 15:26:32');
INSERT INTO `file` VALUES ('1677914874560', 'http://localhost:8888/image/1677914874560', NULL, '3.webp', 'image/webp', './upload/image', '1677914874559.webp', 80548, '2023-03-04 15:27:54', '2023-03-04 15:27:54');
INSERT INTO `file` VALUES ('1677914881422', NULL, 'http://localhost:8888/video/14012f2678f887445b24f9ebd76df0b4.m3u8', '卡塔尔世界杯.mp4', NULL, './upload/video/', '14012f2678f887445b24f9ebd76df0b4.m3u8', NULL, '2023-03-04 15:28:06', '2023-03-04 15:28:06');
INSERT INTO `file` VALUES ('1677915345000', 'http://localhost:8888/image/1677915345000', NULL, '2.jpg', 'image/jpeg', './upload/image', '1677915344999.jpg', 114885, '2023-03-04 15:35:45', '2023-03-04 15:35:45');
INSERT INTO `file` VALUES ('1677915373487', 'http://localhost:8888/image/1677915373487', NULL, '157514682.jpg', 'image/jpeg', './upload/image', '1677915373485.jpg', 29056, '2023-03-04 15:36:13', '2023-03-04 15:36:13');
INSERT INTO `file` VALUES ('1678003837159', 'http://localhost:8888/image/1678003837159', NULL, '3831863927.jpg', 'image/jpeg', './upload/image', '1678003837156.jpg', 40295, '2023-03-05 16:10:37', '2023-03-05 16:10:37');
INSERT INTO `file` VALUES ('1678003808311', NULL, 'http://localhost:8888/video/0a6a82a6a91537e044ac7f284262b2bb.m3u8', 'tom and jenrry.mp4', NULL, './upload/video/', '0a6a82a6a91537e044ac7f284262b2bb.m3u8', NULL, '2023-03-05 16:10:52', '2023-03-05 16:10:52');
INSERT INTO `file` VALUES ('1678512850448', NULL, 'http://localhost:8888/video/6933a2f225c0519e362cf4ec1b29a761.m3u8', 'see you agin.mp4', NULL, './upload/video/', '6933a2f225c0519e362cf4ec1b29a761.m3u8', NULL, '2023-03-11 13:34:28', '2023-03-11 13:34:28');
INSERT INTO `file` VALUES ('1678512875906', 'http://localhost:8888/image/1678512875906', NULL, '3831863927.jpg', 'image/jpeg', './upload/image', '1678512875905.jpg', 39533, '2023-03-11 13:34:35', '2023-03-11 13:34:35');
INSERT INTO `file` VALUES ('1678513177984', 'http://localhost:8888/image/1678513177984', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1678513177982.jpg', 117552, '2023-03-11 13:39:37', '2023-03-11 13:39:37');

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `count` int NULL DEFAULT 0,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  INDEX `history_ibfk_2`(`userId` ASC) USING BTREE,
  CONSTRAINT `history_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `history_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of history
-- ----------------------------
INSERT INTO `history` VALUES ('1674199989428', '1674199982940', '1667300096850', 7, '2023-01-20 20:56:54');
INSERT INTO `history` VALUES ('1674200330441', '1674200195530', '1664789923657', 1, '2023-01-20 15:38:50');
INSERT INTO `history` VALUES ('1674200338999', '1674199982940', '1664789923657', 2, '2023-01-20 18:54:46');
INSERT INTO `history` VALUES ('1674211886483', '1674211881903', '1664789923657', 3, '2023-01-26 09:25:16');
INSERT INTO `history` VALUES ('1674212184790', '1674212180782', '1664789923657', 4, '2023-01-31 22:12:50');
INSERT INTO `history` VALUES ('1674212317356', '1674204125033', '1667300096850', 4, '2023-01-20 20:56:19');
INSERT INTO `history` VALUES ('1674212322791', '1674212309138', '1667300096850', 14, '2023-01-20 20:55:53');
INSERT INTO `history` VALUES ('1674212327039', '1674212180782', '1667300096850', 2, '2023-01-20 21:18:33');
INSERT INTO `history` VALUES ('1674212330438', '1674211881903', '1667300096850', 1, '2023-01-20 20:56:25');
INSERT INTO `history` VALUES ('1674212337479', '1674200195530', '1667300096850', 1, '2023-01-20 20:48:28');
INSERT INTO `history` VALUES ('1674212423209', '1674212417900', '1664789923657', 2, '2023-01-31 22:09:00');
INSERT INTO `history` VALUES ('1674212618654', '1674212598117', '1667300096850', 19, '2023-01-20 21:18:43');
INSERT INTO `history` VALUES ('1674216043074', '1674212417900', '1667300096850', 29, '2023-02-26 15:18:22');
INSERT INTO `history` VALUES ('1674216272663', '1674204298817', '1667300096850', 5, '2023-03-04 15:38:19');
INSERT INTO `history` VALUES ('1674217754550', '1674212598117', '1664789923657', 12, '2023-03-06 21:41:39');
INSERT INTO `history` VALUES ('1674218263323', '1674200046723', '1667300096850', 10, '2023-01-21 19:56:59');
INSERT INTO `history` VALUES ('1674218834170', '1674200319056', '1667300096850', 2, '2023-01-21 19:57:56');
INSERT INTO `history` VALUES ('1674615599533', '1674204298817', '1664789923657', 2, '2023-01-31 22:17:28');
INSERT INTO `history` VALUES ('1674643204905', '1674212309138', '1674222445348', 1, '2023-01-25 18:40:05');
INSERT INTO `history` VALUES ('1674643226610', '1674211881903', '1674222445348', 0, '2023-01-25 18:40:26');
INSERT INTO `history` VALUES ('1674643234825', '1674204125033', '1674222445348', 0, '2023-01-25 18:40:34');
INSERT INTO `history` VALUES ('1674643242396', '1674200046723', '1674222445348', 1, '2023-01-25 18:40:47');
INSERT INTO `history` VALUES ('1674643245142', '1674212417900', '1674222445348', 0, '2023-01-25 18:40:45');
INSERT INTO `history` VALUES ('1674644351013', '1674200195530', '1674222445348', 0, '2023-01-25 18:59:11');
INSERT INTO `history` VALUES ('1674698121771', '1674698104289', '1667726102164', 4, '2023-01-26 09:57:53');
INSERT INTO `history` VALUES ('1674698152464', '1674212417900', '1667726102164', 0, '2023-01-26 09:55:52');
INSERT INTO `history` VALUES ('1674698278323', '1674200195530', '1667726102164', 0, '2023-01-26 09:57:58');
INSERT INTO `history` VALUES ('1674709681028', '1674709673843', '1664789923657', 1, '2023-01-31 22:17:21');
INSERT INTO `history` VALUES ('1674717478585', '1674717470061', '1664789923657', 6, '2023-02-20 21:48:11');
INSERT INTO `history` VALUES ('1675174594775', '1675174589862', '1664789923657', 29, '2023-02-20 21:48:14');
INSERT INTO `history` VALUES ('1676898878853', '1675174120100', '1664789923657', 5, '2023-02-20 21:47:54');
INSERT INTO `history` VALUES ('1676900521270', '1674709496396', '1664789923657', 0, '2023-02-20 21:42:01');
INSERT INTO `history` VALUES ('1676900689772', '1674698104289', '1664789923657', 0, '2023-02-20 21:44:49');
INSERT INTO `history` VALUES ('1676900917987', '1674200319056', '1664789923657', 2, '2023-02-25 13:25:04');
INSERT INTO `history` VALUES ('1677302712043', '1674212309138', '1664789923657', 1, '2023-02-25 13:25:12');
INSERT INTO `history` VALUES ('1677303083772', '1675174589862', '1674222431747', 1, '2023-02-25 13:31:24');
INSERT INTO `history` VALUES ('1677308432184', '1677308428529', '1674222431747', 0, '2023-02-25 15:00:32');
INSERT INTO `history` VALUES ('1677310297702', '1674709673843', '1674222436007', 1, '2023-02-25 15:33:11');
INSERT INTO `history` VALUES ('1677310394481', '1675174589862', '1674222436007', 8, '2023-03-05 16:09:23');
INSERT INTO `history` VALUES ('1677310429052', '1674698104289', '1674222436007', 3, '2023-02-25 16:21:48');
INSERT INTO `history` VALUES ('1677310434433', '1674212309138', '1674222436007', 1, '2023-02-25 16:20:58');
INSERT INTO `history` VALUES ('1677310436469', '1674199982940', '1674222436007', 3, '2023-02-25 16:21:04');
INSERT INTO `history` VALUES ('1677310494840', '1677308428529', '1667300096850', 5, '2023-02-26 15:28:43');
INSERT INTO `history` VALUES ('1677310609596', '1674204298817', '1674222436007', 5, '2023-03-05 16:16:12');
INSERT INTO `history` VALUES ('1677310691994', '1674204125033', '1674222436007', 0, '2023-02-25 15:38:11');
INSERT INTO `history` VALUES ('1677310724820', '1677308428529', '1674222436007', 3, '2023-02-25 16:21:25');
INSERT INTO `history` VALUES ('1677310785941', '1674200319056', '1674222436007', 4, '2023-03-05 16:16:11');
INSERT INTO `history` VALUES ('1677310797690', '1675174120100', '1674222436007', 0, '2023-02-25 15:39:57');
INSERT INTO `history` VALUES ('1677310804090', '1674717470061', '1674222436007', 3, '2023-03-05 16:55:55');
INSERT INTO `history` VALUES ('1677310822945', '1674200046723', '1674222436007', 1, '2023-02-25 16:21:45');
INSERT INTO `history` VALUES ('1677312539931', '1674698104289', '1667300096850', 3, '2023-02-26 15:33:52');
INSERT INTO `history` VALUES ('1677395892138', '1675174120100', '1667300096850', 3, '2023-03-04 12:16:21');
INSERT INTO `history` VALUES ('1677396849345', '1674709673843', '1667300096850', 0, '2023-02-26 15:34:09');
INSERT INTO `history` VALUES ('1677397425179', '1675174589862', '1667300096850', 0, '2023-02-26 15:43:45');
INSERT INTO `history` VALUES ('1677913000366', '1677912996302', '1667300096850', 1, '2023-03-04 14:56:40');
INSERT INTO `history` VALUES ('1677913356625', '1677913339226', '1667300096850', 1, '2023-03-04 15:02:36');
INSERT INTO `history` VALUES ('1677913701076', '1677913665361', '1667300096850', 1, '2023-03-04 15:08:21');
INSERT INTO `history` VALUES ('1677913818479', '1677913812494', '1667300096850', 1, '2023-03-04 15:10:18');
INSERT INTO `history` VALUES ('1677914897792', '1677914892106', '1667300096850', 3, '2023-03-04 15:49:43');
INSERT INTO `history` VALUES ('1678002370977', '1677914892106', '1674222418492', 2, '2023-03-05 15:48:14');
INSERT INTO `history` VALUES ('1678003553501', '1674212180782', '1674222425812', 1, '2023-03-05 16:05:53');
INSERT INTO `history` VALUES ('1678003567426', '1677913812494', '1674222425812', 2, '2023-03-05 16:06:51');
INSERT INTO `history` VALUES ('1678003584601', '1677914892106', '1674222425812', 0, '2023-03-05 16:06:24');
INSERT INTO `history` VALUES ('1678003740064', '1677914892106', '1674222436007', 0, '2023-03-05 16:09:00');
INSERT INTO `history` VALUES ('1678003859949', '1678003854022', '1674222436007', 2, '2023-03-05 16:46:31');
INSERT INTO `history` VALUES ('1678005897598', '1677913812494', '1674222436007', 1, '2023-03-05 16:44:58');
INSERT INTO `history` VALUES ('1678110120403', '1677912996302', '1664789923657', 1, '2023-03-06 21:42:00');
INSERT INTO `history` VALUES ('1678511833870', '1678003854022', '1664789923657', 3, '2023-03-11 13:31:27');
INSERT INTO `history` VALUES ('1678512708574', '1677914892106', '1664789923657', 0, '2023-03-11 13:31:48');

-- ----------------------------
-- Table structure for later
-- ----------------------------
DROP TABLE IF EXISTS `later`;
CREATE TABLE `later`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`vId`, `userId`) USING BTREE,
  INDEX `later_ibfk_2`(`userId` ASC) USING BTREE,
  CONSTRAINT `later_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `later_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of later
-- ----------------------------
INSERT INTO `later` VALUES ('1674220668843', '1674199982940', '1667300096850', '2023-01-20 21:17:48', '2023-01-20 21:17:48');
INSERT INTO `later` VALUES ('1674696134922', '1674204298817', '1664789923657', '2023-01-26 09:22:14', '2023-01-26 09:22:14');
INSERT INTO `later` VALUES ('1674220188687', '1674212309138', '1667300096850', '2023-01-20 21:09:48', '2023-01-20 21:09:48');
INSERT INTO `later` VALUES ('1674696129935', '1674212417900', '1664789923657', '2023-01-26 09:22:09', '2023-01-26 09:22:09');
INSERT INTO `later` VALUES ('1674219688748', '1674212417900', '1667300096850', '2023-01-20 21:01:28', '2023-01-20 21:01:28');
INSERT INTO `later` VALUES ('1674696112708', '1674212598117', '1664789923657', '2023-01-26 09:21:52', '2023-01-26 09:21:52');
INSERT INTO `later` VALUES ('1674219673008', '1674212598117', '1667300096850', '2023-01-20 21:01:13', '2023-01-20 21:01:13');
INSERT INTO `later` VALUES ('1674698256813', '1674698104289', '1667726102164', '2023-01-26 09:57:36', '2023-01-26 09:57:36');
INSERT INTO `later` VALUES ('1675174138226', '1674717470061', '1664789923657', '2023-01-31 22:08:58', '2023-01-31 22:08:58');
INSERT INTO `later` VALUES ('1677310796493', '1674717470061', '1674222436007', '2023-02-25 15:39:56', '2023-02-25 15:39:56');
INSERT INTO `later` VALUES ('1677396812411', '1675174589862', '1667300096850', '2023-02-26 15:33:32', '2023-02-26 15:33:32');
INSERT INTO `later` VALUES ('1677396807045', '1677308428529', '1667300096850', '2023-02-26 15:33:27', '2023-02-26 15:33:27');

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `vid` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `title`(`title` ASC) USING BTREE,
  INDEX `vid`(`vid` ASC) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `cId`(`cId` ASC) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_ibfk_3` FOREIGN KEY (`cId`) REFERENCES `channel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of moment
-- ----------------------------
INSERT INTO `moment` VALUES ('1677995707537', '佛配件佛烹饪', '分让国微软微软为缝纫工', '1675174589862', '1674222431747', '1265648948484', '2023-03-05 13:55:07', '2023-03-05 13:55:07');
INSERT INTO `moment` VALUES ('1677995720228', '分威风威风【就', '微风威锋网', '1677308428529', '1674222431747', '1265648948484', '2023-03-05 13:55:20', '2023-03-05 13:55:20');
INSERT INTO `moment` VALUES ('1677995743586', '服务费附件为欧派附件', '打网球的的覅哦那', '1674212598117', '1674222431747', '1265648948484', '2023-03-05 13:55:43', '2023-03-05 13:55:43');
INSERT INTO `moment` VALUES ('1677995777827', '威风威风威风威风还有合同', '分威风威风无法为一塌糊涂有为一塌糊涂有为一塌糊涂有为一塌糊涂有为一塌糊涂有', '1677914892106', '1674222418492', '4333333333333', '2023-03-05 13:56:17', '2023-03-05 14:29:49');
INSERT INTO `moment` VALUES ('1677995788283', '还有他还有他今天', '味分高味分高味分高味分高味分高味分高味分高味分高味分高味分高味分高味分高味分高', '1674204125033', '1674222418492', '4333333333333', '2023-03-05 13:56:28', '2023-03-05 14:29:46');
INSERT INTO `moment` VALUES ('1677995797558', '特特特通过', '沟通如果突然和用途突然和用途突然和用途突然和用途突然和用途突然和用途', '1677913339226', '1674222418492', '4333333333333', '2023-03-05 13:56:37', '2023-03-05 14:29:53');
INSERT INTO `moment` VALUES ('1677998711583', '这首歌正式太好听了', '这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了这首歌正式太好听了', '1674212309138', '1674222418492', '4333333333333', '2023-03-05 14:45:11', '2023-03-05 14:45:11');
INSERT INTO `moment` VALUES ('1677998825890', '苏州演唱会演唱会苏州演', '苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱会演唱会苏州演唱', '1674204298817', '1674222418492', '4333333333333', '2023-03-05 14:47:05', '2023-03-05 14:47:05');
INSERT INTO `moment` VALUES ('1677998918850', '这就是哎哎哎', '清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。（天人 一作：仙人；层清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。（天人 一作：仙人；层清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。（天人 一作：仙人；层', '1677308428529', '1674222418492', '4333333333333', '2023-03-05 14:48:38', '2023-03-05 14:48:38');
INSERT INTO `moment` VALUES ('1678003085523', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！(见机 一作：安贫；以犹欢 一作：而相欢)', '1677913812494', '1674222418492', '4333333333333', '2023-03-05 15:58:05', '2023-03-05 15:58:05');
INSERT INTO `moment` VALUES ('1678003117415', '萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1674211881903', '1674222418492', '4333333333333', '2023-03-05 15:58:37', '2023-03-05 15:58:37');
INSERT INTO `moment` VALUES ('1678003155479', '川泽纡其骇瞩', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗', '1677914892106', '1674222418492', '4333333333333', '2023-03-05 15:59:15', '2023-03-05 15:59:15');
INSERT INTO `moment` VALUES ('1678003184237', '层峦耸翠，上出重霄；飞阁流丹，下临无地', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦。(轴 通：舳；迷津 一作：弥津；云销雨霁，彩彻区明 一作：虹销雨霁，彩彻云衢)', '1675174120100', '1674222418492', '4333333333333', '2023-03-05 15:59:44', '2023-03-05 15:59:44');
INSERT INTO `moment` VALUES ('1678003204760', '盈虚之有数。望长安于日下', '盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下盈虚之有数。望长安于日下', '1677912996302', '1674222418492', '4333333333333', '2023-03-05 16:00:04', '2023-03-05 16:00:04');
INSERT INTO `moment` VALUES ('1678003237081', '得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声', '1675174589862', '1674222418492', '4333333333333', '2023-03-05 16:00:37', '2023-03-05 16:00:37');
INSERT INTO `moment` VALUES ('1678003513900', '庆历四年春，滕子京谪守巴陵郡', '予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎', '1677914892106', '1674222425812', '5656565656566', '2023-03-05 16:05:13', '2023-03-05 16:05:13');
INSERT INTO `moment` VALUES ('1678003543400', '若夫淫雨霏霏，连月不开，阴风怒号', '若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。(隐曜 一作：隐耀；淫雨 通：霪雨)淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。(隐曜 一作：隐耀；淫雨 通：霪雨)', '1675174589862', '1674222425812', '5656565656566', '2023-03-05 16:05:43', '2023-03-05 16:05:43');
INSERT INTO `moment` VALUES ('1678003684598', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千', '1677913339226', '1674222436007', '4353454354555', '2023-03-05 16:08:04', '2023-03-05 16:08:04');
INSERT INTO `moment` VALUES ('1678003705817', '放热峰', '年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。(具 通：俱)\n\n　　予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫\n　　予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫', '1674204298817', '1674222436007', '4353454354555', '2023-03-05 16:08:25', '2023-03-05 16:08:25');

-- ----------------------------
-- Table structure for playlist
-- ----------------------------
DROP TABLE IF EXISTS `playlist`;
CREATE TABLE `playlist`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isPublic` int NULL DEFAULT 1,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of playlist
-- ----------------------------
INSERT INTO `playlist` VALUES ('1665824604596', 'foo', 1, '', '1664789923657', '2022-10-15 17:03:24', '2022-10-15 17:03:24');
INSERT INTO `playlist` VALUES ('1665824630522', 'sdsds', 1, 'ferferfer', '1664789923657', '2022-10-15 17:03:50', '2022-10-15 17:03:50');
INSERT INTO `playlist` VALUES ('1669384866494', '天天用户体验', 1, '一体化', '1667300096850', '2022-11-25 22:01:06', '2022-11-25 22:01:06');
INSERT INTO `playlist` VALUES ('1669385003854', 'bhhbhgbgbh', 0, 'eee3we', '1667300096850', '2022-11-25 22:03:23', '2022-11-25 22:03:23');
INSERT INTO `playlist` VALUES ('1669448406900', '你好啊李银河', 1, '你好啊李银河', '1667300096850', '2022-11-26 15:40:06', '2022-11-26 15:40:06');
INSERT INTO `playlist` VALUES ('1669449769836', '王小波你', 0, '王小波一', '1667300096850', '2022-11-26 16:02:49', '2022-11-27 15:07:44');
INSERT INTO `playlist` VALUES ('1672560707135', '哈哈哈哈哈哈哈', 0, '哈哈哈哈哈哈哈', '1667726102164', '2023-01-01 16:11:47', '2023-01-01 16:11:47');
INSERT INTO `playlist` VALUES ('1672560823517', '你好啊你好', 1, '你好啊你好', '1667726102164', '2023-01-01 16:13:43', '2023-01-01 16:13:43');
INSERT INTO `playlist` VALUES ('1672563163420', '123', 1, '123', '1667726102164', '2023-01-01 16:52:43', '2023-01-01 16:52:43');
INSERT INTO `playlist` VALUES ('1672566345941', '然后用如何如何', 1, '然后用如何如何', '1667726102164', '2023-01-01 17:45:45', '2023-01-01 17:45:45');
INSERT INTO `playlist` VALUES ('1672566525895', '22222222222', 0, '22222222222', '1667726102164', '2023-01-01 17:48:45', '2023-01-01 17:48:45');
INSERT INTO `playlist` VALUES ('1673163611098', 'yuyuyuyu', 0, 'yuyuyuyu', '1667300096850', '2023-01-08 15:40:11', '2023-01-08 15:40:11');
INSERT INTO `playlist` VALUES ('1674614810952', 'bbbbbbbbb', 1, 'bfrfrferferf', '1664789923657', '2023-01-25 10:46:50', '2023-01-25 10:46:50');
INSERT INTO `playlist` VALUES ('1674614909307', '525252', 0, '2525252525', '1664789923657', '2023-01-25 10:48:29', '2023-01-25 10:48:29');
INSERT INTO `playlist` VALUES ('1674614942263', 'qqq', 0, '2525252525ewfwfwfw', '1664789923657', '2023-01-25 10:49:02', '2023-01-25 10:49:02');
INSERT INTO `playlist` VALUES ('1674615041121', '12121212', 0, '21frefrefef', '1664789923657', '2023-01-25 10:50:41', '2023-01-25 10:50:41');
INSERT INTO `playlist` VALUES ('1674615048453', 'ff', 1, 'ff', '1664789923657', '2023-01-25 10:50:48', '2023-01-25 10:50:48');
INSERT INTO `playlist` VALUES ('1674615084422', 'vb', 1, 'vb', '1664789923657', '2023-01-25 10:51:24', '2023-01-25 10:51:24');
INSERT INTO `playlist` VALUES ('1674615110132', 'e', 1, 'e', '1664789923657', '2023-01-25 10:51:50', '2023-01-25 10:51:50');
INSERT INTO `playlist` VALUES ('1674615126341', 'e3e3', 1, 'e3e', '1664789923657', '2023-01-25 10:52:06', '2023-01-25 10:52:06');
INSERT INTO `playlist` VALUES ('1674615151532', 'e3e3e3', 1, 'e3e3e', '1664789923657', '2023-01-25 10:52:31', '2023-01-25 10:52:31');
INSERT INTO `playlist` VALUES ('1674615159913', '4g4g4g45g4', 0, 'g45g45g45', '1664789923657', '2023-01-25 10:52:39', '2023-01-25 10:52:39');
INSERT INTO `playlist` VALUES ('1674615631776', 'vfvdvdewe', 1, 'rwerwerwer', '1664789923657', '2023-01-25 11:00:31', '2023-01-25 11:00:31');
INSERT INTO `playlist` VALUES ('1674616444524', 'New This Week', 1, 'New This Week', '1674222445348', '2023-01-25 11:14:04', '2023-01-25 11:14:04');
INSERT INTO `playlist` VALUES ('1674616463383', 'Live Performances', 1, 'Live Performances', '1674222445348', '2023-01-25 11:14:23', '2023-01-25 11:14:23');
INSERT INTO `playlist` VALUES ('1674616483033', 'Classic Videos, Fresh Look - 90\'s Takeover', 1, 'Classic Videos, Fresh Look - 90\'s Takeover', '1674222445348', '2023-01-25 11:14:43', '2023-01-25 11:14:43');
INSERT INTO `playlist` VALUES ('1674633138290', '新着ミュージックビデオ', 1, '新着ミュージックビデオ新着ミュージックビデオ', '1674222407471', '2023-01-25 15:52:18', '2023-01-25 15:52:18');
INSERT INTO `playlist` VALUES ('1674633155384', '音楽の急上昇', 1, '音楽の急上昇音楽の急上昇音楽の急上昇', '1674222407471', '2023-01-25 15:52:35', '2023-01-25 15:52:35');
INSERT INTO `playlist` VALUES ('1674639237122', '怕怕怕怕怕', 1, 'v表格微风威锋网威风威风', '1674222407471', '2023-01-25 17:33:57', '2023-01-25 17:33:57');
INSERT INTO `playlist` VALUES ('1674639265754', '发', 1, '发', '1674222407471', '2023-01-25 17:34:25', '2023-01-25 17:34:25');
INSERT INTO `playlist` VALUES ('1675174729439', '二二二二二二', 0, '二二二二二二', '1664789923657', '2023-01-31 22:18:49', '2023-01-31 22:18:49');
INSERT INTO `playlist` VALUES ('1677302954067', '俄乌克兰冲突', 1, '俄乌克兰冲突', '1674222431747', '2023-02-25 13:29:14', '2023-02-25 13:29:14');
INSERT INTO `playlist` VALUES ('1677302968722', '美国摧毁台湾', 1, '美国摧毁台湾', '1674222431747', '2023-02-25 13:29:28', '2023-02-25 13:29:28');
INSERT INTO `playlist` VALUES ('1677302990280', '则连夫斯基', 1, '则连夫斯基', '1674222431747', '2023-02-25 13:29:50', '2023-02-25 13:29:50');
INSERT INTO `playlist` VALUES ('1677303001523', '泰国马来西亚军事', 1, '泰国马来西亚军事', '1674222431747', '2023-02-25 13:30:01', '2023-02-25 13:30:01');
INSERT INTO `playlist` VALUES ('1677303021876', '金正恩阅兵', 1, '金正恩阅兵', '1674222431747', '2023-02-25 13:30:21', '2023-02-25 13:30:21');
INSERT INTO `playlist` VALUES ('1677303052540', '英国加入SCIA', 1, '英国加入SCIA', '1674222431747', '2023-02-25 13:30:52', '2023-02-25 13:30:52');
INSERT INTO `playlist` VALUES ('1677303075732', '澳大利亚援助乌克兰', 1, '澳大利亚援助乌克兰', '1674222431747', '2023-02-25 13:31:15', '2023-02-25 13:31:15');
INSERT INTO `playlist` VALUES ('1677309612725', '娱乐乐翻天', 1, '娱乐乐翻天', '1674222418492', '2023-02-25 15:20:12', '2023-02-25 15:20:12');
INSERT INTO `playlist` VALUES ('1677309620189', '欧美科幻', 1, '欧美科幻', '1674222418492', '2023-02-25 15:20:20', '2023-02-25 15:20:20');
INSERT INTO `playlist` VALUES ('1677309629860', '日韩综艺列表', 1, '日韩综艺列表', '1674222418492', '2023-02-25 15:20:29', '2023-02-25 15:20:29');
INSERT INTO `playlist` VALUES ('1677309639557', '康熙来了', 1, '康熙来了', '1674222418492', '2023-02-25 15:20:39', '2023-02-25 15:20:39');
INSERT INTO `playlist` VALUES ('1677309817830', '米哈游新款', 1, '米哈游新款', '1674222425812', '2023-02-25 15:23:37', '2023-02-25 15:23:37');
INSERT INTO `playlist` VALUES ('1677309829478', '王者荣耀官宣', 1, '王者荣耀官宣', '1674222425812', '2023-02-25 15:23:49', '2023-02-25 15:23:49');
INSERT INTO `playlist` VALUES ('1677309842157', '途游斗地主', 1, '途游斗地主', '1674222425812', '2023-02-25 15:24:02', '2023-02-25 15:24:02');
INSERT INTO `playlist` VALUES ('1677309860630', '暴风下架oo第四版', 1, '暴风下架oo第四版', '1674222425812', '2023-02-25 15:24:20', '2023-02-25 15:24:20');
INSERT INTO `playlist` VALUES ('1677309873840', '微信小程序', 1, '微信小程序', '1674222425812', '2023-02-25 15:24:33', '2023-02-25 15:24:33');
INSERT INTO `playlist` VALUES ('1677310131210', '绝代双骄梅西C罗', 1, '绝代双骄梅西C罗', '1674222436007', '2023-02-25 15:28:51', '2023-02-25 15:28:51');
INSERT INTO `playlist` VALUES ('1677310149045', '张继科乒乓球', 1, '张继科乒乓球', '1674222436007', '2023-02-25 15:29:09', '2023-02-25 15:29:09');
INSERT INTO `playlist` VALUES ('1677310158460', '大魔王林丹', 1, '大魔王林丹', '1674222436007', '2023-02-25 15:29:18', '2023-02-25 15:29:18');
INSERT INTO `playlist` VALUES ('1677310166740', '西甲联赛', 1, '西甲联赛', '1674222436007', '2023-02-25 15:29:26', '2023-02-25 15:29:26');
INSERT INTO `playlist` VALUES ('1677396000537', '543453543544', 1, '543453543544', '1667300096850', '2023-02-26 15:20:00', '2023-02-26 15:20:00');

-- ----------------------------
-- Table structure for playlist_video
-- ----------------------------
DROP TABLE IF EXISTS `playlist_video`;
CREATE TABLE `playlist_video`  (
  `pId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pId`, `vId`) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  CONSTRAINT `playlist_video_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `playlist_video_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of playlist_video
-- ----------------------------
INSERT INTO `playlist_video` VALUES ('1665824604596', '1674212309138', '2023-01-20 18:58:29', '2023-01-20 18:58:29');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1674199982940', '2023-01-20 15:33:02', '2023-01-20 15:33:02');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1674200046723', '2023-01-20 15:34:06', '2023-01-20 15:34:06');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1674200195530', '2023-01-20 15:36:35', '2023-01-20 15:36:35');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1674200319056', '2023-01-20 15:38:39', '2023-01-20 15:38:39');
INSERT INTO `playlist_video` VALUES ('1669384866494', '1674204125033', '2023-01-20 16:42:05', '2023-01-20 16:42:05');
INSERT INTO `playlist_video` VALUES ('1669384866494', '1674204298817', '2023-01-20 16:44:58', '2023-01-20 16:44:58');
INSERT INTO `playlist_video` VALUES ('1669384866494', '1674212180782', '2023-01-20 18:56:20', '2023-01-20 18:56:20');
INSERT INTO `playlist_video` VALUES ('1669384866494', '1674212417900', '2023-01-20 19:00:17', '2023-01-20 19:00:17');
INSERT INTO `playlist_video` VALUES ('1669385003854', '1674211881903', '2023-01-20 18:51:21', '2023-01-20 18:51:21');
INSERT INTO `playlist_video` VALUES ('1669385003854', '1674698104289', '2023-02-26 15:33:46', '2023-02-26 15:33:46');
INSERT INTO `playlist_video` VALUES ('1669448406900', '1674698104289', '2023-02-26 15:23:55', '2023-02-26 15:23:55');
INSERT INTO `playlist_video` VALUES ('1669449769836', '1674212598117', '2023-01-20 19:03:18', '2023-01-20 19:03:18');
INSERT INTO `playlist_video` VALUES ('1669449769836', '1677308428529', '2023-02-26 15:20:05', '2023-02-26 15:20:05');
INSERT INTO `playlist_video` VALUES ('1672566525895', '1674698104289', '2023-01-26 09:55:36', '2023-01-26 09:55:36');
INSERT INTO `playlist_video` VALUES ('1673163611098', '1674698104289', '2023-02-26 15:23:47', '2023-02-26 15:23:47');
INSERT INTO `playlist_video` VALUES ('1673163611098', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `playlist_video` VALUES ('1673163611098', '1677914892106', '2023-03-05 13:50:19', '2023-03-05 13:50:19');
INSERT INTO `playlist_video` VALUES ('1674615048453', '1675174120100', '2023-01-31 22:08:40', '2023-01-31 22:08:40');
INSERT INTO `playlist_video` VALUES ('1674615110132', '1674717470061', '2023-01-26 15:17:50', '2023-01-26 15:17:50');
INSERT INTO `playlist_video` VALUES ('1674615126341', '1675174589862', '2023-01-31 22:18:53', '2023-01-31 22:18:53');
INSERT INTO `playlist_video` VALUES ('1674615159913', '1675174589862', '2023-01-31 22:16:29', '2023-01-31 22:16:29');
INSERT INTO `playlist_video` VALUES ('1674615159913', '1677913339226', '2023-03-04 15:02:19', '2023-03-04 15:02:19');
INSERT INTO `playlist_video` VALUES ('1674615631776', '1677913812494', '2023-03-04 15:10:12', '2023-03-04 15:10:12');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1674200195530', '2023-02-25 15:26:52', '2023-02-25 15:26:52');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1674212309138', '2023-02-25 15:26:45', '2023-02-25 15:26:45');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1674212417900', '2023-02-25 15:26:38', '2023-02-25 15:26:38');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1674709673843', '2023-02-25 15:26:16', '2023-02-25 15:26:16');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1674717470061', '2023-02-25 15:26:32', '2023-02-25 15:26:32');
INSERT INTO `playlist_video` VALUES ('1674616444524', '1675174589862', '2023-02-25 15:26:10', '2023-02-25 15:26:10');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1674200195530', '2023-02-25 15:26:51', '2023-02-25 15:26:51');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1674212309138', '2023-02-25 15:26:43', '2023-02-25 15:26:43');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1674698104289', '2023-02-25 15:26:26', '2023-02-25 15:26:26');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1674709496396', '2023-02-25 15:26:21', '2023-02-25 15:26:21');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1674717470061', '2023-02-25 15:26:31', '2023-02-25 15:26:31');
INSERT INTO `playlist_video` VALUES ('1674616463383', '1675174589862', '2023-02-25 15:26:10', '2023-02-25 15:26:10');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1674200195530', '2023-02-25 15:26:51', '2023-02-25 15:26:51');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1674212309138', '2023-02-25 15:26:44', '2023-02-25 15:26:44');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1674212417900', '2023-02-25 15:26:37', '2023-02-25 15:26:37');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1674698104289', '2023-02-25 15:26:25', '2023-02-25 15:26:25');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1674709673843', '2023-02-25 15:26:16', '2023-02-25 15:26:16');
INSERT INTO `playlist_video` VALUES ('1674616483033', '1675174589862', '2023-02-25 15:26:10', '2023-02-25 15:26:10');
INSERT INTO `playlist_video` VALUES ('1675174729439', '1677913665361', '2023-03-04 15:07:45', '2023-03-04 15:07:45');
INSERT INTO `playlist_video` VALUES ('1675174729439', '1677914892106', '2023-03-04 15:28:12', '2023-03-04 15:28:12');
INSERT INTO `playlist_video` VALUES ('1677302954067', '1674200319056', '2023-02-25 13:32:23', '2023-02-25 13:32:23');
INSERT INTO `playlist_video` VALUES ('1677302954067', '1674212309138', '2023-02-25 13:32:13', '2023-02-25 13:32:13');
INSERT INTO `playlist_video` VALUES ('1677302954067', '1674717470061', '2023-02-25 13:32:00', '2023-02-25 13:32:00');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1674200046723', '2023-02-25 13:32:39', '2023-02-25 13:32:39');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1674200319056', '2023-02-25 13:32:23', '2023-02-25 13:32:23');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1674204125033', '2023-02-25 13:33:00', '2023-02-25 13:33:00');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1674212309138', '2023-02-25 13:32:13', '2023-02-25 13:32:13');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1674717470061', '2023-02-25 13:32:01', '2023-02-25 13:32:01');
INSERT INTO `playlist_video` VALUES ('1677302968722', '1675174120100', '2023-02-25 13:31:46', '2023-02-25 13:31:46');
INSERT INTO `playlist_video` VALUES ('1677302990280', '1674200319056', '2023-02-25 13:32:23', '2023-02-25 13:32:23');
INSERT INTO `playlist_video` VALUES ('1677302990280', '1674212309138', '2023-02-25 13:32:12', '2023-02-25 13:32:12');
INSERT INTO `playlist_video` VALUES ('1677302990280', '1674717470061', '2023-02-25 13:31:59', '2023-02-25 13:31:59');
INSERT INTO `playlist_video` VALUES ('1677302990280', '1675174120100', '2023-02-25 13:31:45', '2023-02-25 13:31:45');
INSERT INTO `playlist_video` VALUES ('1677303001523', '1674200319056', '2023-02-25 13:32:22', '2023-02-25 13:32:22');
INSERT INTO `playlist_video` VALUES ('1677303001523', '1674204125033', '2023-02-25 13:32:59', '2023-02-25 13:32:59');
INSERT INTO `playlist_video` VALUES ('1677303001523', '1674212309138', '2023-02-25 13:32:12', '2023-02-25 13:32:12');
INSERT INTO `playlist_video` VALUES ('1677303001523', '1674717470061', '2023-02-25 13:31:58', '2023-02-25 13:31:58');
INSERT INTO `playlist_video` VALUES ('1677303021876', '1674200046723', '2023-02-25 13:32:38', '2023-02-25 13:32:38');
INSERT INTO `playlist_video` VALUES ('1677303021876', '1674200319056', '2023-02-25 13:32:22', '2023-02-25 13:32:22');
INSERT INTO `playlist_video` VALUES ('1677303021876', '1674212309138', '2023-02-25 13:32:11', '2023-02-25 13:32:11');
INSERT INTO `playlist_video` VALUES ('1677303021876', '1674717470061', '2023-02-25 13:31:58', '2023-02-25 13:31:58');
INSERT INTO `playlist_video` VALUES ('1677303021876', '1675174120100', '2023-02-25 13:31:43', '2023-02-25 13:31:43');
INSERT INTO `playlist_video` VALUES ('1677303052540', '1674200319056', '2023-02-25 13:32:21', '2023-02-25 13:32:21');
INSERT INTO `playlist_video` VALUES ('1677303052540', '1674204125033', '2023-02-25 13:32:58', '2023-02-25 13:32:58');
INSERT INTO `playlist_video` VALUES ('1677303052540', '1674212309138', '2023-02-25 13:32:11', '2023-02-25 13:32:11');
INSERT INTO `playlist_video` VALUES ('1677303052540', '1674717470061', '2023-02-25 13:31:57', '2023-02-25 13:31:57');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674200046723', '2023-02-25 13:32:38', '2023-02-25 13:32:38');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674200319056', '2023-02-25 13:32:21', '2023-02-25 13:32:21');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674212309138', '2023-02-25 13:32:10', '2023-02-25 13:32:10');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674212417900', '2023-02-25 14:33:30', '2023-02-25 14:33:30');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674709673843', '2023-02-25 14:33:13', '2023-02-25 14:33:13');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1674717470061', '2023-02-25 13:31:57', '2023-02-25 13:31:57');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1675174120100', '2023-02-25 14:33:02', '2023-02-25 14:33:02');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1675174589862', '2023-02-25 13:31:30', '2023-02-25 13:31:30');
INSERT INTO `playlist_video` VALUES ('1677303075732', '1677308428529', '2023-02-25 15:00:28', '2023-02-25 15:00:28');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1674204125033', '2023-02-25 15:21:52', '2023-02-25 15:21:52');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1674204298817', '2023-02-25 15:21:45', '2023-02-25 15:21:45');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1674212309138', '2023-02-25 15:21:26', '2023-02-25 15:21:26');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1674709673843', '2023-02-25 15:21:09', '2023-02-25 15:21:09');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1675174120100', '2023-02-25 15:21:03', '2023-02-25 15:21:03');
INSERT INTO `playlist_video` VALUES ('1677309612725', '1677308428529', '2023-02-25 15:20:49', '2023-02-25 15:20:49');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1674204125033', '2023-02-25 15:21:52', '2023-02-25 15:21:52');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1674204298817', '2023-02-25 15:21:44', '2023-02-25 15:21:44');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1674212309138', '2023-02-25 15:21:25', '2023-02-25 15:21:25');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1674709673843', '2023-02-25 15:21:09', '2023-02-25 15:21:09');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1675174589862', '2023-02-25 15:20:56', '2023-02-25 15:20:56');
INSERT INTO `playlist_video` VALUES ('1677309620189', '1677308428529', '2023-02-25 15:20:49', '2023-02-25 15:20:49');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1674204125033', '2023-02-25 15:21:51', '2023-02-25 15:21:51');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1674204298817', '2023-02-25 15:21:43', '2023-02-25 15:21:43');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1674212309138', '2023-02-25 15:21:25', '2023-02-25 15:21:25');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1674698104289', '2023-02-25 15:21:17', '2023-02-25 15:21:17');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1674709673843', '2023-02-25 15:21:09', '2023-02-25 15:21:09');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1675174120100', '2023-02-25 15:21:02', '2023-02-25 15:21:02');
INSERT INTO `playlist_video` VALUES ('1677309629860', '1677308428529', '2023-02-25 15:20:48', '2023-02-25 15:20:48');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1674204125033', '2023-02-25 15:21:51', '2023-02-25 15:21:51');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1674204298817', '2023-02-25 15:21:43', '2023-02-25 15:21:43');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1674212309138', '2023-02-25 15:21:24', '2023-02-25 15:21:24');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1674698104289', '2023-02-25 15:21:17', '2023-02-25 15:21:17');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1674709673843', '2023-02-25 15:21:08', '2023-02-25 15:21:08');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1675174589862', '2023-02-25 15:20:56', '2023-02-25 15:20:56');
INSERT INTO `playlist_video` VALUES ('1677309639557', '1677308428529', '2023-02-25 15:20:48', '2023-02-25 15:20:48');
INSERT INTO `playlist_video` VALUES ('1677309817830', '1674212180782', '2023-02-25 15:24:58', '2023-02-25 15:24:58');
INSERT INTO `playlist_video` VALUES ('1677309817830', '1674212417900', '2023-02-25 15:24:52', '2023-02-25 15:24:52');
INSERT INTO `playlist_video` VALUES ('1677309817830', '1674709496396', '2023-02-25 15:24:44', '2023-02-25 15:24:44');
INSERT INTO `playlist_video` VALUES ('1677309829478', '1674200319056', '2023-02-25 15:25:11', '2023-02-25 15:25:11');
INSERT INTO `playlist_video` VALUES ('1677309829478', '1674204298817', '2023-02-25 15:25:05', '2023-02-25 15:25:05');
INSERT INTO `playlist_video` VALUES ('1677309829478', '1674709496396', '2023-02-25 15:24:43', '2023-02-25 15:24:43');
INSERT INTO `playlist_video` VALUES ('1677309842157', '1674200319056', '2023-02-25 15:25:11', '2023-02-25 15:25:11');
INSERT INTO `playlist_video` VALUES ('1677309842157', '1674212417900', '2023-02-25 15:24:51', '2023-02-25 15:24:51');
INSERT INTO `playlist_video` VALUES ('1677309842157', '1674709496396', '2023-02-25 15:24:43', '2023-02-25 15:24:43');
INSERT INTO `playlist_video` VALUES ('1677309860630', '1674200319056', '2023-02-25 15:25:10', '2023-02-25 15:25:10');
INSERT INTO `playlist_video` VALUES ('1677309860630', '1674212180782', '2023-02-25 15:24:57', '2023-02-25 15:24:57');
INSERT INTO `playlist_video` VALUES ('1677309860630', '1674709496396', '2023-02-25 15:24:42', '2023-02-25 15:24:42');
INSERT INTO `playlist_video` VALUES ('1677309873840', '1674204298817', '2023-02-25 15:25:04', '2023-02-25 15:25:04');
INSERT INTO `playlist_video` VALUES ('1677309873840', '1674212180782', '2023-02-25 15:24:57', '2023-02-25 15:24:57');
INSERT INTO `playlist_video` VALUES ('1677309873840', '1674212417900', '2023-02-25 15:24:50', '2023-02-25 15:24:50');
INSERT INTO `playlist_video` VALUES ('1677309873840', '1674709496396', '2023-02-25 15:24:42', '2023-02-25 15:24:42');
INSERT INTO `playlist_video` VALUES ('1677310131210', '1674199982940', '2023-02-25 15:29:37', '2023-02-25 15:29:37');
INSERT INTO `playlist_video` VALUES ('1677310131210', '1674200319056', '2023-02-25 15:29:56', '2023-02-25 15:29:56');
INSERT INTO `playlist_video` VALUES ('1677310149045', '1674199982940', '2023-02-25 15:29:37', '2023-02-25 15:29:37');
INSERT INTO `playlist_video` VALUES ('1677310149045', '1674200046723', '2023-02-25 15:29:42', '2023-02-25 15:29:42');
INSERT INTO `playlist_video` VALUES ('1677310149045', '1674204125033', '2023-02-25 15:29:50', '2023-02-25 15:29:50');
INSERT INTO `playlist_video` VALUES ('1677310149045', '1677308428529', '2023-02-25 15:30:01', '2023-02-25 15:30:01');
INSERT INTO `playlist_video` VALUES ('1677310149045', '1678003854022', '2023-03-05 16:10:54', '2023-03-05 16:10:54');
INSERT INTO `playlist_video` VALUES ('1677310158460', '1674199982940', '2023-02-25 15:29:36', '2023-02-25 15:29:36');
INSERT INTO `playlist_video` VALUES ('1677310158460', '1674200319056', '2023-02-25 15:29:55', '2023-02-25 15:29:55');
INSERT INTO `playlist_video` VALUES ('1677310158460', '1674698104289', '2023-02-25 15:30:06', '2023-02-25 15:30:06');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1674199982940', '2023-02-25 15:29:36', '2023-02-25 15:29:36');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1674200046723', '2023-02-25 15:29:44', '2023-02-25 15:29:44');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1674204125033', '2023-02-25 15:29:49', '2023-02-25 15:29:49');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1674698104289', '2023-02-25 15:30:07', '2023-02-25 15:30:07');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1675174589862', '2023-02-25 16:22:08', '2023-02-25 16:22:08');
INSERT INTO `playlist_video` VALUES ('1677310166740', '1677308428529', '2023-02-25 15:30:00', '2023-02-25 15:30:00');
INSERT INTO `playlist_video` VALUES ('1677396000537', '1674698104289', '2023-02-26 15:23:43', '2023-02-26 15:23:43');
INSERT INTO `playlist_video` VALUES ('1677396000537', '1677308428529', '2023-02-26 15:21:37', '2023-02-26 15:21:37');
INSERT INTO `playlist_video` VALUES ('1677396000537', '1677914892106', '2023-03-05 13:50:22', '2023-03-05 13:50:22');

-- ----------------------------
-- Table structure for subscriber
-- ----------------------------
DROP TABLE IF EXISTS `subscriber`;
CREATE TABLE `subscriber`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `upId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `upId`(`upId` ASC) USING BTREE,
  CONSTRAINT `subscriber_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subscriber_ibfk_2` FOREIGN KEY (`upId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subscriber
-- ----------------------------
INSERT INTO `subscriber` VALUES ('1668241153931', '1667300096850', '1664789923657', '2022-11-12 16:19:13', '2022-11-12 16:19:13');
INSERT INTO `subscriber` VALUES ('1668242161324', '1667300096850', '1667726102164', '2022-11-12 16:36:01', '2022-11-12 16:36:01');
INSERT INTO `subscriber` VALUES ('1671347863424', '1664789923657', '1667300096850', '2022-12-18 15:17:43', '2022-12-18 15:17:43');
INSERT INTO `subscriber` VALUES ('1671626832472', '1667726102164', '1667300096850', '2022-12-21 20:47:12', '2022-12-21 20:47:12');
INSERT INTO `subscriber` VALUES ('1672645172217', '1667726102164', '1667726102164', '2023-01-02 15:39:32', '2023-01-02 15:39:32');
INSERT INTO `subscriber` VALUES ('1675174438395', '1664789923657', '1664789923657', '2023-01-31 22:13:58', '2023-01-31 22:13:58');
INSERT INTO `subscriber` VALUES ('1677313288371', '1674222436007', '1674222431747', '2023-02-25 16:21:28', '2023-02-25 16:21:28');
INSERT INTO `subscriber` VALUES ('1678003741896', '1674222436007', '1664789923657', '2023-03-05 16:09:01', '2023-03-05 16:09:01');

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES ('1665897016760', '美好', '2022-10-16 13:10:16', '2022-10-16 13:10:16');
INSERT INTO `tag` VALUES ('1665897040416', '摄影', '2022-10-16 13:10:40', '2022-10-16 13:10:40');
INSERT INTO `tag` VALUES ('1665897046778', '没事', '2022-10-16 13:10:46', '2022-10-16 13:10:46');
INSERT INTO `tag` VALUES ('1665897050494', '烦烦烦', '2022-10-16 13:10:50', '2022-10-16 13:10:50');
INSERT INTO `tag` VALUES ('1665897054998', '我我', '2022-10-16 13:10:54', '2022-10-16 13:10:54');
INSERT INTO `tag` VALUES ('1665897058346', '完全', '2022-10-16 13:10:58', '2022-10-16 13:10:58');
INSERT INTO `tag` VALUES ('1665897062762', '完全扼杀', '2022-10-16 13:11:02', '2022-10-16 13:11:02');
INSERT INTO `tag` VALUES ('1665897078125', '个人', '2022-10-16 13:11:18', '2022-10-16 13:11:18');
INSERT INTO `tag` VALUES ('1665897082623', '前端', '2022-10-16 13:11:22', '2022-10-16 13:11:22');
INSERT INTO `tag` VALUES ('1665897086071', '六', '2022-10-16 13:11:26', '2022-10-16 13:11:26');

-- ----------------------------
-- Table structure for tag_video
-- ----------------------------
DROP TABLE IF EXISTS `tag_video`;
CREATE TABLE `tag_video`  (
  `tId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`tId`, `vId`) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  CONSTRAINT `tag_video_ibfk_1` FOREIGN KEY (`tId`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_video_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag_video
-- ----------------------------
INSERT INTO `tag_video` VALUES ('1665897016760', '1674200319056', '2023-01-20 15:38:39', '2023-01-20 15:38:39');
INSERT INTO `tag_video` VALUES ('1665897016760', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897040416', '1674200046723', '2023-01-20 15:34:06', '2023-01-20 15:34:06');
INSERT INTO `tag_video` VALUES ('1665897040416', '1674211881903', '2023-01-20 18:51:21', '2023-01-20 18:51:21');
INSERT INTO `tag_video` VALUES ('1665897040416', '1674212309138', '2023-01-20 18:58:29', '2023-01-20 18:58:29');
INSERT INTO `tag_video` VALUES ('1665897040416', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897046778', '1674200046723', '2023-01-20 15:34:06', '2023-01-20 15:34:06');
INSERT INTO `tag_video` VALUES ('1665897046778', '1674204298817', '2023-01-20 16:44:58', '2023-01-20 16:44:58');
INSERT INTO `tag_video` VALUES ('1665897046778', '1674211881903', '2023-01-20 18:51:21', '2023-01-20 18:51:21');
INSERT INTO `tag_video` VALUES ('1665897046778', '1674212309138', '2023-01-20 18:58:29', '2023-01-20 18:58:29');
INSERT INTO `tag_video` VALUES ('1665897046778', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897046778', '1677913339226', '2023-03-04 15:02:19', '2023-03-04 15:02:19');
INSERT INTO `tag_video` VALUES ('1665897046778', '1677914892106', '2023-03-04 15:28:12', '2023-03-04 15:28:12');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674200195530', '2023-01-20 15:36:35', '2023-01-20 15:36:35');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674204125033', '2023-01-20 16:42:05', '2023-01-20 16:42:05');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674211881903', '2023-01-20 18:51:21', '2023-01-20 18:51:21');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674212598117', '2023-01-20 19:03:18', '2023-01-20 19:03:18');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674698104289', '2023-01-26 09:55:04', '2023-01-26 09:55:04');
INSERT INTO `tag_video` VALUES ('1665897050494', '1674717470061', '2023-01-26 15:17:50', '2023-01-26 15:17:50');
INSERT INTO `tag_video` VALUES ('1665897050494', '1675174120100', '2023-01-31 22:08:40', '2023-01-31 22:08:40');
INSERT INTO `tag_video` VALUES ('1665897050494', '1675174589862', '2023-01-31 22:16:29', '2023-01-31 22:16:29');
INSERT INTO `tag_video` VALUES ('1665897050494', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897050494', '1677913339226', '2023-03-04 15:02:19', '2023-03-04 15:02:19');
INSERT INTO `tag_video` VALUES ('1665897050494', '1677913665361', '2023-03-04 15:07:45', '2023-03-04 15:07:45');
INSERT INTO `tag_video` VALUES ('1665897050494', '1677914892106', '2023-03-04 15:28:12', '2023-03-04 15:28:12');
INSERT INTO `tag_video` VALUES ('1665897050494', '1678003854022', '2023-03-05 16:10:54', '2023-03-05 16:10:54');
INSERT INTO `tag_video` VALUES ('1665897054998', '1674204298817', '2023-01-20 16:44:58', '2023-01-20 16:44:58');
INSERT INTO `tag_video` VALUES ('1665897054998', '1674212180782', '2023-01-20 18:56:20', '2023-01-20 18:56:20');
INSERT INTO `tag_video` VALUES ('1665897054998', '1674212309138', '2023-01-20 18:58:29', '2023-01-20 18:58:29');
INSERT INTO `tag_video` VALUES ('1665897054998', '1674698104289', '2023-01-26 09:55:04', '2023-01-26 09:55:04');
INSERT INTO `tag_video` VALUES ('1665897054998', '1674709496396', '2023-01-26 13:04:56', '2023-01-26 13:04:56');
INSERT INTO `tag_video` VALUES ('1665897054998', '1675174120100', '2023-01-31 22:08:40', '2023-01-31 22:08:40');
INSERT INTO `tag_video` VALUES ('1665897054998', '1677308428529', '2023-02-25 15:00:28', '2023-02-25 15:00:28');
INSERT INTO `tag_video` VALUES ('1665897054998', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897054998', '1677913665361', '2023-03-04 15:07:45', '2023-03-04 15:07:45');
INSERT INTO `tag_video` VALUES ('1665897054998', '1677913812494', '2023-03-04 15:10:12', '2023-03-04 15:10:12');
INSERT INTO `tag_video` VALUES ('1665897054998', '1678512906798', '2023-03-11 13:35:06', '2023-03-11 13:35:06');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674199982940', '2023-01-20 15:33:02', '2023-01-20 15:33:02');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674200195530', '2023-01-20 15:36:35', '2023-01-20 15:36:35');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674212180782', '2023-01-20 18:56:20', '2023-01-20 18:56:20');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674212417900', '2023-01-20 19:00:17', '2023-01-20 19:00:17');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674709673843', '2023-01-26 13:07:53', '2023-01-26 13:07:53');
INSERT INTO `tag_video` VALUES ('1665897058346', '1674717470061', '2023-01-26 15:17:50', '2023-01-26 15:17:50');
INSERT INTO `tag_video` VALUES ('1665897058346', '1678003854022', '2023-03-05 16:10:54', '2023-03-05 16:10:54');
INSERT INTO `tag_video` VALUES ('1665897062762', '1674199982940', '2023-01-20 15:33:02', '2023-01-20 15:33:02');
INSERT INTO `tag_video` VALUES ('1665897062762', '1674200046723', '2023-01-20 15:34:06', '2023-01-20 15:34:06');
INSERT INTO `tag_video` VALUES ('1665897062762', '1674709496396', '2023-01-26 13:04:56', '2023-01-26 13:04:56');
INSERT INTO `tag_video` VALUES ('1665897062762', '1675174589862', '2023-01-31 22:16:29', '2023-01-31 22:16:29');
INSERT INTO `tag_video` VALUES ('1665897062762', '1677912996302', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `tag_video` VALUES ('1665897078125', '1674212309138', '2023-01-20 18:58:29', '2023-01-20 18:58:29');

-- ----------------------------
-- Table structure for thumb
-- ----------------------------
DROP TABLE IF EXISTS `thumb`;
CREATE TABLE `thumb`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `commentId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tread` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  INDEX `commentId`(`commentId` ASC) USING BTREE,
  CONSTRAINT `thumb_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thumb_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thumb_ibfk_3` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thumb
-- ----------------------------
INSERT INTO `thumb` VALUES ('1674212076852', '1664789923657', NULL, '1674211881903', '2023-01-20 18:54:36', '2023-01-20 18:54:36', 0);
INSERT INTO `thumb` VALUES ('1674212091551', '1664789923657', NULL, '1674199982940', '2023-01-20 18:54:51', '2023-01-20 18:54:51', 0);
INSERT INTO `thumb` VALUES ('1674218825734', '1667300096850', NULL, '1674212309138', '2023-01-20 20:47:05', '2023-01-20 20:47:05', 0);
INSERT INTO `thumb` VALUES ('1675174424037', '1664789923657', '1675174404563', NULL, '2023-01-31 22:13:44', '2023-01-31 22:13:44', 0);
INSERT INTO `thumb` VALUES ('1675174435427', '1664789923657', '1675174431798', NULL, '2023-01-31 22:13:55', '2023-01-31 22:13:55', 0);
INSERT INTO `thumb` VALUES ('1675174442430', '1664789923657', NULL, '1674212180782', '2023-01-31 22:14:02', '2023-01-31 22:14:02', 0);
INSERT INTO `thumb` VALUES ('1675174660032', '1664789923657', NULL, '1675174589862', '2023-01-31 22:17:40', '2023-01-31 22:17:40', 0);
INSERT INTO `thumb` VALUES ('1677310774583', '1674222436007', NULL, '1677308428529', '2023-02-25 15:39:34', '2023-02-25 15:39:34', 0);
INSERT INTO `thumb` VALUES ('1677913376028', '1667300096850', NULL, '1677913339226', '2023-03-04 15:02:56', '2023-03-04 15:02:56', 0);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `userName` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `originalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `filename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `size` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `history` int NULL DEFAULT 1,
  `isExplore` int NULL DEFAULT 0,
  PRIMARY KEY (`userId`) USING BTREE,
  UNIQUE INDEX `userName`(`userName` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1664789923657', '叶子', '123', 'http://localhost:8888/user/avatar/1664789923657', '2022-10-03 17:38:43', '2023-01-21 08:54:09', 'p2629896175.webp', 'image/webp', './upload/user/avatar', '1669382612013.webp', '76227', 1, 0);
INSERT INTO `user` VALUES ('1667300096850', 'Bug码', '123', 'http://localhost:8888/user/avatar/1667300096850', '2022-11-01 18:54:56', '2023-01-21 08:54:09', '3.webp', 'image/webp', './upload/user/avatar', '1670940680281.webp', '78737', 1, 0);
INSERT INTO `user` VALUES ('1667726102164', '靡靡', '123', 'http://localhost:8888/user/avatar/1667726102164', '2022-11-06 17:15:02', '2023-01-21 08:54:09', 'p2629896175.webp', 'image/webp', './upload/user/avatar', '1667726132274.webp', '76000', 1, 0);
INSERT INTO `user` VALUES ('1674222407471', '音乐', '123', 'http://localhost:8888/user/avatar/1674222407471', '2023-01-20 21:46:47', '2023-01-25 15:45:51', '3.webp', 'image/webp', './upload/user/avatar', '1674632751356.webp', '83609', 1, 1);
INSERT INTO `user` VALUES ('1674222418492', '电影和节目', '123', 'http://localhost:8888/user/avatar/1674222418492', '2023-01-20 21:46:58', '2023-02-25 15:22:15', '157514682.jpg', 'image/jpeg', './upload/user/avatar', '1677309735252.jpg', '39774', 1, 1);
INSERT INTO `user` VALUES ('1674222425812', '游戏', '123', 'http://localhost:8888/user/avatar/1674222425812', '2023-01-20 21:47:05', '2023-02-25 15:25:41', '1356806980.jpg', 'image/jpeg', './upload/user/avatar', '1677309941772.jpg', '56147', 1, 1);
INSERT INTO `user` VALUES ('1674222431747', '新闻', '123', 'http://localhost:8888/user/avatar/1674222431747', '2023-01-20 21:47:11', '2023-02-25 13:28:18', '2462589981.jpg', 'image/jpeg', './upload/user/avatar', '1677302898484.jpg', '62967', 1, 1);
INSERT INTO `user` VALUES ('1674222436007', '体育', '123', 'http://localhost:8888/user/avatar/1674222436007', '2023-01-20 21:47:16', '2023-01-25 15:48:24', 'hq720.png', 'image/png', './upload/user/avatar', '1674632904221.png', '73801', 1, 1);
INSERT INTO `user` VALUES ('1674222445348', '学习', '123', 'http://localhost:8888/user/avatar/1674222445348', '2023-01-20 21:47:25', '2023-01-25 15:50:04', '1670486044628_539539601_200.jpg', 'image/jpeg', './upload/user/avatar', '1674633004678.jpg', '64146', 1, 1);
INSERT INTO `user` VALUES ('1678512762310', '本人', '123', 'http://localhost:8888/user/avatar/1678512762310', '2023-03-11 13:32:42', '2023-03-11 13:41:33', '109951168221730139.jpg', 'image/jpeg', './upload/user/avatar', '1678513293226.jpg', '82152', 1, 0);

-- ----------------------------
-- Table structure for user_block
-- ----------------------------
DROP TABLE IF EXISTS `user_block`;
CREATE TABLE `user_block`  (
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `blockId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`userId`, `blockId`) USING BTREE,
  INDEX `blockId`(`blockId` ASC) USING BTREE,
  CONSTRAINT `user_block_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_block_ibfk_2` FOREIGN KEY (`blockId`) REFERENCES `block` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_block
-- ----------------------------
INSERT INTO `user_block` VALUES ('1664789923657', '1667028360697');
INSERT INTO `user_block` VALUES ('1678512762310', '1667028360697');

-- ----------------------------
-- Table structure for user_chat_queue
-- ----------------------------
DROP TABLE IF EXISTS `user_chat_queue`;
CREATE TABLE `user_chat_queue`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `sourceUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `targetUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_chat_queue
-- ----------------------------
INSERT INTO `user_chat_queue` VALUES ('1678618528649', '1', '1678512762310', '1664789923657', '2023-03-12 18:55:28', '2023-03-12 18:55:28');

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `playCount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '0',
  `dt` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cateId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cateId`(`cateId` ASC) USING BTREE,
  INDEX `video_ibfk_4`(`userId` ASC) USING BTREE,
  CONSTRAINT `video_ibfk_3` FOREIGN KEY (`cateId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('1674199982940', 'fbgbfgbgfb', '1667300096850', '0', '108368', 'bfbfbgfb', '1665897708367', '2023-01-20 15:33:02', '2023-01-20 15:33:02');
INSERT INTO `video` VALUES ('1674200046723', 'gfdbgnhmjhgfvdfgbhnjk', '1664789923657', '0', '182648.163', 'hgfcvfgbhjkiijhgfd', '1665897712689', '2023-01-20 15:34:06', '2023-01-20 15:34:06');
INSERT INTO `video` VALUES ('1674200195530', 'vvfdvvvdvfdvfdvdfvfdv', '1667300096850', '0', '251179', 'dfvdvegtrytjtujujuyjyuj', '1665897719079', '2023-01-20 15:36:35', '2023-01-20 15:36:35');
INSERT INTO `video` VALUES ('1674200319056', '改好以后有桃花运他很讨厌很讨厌和', '1664789923657', '15', '251179', '后同样具有看i亏空别了', '1665897699123', '2023-01-20 15:38:39', '2023-01-20 19:27:47');
INSERT INTO `video` VALUES ('1674204125033', 'ggggggggggggggggggg', '1667300096850', '0', '155947', 'ggggggggggeeeeeeeeeeeee', '1665897705187', '2023-01-20 16:42:05', '2023-01-20 16:42:05');
INSERT INTO `video` VALUES ('1674204298817', 'f444444444444444444444', '1664789923657', '0', '108368', '4444444444444444444444444444444', '1665897699123', '2023-01-20 16:44:58', '2023-01-20 16:44:58');
INSERT INTO `video` VALUES ('1674211881903', 'bbbbbbbbbbbbbbbbbbbbbbbgbfvdfv', '1664789923657', '0', '193877', 'bgggggggggggggggggggggggggggggggggggggggg', '1665897715639', '2023-01-20 18:51:21', '2023-01-20 18:51:21');
INSERT INTO `video` VALUES ('1674212180782', 'rfefrefrefreferferfrefref', '1664789923657', '0', '16161.000000000002', 'referferfrefrefreferfreferfrefreferfre', '1665897694232', '2023-01-20 18:56:20', '2023-01-20 18:56:20');
INSERT INTO `video` VALUES ('1674212309138', 'erferferfrefffffffffffffff5666666666666', '1667300096850', '0', '258091', '5666666666666666666666666666666', '1665897708367', '2023-01-20 18:58:29', '2023-01-20 18:58:29');
INSERT INTO `video` VALUES ('1674212417900', '纷纷乳房refer纷纷乳房乳房伟大伟大二的王夫人', '1664789923657', '0', '108368', '和用途井井有条皇太后个体人格给vggt', '1665897712689', '2023-01-20 19:00:17', '2023-01-20 19:00:17');
INSERT INTO `video` VALUES ('1674212598117', 'dcferfrefrefrefrefrefrefrefer', '1667300096850', '0', '171221', 'rfeferfert6y6j78ik89lko9lpo;.uikkthtrgefregtrhyh67u', '1665897751639', '2023-01-20 19:03:18', '2023-01-20 19:03:18');
INSERT INTO `video` VALUES ('1674698104289', 'tytyyyyyyyyyyyyyyyyyyyyyyyyyyy', '1667726102164', '0', '229666', 'tyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', '1665897712689', '2023-01-26 09:55:04', '2023-01-26 09:55:04');
INSERT INTO `video` VALUES ('1674709496396', '而无法', '1667726102164', '0', '171221', 'f额', '1665897715639', '2023-01-26 13:04:56', '2023-01-26 13:04:56');
INSERT INTO `video` VALUES ('1674709673843', '分分分', '1664789923657', '0', '251179', '饿饿饿', '1665897712689', '2023-01-26 13:07:53', '2023-01-26 13:07:53');
INSERT INTO `video` VALUES ('1674717470061', 'uuuu', '1664789923657', '0', '108368', 'uu', '1665897719079', '2023-01-26 15:17:50', '2023-01-26 15:17:50');
INSERT INTO `video` VALUES ('1675174120100', 'のの', '1664789923657', '0', '182648.163', 'の嗯嗯', '1665897712689', '2023-01-31 22:08:40', '2023-01-31 22:08:40');
INSERT INTO `video` VALUES ('1675174589862', '隔热隔热隔热给Greg', '1664789923657', '0', '251179', '各人各威风威风威风威风哥哥', '1665897708367', '2023-01-31 22:16:29', '2023-01-31 22:16:29');
INSERT INTO `video` VALUES ('1677308428529', 'gtrg', '1674222431747', '0', '182648.163', 'grtgtg', '1665897712689', '2023-02-25 15:00:28', '2023-02-25 15:00:28');
INSERT INTO `video` VALUES ('1677912996302', 'b', '1667300096850', '0', '193793.741', '包不', '1665897715639', '2023-03-04 14:56:36', '2023-03-04 14:56:36');
INSERT INTO `video` VALUES ('1677913339226', '我来自管理员端', '1664789923657', '0', '120094', '我来自管理员端我来自管理员端我来自管理员端我来自管理员端我来自管理员端我来自管理员端', '1665897708367', '2023-03-04 15:02:19', '2023-03-04 15:02:19');
INSERT INTO `video` VALUES ('1677913665361', '哔哩哔哩', '1664789923657', '0', '182648.163', '哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩哔哩', '1665897699123', '2023-03-04 15:07:45', '2023-03-04 15:07:45');
INSERT INTO `video` VALUES ('1677913812494', '隔壁隔壁隔壁隔壁', '1664789923657', '0', '193793.741', '隔壁隔壁隔壁隔壁根本改变', '1665897712689', '2023-03-04 15:10:12', '2023-03-04 15:10:12');
INSERT INTO `video` VALUES ('1677914892106', '官博', '1664789923657', '0', '16161.000000000002', '热热分威风威风从', '1665897699123', '2023-03-04 15:28:12', '2023-03-04 15:28:12');
INSERT INTO `video` VALUES ('1678003854022', '浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南', '1674222436007', '0', '120094', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣', '1665897712689', '2023-03-05 16:10:54', '2023-03-05 16:10:54');
INSERT INTO `video` VALUES ('1678512906798', '本人本人本人本人本人本人本人本人本人本人本人本人', '1678512762310', '0', '229666', '本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人本人', '1665897712689', '2023-03-11 13:35:06', '2023-03-11 13:35:06');

-- ----------------------------
-- Table structure for video_file
-- ----------------------------
DROP TABLE IF EXISTS `video_file`;
CREATE TABLE `video_file`  (
  `videoId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `fileId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video_file
-- ----------------------------
INSERT INTO `video_file` VALUES ('1674199982940', '1674199935054', 'cover');
INSERT INTO `video_file` VALUES ('1674199982940', '1674199926446', 'source');
INSERT INTO `video_file` VALUES ('1674200046723', '1674200031043', 'cover');
INSERT INTO `video_file` VALUES ('1674200046723', '1674200016544', 'source');
INSERT INTO `video_file` VALUES ('1674200195530', '1674200106101', 'cover');
INSERT INTO `video_file` VALUES ('1674200195530', '1674200091290', 'source');
INSERT INTO `video_file` VALUES ('1674200319056', '1674200230627', 'cover');
INSERT INTO `video_file` VALUES ('1674200319056', '1674200214358', 'source');
INSERT INTO `video_file` VALUES ('1674204125033', '1674204052794', 'cover');
INSERT INTO `video_file` VALUES ('1674204125033', '1674204032369', 'source');
INSERT INTO `video_file` VALUES ('1674204298817', '1674204262747', 'cover');
INSERT INTO `video_file` VALUES ('1674204298817', '1674204241693', 'source');
INSERT INTO `video_file` VALUES ('1674211881903', '1674211872548', 'cover');
INSERT INTO `video_file` VALUES ('1674211881903', '1674211850134', 'source');
INSERT INTO `video_file` VALUES ('1674212180782', '1674212169820', 'cover');
INSERT INTO `video_file` VALUES ('1674212180782', '1674212154984', 'source');
INSERT INTO `video_file` VALUES ('1674212309138', '1674212241381', 'cover');
INSERT INTO `video_file` VALUES ('1674212309138', '1674212215995', 'source');
INSERT INTO `video_file` VALUES ('1674212417900', '1674212384537', 'cover');
INSERT INTO `video_file` VALUES ('1674212417900', '1674212362331', 'source');
INSERT INTO `video_file` VALUES ('1674212598117', '1674212512334', 'cover');
INSERT INTO `video_file` VALUES ('1674212598117', '1674212489238', 'source');
INSERT INTO `video_file` VALUES ('1674698104289', '1674698090429', 'cover');
INSERT INTO `video_file` VALUES ('1674698104289', '1674698073764', 'source');
INSERT INTO `video_file` VALUES ('1674709496396', '1674709472989', 'cover');
INSERT INTO `video_file` VALUES ('1674709496396', '1674709350967', 'source');
INSERT INTO `video_file` VALUES ('1674709673843', '1674709565803', 'cover');
INSERT INTO `video_file` VALUES ('1674709673843', '1674709555023', 'source');
INSERT INTO `video_file` VALUES ('1674717470061', '1674717462404', 'cover');
INSERT INTO `video_file` VALUES ('1674717470061', '1674717254263', 'source');
INSERT INTO `video_file` VALUES ('1675174120100', '1675174113069', 'cover');
INSERT INTO `video_file` VALUES ('1675174120100', '1675174064114', 'source');
INSERT INTO `video_file` VALUES ('1675174589862', '1675174484085', 'cover');
INSERT INTO `video_file` VALUES ('1675174589862', '1675174470427', 'source');
INSERT INTO `video_file` VALUES ('1677308428529', '1677308411469', 'cover');
INSERT INTO `video_file` VALUES ('1677308428529', '1677308399313', 'source');
INSERT INTO `video_file` VALUES ('1677912996302', '1677912986136', 'cover');
INSERT INTO `video_file` VALUES ('1677912996302', '1677904234789', 'source');
INSERT INTO `video_file` VALUES ('1677913339226', '1677913146008', 'cover');
INSERT INTO `video_file` VALUES ('1677913339226', '1677913286490', 'source');
INSERT INTO `video_file` VALUES ('1677913665361', '1677913615907', 'cover');
INSERT INTO `video_file` VALUES ('1677913665361', '1677913627575', 'source');
INSERT INTO `video_file` VALUES ('1677913812494', '1677913754223', 'cover');
INSERT INTO `video_file` VALUES ('1677913812494', '1677913761084', 'source');
INSERT INTO `video_file` VALUES ('1677914892106', '1677914874560', 'cover');
INSERT INTO `video_file` VALUES ('1677914892106', '1677914881422', 'source');
INSERT INTO `video_file` VALUES ('1678003854022', '1678003837159', 'cover');
INSERT INTO `video_file` VALUES ('1678003854022', '1678003808311', 'source');
INSERT INTO `video_file` VALUES ('1678512906798', '1678512875906', 'cover');
INSERT INTO `video_file` VALUES ('1678512906798', '1678512850448', 'source');

-- ----------------------------
-- Function structure for getAllComment
-- ----------------------------
DROP FUNCTION IF EXISTS `getAllComment`;
delimiter ;;
CREATE FUNCTION `getAllComment`(commendId char(50))
 RETURNS varchar(4000) CHARSET utf8mb4
BEGIN
DECLARE sTemp VARCHAR(4000);
DECLARE sTempChd VARCHAR(4000);
SET sTemp='$';
SET sTempChd = CAST(commendId AS CHAR);
WHILE sTempChd IS NOT NULL DO
SET sTemp= CONCAT(sTemp,',',sTempChd);

SELECT GROUP_CONCAT(id) INTO sTempChd FROM `comment` WHERE FIND_IN_SET(replyId,sTempChd)>0;

END WHILE;
RETURN sTemp;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
