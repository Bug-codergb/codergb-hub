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

 Date: 30/04/2023 17:38:33
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
INSERT INTO `category` VALUES ('1682755203328', '摄影', '2023-04-29 16:00:03', '2023-04-29 16:00:03', 0);
INSERT INTO `category` VALUES ('1682755239801', 'BLACKPINK爱好者', '2023-04-29 16:00:39', '2023-04-29 16:00:39', 0);
INSERT INTO `category` VALUES ('1682755260010', '名侦探柯南', '2023-04-29 16:01:00', '2023-04-29 16:01:00', 0);
INSERT INTO `category` VALUES ('1682755318948', '克里斯汀亚诺罗纳尔多', '2023-04-29 16:01:58', '2023-04-29 16:01:58', 0);
INSERT INTO `category` VALUES ('1682755324609', '梅西', '2023-04-29 16:02:04', '2023-04-29 16:02:04', 0);
INSERT INTO `category` VALUES ('1682755335314', '计算机科学与技术', '2023-04-29 16:02:15', '2023-04-29 16:02:15', 0);
INSERT INTO `category` VALUES ('1682755348953', '怀旧民谣', '2023-04-29 16:02:28', '2023-04-29 16:02:28', 0);
INSERT INTO `category` VALUES ('1682755374704', '摇滚', '2023-04-29 16:02:54', '2023-04-29 16:02:54', 0);
INSERT INTO `category` VALUES ('1682755391592', '美食基地', '2023-04-29 16:03:11', '2023-04-29 16:03:11', 0);
INSERT INTO `category` VALUES ('1682755402414', '军事基地', '2023-04-29 16:03:22', '2023-04-29 16:03:22', 0);
INSERT INTO `category` VALUES ('1682756487505', '动物', '2023-04-29 16:21:27', '2023-04-29 16:21:27', 0);
INSERT INTO `category` VALUES ('1682756493070', '植物', '2023-04-29 16:21:33', '2023-04-29 16:21:33', 0);
INSERT INTO `category` VALUES ('1682756928507', '动漫', '2023-04-29 16:28:48', '2023-04-29 16:28:48', 0);

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
INSERT INTO `channel` VALUES ('1668927539032', 'vvvvvvvvvvvvvvvvvvvvvvvvvv', 'Jajajaja', '1667300096850', 'gggvvvvvvvvvvvvvvvvvvvvvvvvvvv反反复复烦烦烦烦烦烦烦烦烦烦烦烦额', 0, '1668935663798', '1668925793223', '1680327558591', '2022-11-20 14:59:07', '2023-04-01 13:39:18');
INSERT INTO `channel` VALUES ('1668930069921', '集团年后wife org v', 'sd', '1664789923657', 'rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位rr的地位', 0, '1667111868216', '1667117126446', '1675174705480', '2022-11-20 15:41:34', '2023-01-31 22:18:25');
INSERT INTO `channel` VALUES ('1671344573529', 'dsd', 'dsd', '1667726102164', 'sfffewfwefwefewfvv分为氛围分为服务范围', 0, '1680788429085', '1672644074588', '1680788365415', '2022-12-18 14:23:31', '2023-04-06 21:42:57');
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
  `mId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  INDEX `replyId`(`replyId` ASC) USING BTREE,
  INDEX `comment_ibfk_4`(`mId` ASC) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`replyId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_4` FOREIGN KEY (`mId`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------

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
INSERT INTO `file` VALUES ('1682756433113', 'http://localhost:8888/image/1682756433113', NULL, 'ab1bbc4223485a172553b088b89f48e674171b86.jpg', 'image/jpeg', './upload/image', '1682756433107.jpg', 95371, '2023-04-29 16:20:33', '2023-04-29 16:20:33');
INSERT INTO `file` VALUES ('1682756364682', NULL, 'http://localhost:8888/video/a6aa6380fdd22582607cc9d727987e26.m3u8', '1109378258-1-208.mp4', NULL, './upload/video/', 'a6aa6380fdd22582607cc9d727987e26.m3u8', NULL, '2023-04-29 16:21:57', '2023-04-29 16:21:57');
INSERT INTO `file` VALUES ('1682756883546', 'http://localhost:8888/image/1682756883546', NULL, '086c564162cf669faad6120e295142a2c15524a5.jpg', 'image/jpeg', './upload/image', '1682756883545.jpg', 117840, '2023-04-29 16:28:03', '2023-04-29 16:28:03');
INSERT INTO `file` VALUES ('1682756859932', NULL, 'http://localhost:8888/video/20765c7b0585c4452210ecad431d4c8c.m3u8', '292948194-1-208.mp4', NULL, './upload/video/', '20765c7b0585c4452210ecad431d4c8c.m3u8', NULL, '2023-04-29 16:30:02', '2023-04-29 16:30:02');
INSERT INTO `file` VALUES ('1682757153360', NULL, 'http://localhost:8888/video/5fe7824695014a39a77b9dc9ef12f9fd.m3u8', '125500786-1-6.mp4', NULL, './upload/video/', '5fe7824695014a39a77b9dc9ef12f9fd.m3u8', NULL, '2023-04-29 16:32:36', '2023-04-29 16:32:36');
INSERT INTO `file` VALUES ('1682757180658', 'http://localhost:8888/image/1682757180658', NULL, '569f05078910699cd165b2dcd52d0001e5aaab31.jpg', 'image/jpeg', './upload/image', '1682757180657.jpg', 57327, '2023-04-29 16:33:00', '2023-04-29 16:33:00');
INSERT INTO `file` VALUES ('1682757505119', 'http://localhost:8888/image/1682757505119', NULL, 'b8ff099f844fde0c81141b6fdd29ecf1821605c9.jpg', 'image/jpeg', './upload/image', '1682757505113.jpg', 108204, '2023-04-29 16:38:25', '2023-04-29 16:38:25');
INSERT INTO `file` VALUES ('1682757454750', NULL, 'http://localhost:8888/video/8cdb849e7122aaae56422ff6de062bc5.m3u8', '348312070-1-208.mp4', NULL, './upload/video/', '8cdb849e7122aaae56422ff6de062bc5.m3u8', NULL, '2023-04-29 16:38:45', '2023-04-29 16:38:45');
INSERT INTO `file` VALUES ('1682757679245', NULL, 'http://localhost:8888/video/59a32cf1738af880ad05a117d6bb4ea9.m3u8', '414400404-1-208.mp4', NULL, './upload/video/', '59a32cf1738af880ad05a117d6bb4ea9.m3u8', NULL, '2023-04-29 16:42:00', '2023-04-29 16:42:00');
INSERT INTO `file` VALUES ('1682757724092', 'http://localhost:8888/image/1682757724092', NULL, 'd31fcdd83779e95730d6765c93e00a22b1231e6a.jpg', 'image/jpeg', './upload/image', '1682757724091.jpg', 73345, '2023-04-29 16:42:04', '2023-04-29 16:42:04');
INSERT INTO `file` VALUES ('1682835303515', NULL, 'http://localhost:8888/video/b18aece1e620e04a104fee62cdb228aa.m3u8', '乌梅自降-16.mp4', NULL, './upload/video/', 'b18aece1e620e04a104fee62cdb228aa.m3u8', NULL, '2023-04-30 14:15:21', '2023-04-30 14:15:21');
INSERT INTO `file` VALUES ('1682835333160', 'http://localhost:8888/image/1682835333160', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682835333159.jpg', 79768, '2023-04-30 14:15:33', '2023-04-30 14:15:33');
INSERT INTO `file` VALUES ('1682838392424', 'http://localhost:8888/image/1682838392424', NULL, '5.png', 'image/png', './upload/image', '1682838392422.png', 102707, '2023-04-30 15:06:32', '2023-04-30 15:06:32');
INSERT INTO `file` VALUES ('1682838408399', 'http://localhost:8888/image/1682838408399', NULL, '1.jpg', 'image/jpeg', './upload/image', '1682838408398.jpg', 108177, '2023-04-30 15:06:48', '2023-04-30 15:06:48');
INSERT INTO `file` VALUES ('1682838457023', 'http://localhost:8888/image/1682838457023', NULL, '2 (2).jpg', 'image/jpeg', './upload/image', '1682838457023.jpg', 122700, '2023-04-30 15:07:37', '2023-04-30 15:07:37');
INSERT INTO `file` VALUES ('1682838496139', 'http://localhost:8888/image/1682838496139', NULL, '5.png', 'image/png', './upload/image', '1682838496138.png', 96950, '2023-04-30 15:08:16', '2023-04-30 15:08:16');
INSERT INTO `file` VALUES ('1682838567688', 'http://localhost:8888/image/1682838567688', NULL, '1.jpg', 'image/jpeg', './upload/image', '1682838567686.jpg', 105920, '2023-04-30 15:09:27', '2023-04-30 15:09:27');
INSERT INTO `file` VALUES ('1682838799266', 'http://localhost:8888/image/1682838799266', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682838799263.jpg', 77386, '2023-04-30 15:13:19', '2023-04-30 15:13:19');
INSERT INTO `file` VALUES ('1682838830057', 'http://localhost:8888/image/1682838830057', NULL, '3.webp', 'image/webp', './upload/image', '1682838830056.webp', 77188, '2023-04-30 15:13:50', '2023-04-30 15:13:50');
INSERT INTO `file` VALUES ('1682838851475', 'http://localhost:8888/image/1682838851475', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682838851473.jpg', 77386, '2023-04-30 15:14:11', '2023-04-30 15:14:11');
INSERT INTO `file` VALUES ('1682838922837', 'http://localhost:8888/image/1682838922837', NULL, '3.webp', 'image/webp', './upload/image', '1682838922835.webp', 79608, '2023-04-30 15:15:22', '2023-04-30 15:15:22');
INSERT INTO `file` VALUES ('1682839059499', 'http://localhost:8888/image/1682839059499', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682839059497.jpg', 77386, '2023-04-30 15:17:39', '2023-04-30 15:17:39');
INSERT INTO `file` VALUES ('1682839220616', 'http://localhost:8888/image/1682839220616', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682839220615.jpg', 77386, '2023-04-30 15:20:20', '2023-04-30 15:20:20');
INSERT INTO `file` VALUES ('1682839400821', 'http://localhost:8888/image/1682839400821', NULL, '20f9acd4ec08d2f8c1beec80a5da7fd6726f0802.jpg@672w_378h_1c_!web-search-common-cover.webp', 'image/webp', './upload/image', '1682839400820.webp', 71832, '2023-04-30 15:23:20', '2023-04-30 15:23:20');
INSERT INTO `file` VALUES ('1682839464477', 'http://localhost:8888/image/1682839464477', NULL, '2 (2).jpg', 'image/jpeg', './upload/image', '1682839464475.jpg', 122177, '2023-04-30 15:24:24', '2023-04-30 15:24:24');
INSERT INTO `file` VALUES ('1682839483454', 'http://localhost:8888/image/1682839483454', NULL, '157514682.jpg', 'image/jpeg', './upload/image', '1682839483453.jpg', 30399, '2023-04-30 15:24:43', '2023-04-30 15:24:43');
INSERT INTO `file` VALUES ('1682839502007', 'http://localhost:8888/image/1682839502007', NULL, '2462589981.jpg', 'image/jpeg', './upload/image', '1682839502006.jpg', 51075, '2023-04-30 15:25:02', '2023-04-30 15:25:02');
INSERT INTO `file` VALUES ('1682839566326', 'http://localhost:8888/image/1682839566326', NULL, '2.jpg', 'image/jpeg', './upload/image', '1682839566325.jpg', 114885, '2023-04-30 15:26:06', '2023-04-30 15:26:06');
INSERT INTO `file` VALUES ('1682839700360', 'http://localhost:8888/image/1682839700360', NULL, '5.png', 'image/png', './upload/image', '1682839700358.png', 67201, '2023-04-30 15:28:20', '2023-04-30 15:28:20');
INSERT INTO `file` VALUES ('1682839715669', 'http://localhost:8888/image/1682839715669', NULL, '2 (2).jpg', 'image/jpeg', './upload/image', '1682839715668.jpg', 120159, '2023-04-30 15:28:35', '2023-04-30 15:28:35');
INSERT INTO `file` VALUES ('1682839833785', 'http://localhost:8888/image/1682839833785', NULL, '1.jpg', 'image/jpeg', './upload/image', '1682839833783.jpg', 105816, '2023-04-30 15:30:33', '2023-04-30 15:30:33');
INSERT INTO `file` VALUES ('1682839838414', 'http://localhost:8888/image/1682839838414', NULL, '2 (2).jpg', 'image/jpeg', './upload/image', '1682839838413.jpg', 123414, '2023-04-30 15:30:38', '2023-04-30 15:30:38');
INSERT INTO `file` VALUES ('1682839844063', 'http://localhost:8888/image/1682839844063', NULL, '2.jpg', 'image/jpeg', './upload/image', '1682839844062.jpg', 114885, '2023-04-30 15:30:44', '2023-04-30 15:30:44');
INSERT INTO `file` VALUES ('1682839859648', 'http://localhost:8888/image/1682839859648', NULL, '1771588203.jpg', 'image/jpeg', './upload/image', '1682839859647.jpg', 73350, '2023-04-30 15:30:59', '2023-04-30 15:30:59');
INSERT INTO `file` VALUES ('1682839927680', 'http://localhost:8888/image/1682839927680', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1682839927679.jpg', 77386, '2023-04-30 15:32:07', '2023-04-30 15:32:07');
INSERT INTO `file` VALUES ('1682840656190', 'http://localhost:8888/image/1682840656190', NULL, '3.png', 'image/png', './upload/image', '1682840656189.png', 89683, '2023-04-30 15:44:16', '2023-04-30 15:44:16');

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
INSERT INTO `history` VALUES ('1682757008226', '1682757004498', '1678512762310', 2, '2023-04-30 14:05:18');
INSERT INTO `history` VALUES ('1682757192540', '1682757188750', '1678512762310', 2, '2023-04-30 14:05:58');
INSERT INTO `history` VALUES ('1682757547666', '1682757542171', '1664789923657', 1, '2023-04-29 16:42:25');
INSERT INTO `history` VALUES ('1682757740238', '1682757735752', '1664789923657', 2, '2023-04-29 16:46:29');
INSERT INTO `history` VALUES ('1682757753461', '1682757004498', '1664789923657', 1, '2023-04-29 16:46:51');
INSERT INTO `history` VALUES ('1682834775233', '1682757542171', '1667300096850', 2, '2023-04-30 14:08:48');
INSERT INTO `history` VALUES ('1682834910679', '1682757188750', '1667300096850', 0, '2023-04-30 14:08:30');
INSERT INTO `history` VALUES ('1682835075867', '1682757735752', '1667300096850', 1, '2023-04-30 14:11:16');
INSERT INTO `history` VALUES ('1682836284183', '1682757004498', '1667300096850', 1, '2023-04-30 14:31:24');

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
INSERT INTO `later` VALUES ('1682834917666', '1682757735752', '1667300096850', '2023-04-30 14:08:37', '2023-04-30 14:08:37');

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

-- ----------------------------
-- Table structure for notify
-- ----------------------------
DROP TABLE IF EXISTS `notify`;
CREATE TABLE `notify`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `operation` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isRead` int NULL DEFAULT 0,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notify
-- ----------------------------
INSERT INTO `notify` VALUES ('1680944241587', '你的评论违规了', '1667300096850', '1664789923657', 0, '2023-04-08 16:57:21', '2023-04-08 16:57:21');
INSERT INTO `notify` VALUES ('1680946396725', '23', '1664789923657', '1664789923657', 0, '2023-04-08 17:33:16', '2023-04-08 17:33:16');

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
INSERT INTO `playlist` VALUES ('1681568142974', '本人牛逼', 0, '本人牛逼', '1678512762310', '2023-04-15 22:15:42', '2023-04-15 22:15:42');
INSERT INTO `playlist` VALUES ('1682756091239', 'BLACKPINK', 1, 'blackpink集合了', '1664789923657', '2023-04-29 16:14:51', '2023-04-29 16:14:51');

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
INSERT INTO `playlist_video` VALUES ('1669449769836', '1682756519750', '2023-04-30 14:51:30', '2023-04-30 14:51:30');
INSERT INTO `playlist_video` VALUES ('1675174729439', '1682757542171', '2023-04-29 16:39:02', '2023-04-29 16:39:02');
INSERT INTO `playlist_video` VALUES ('1675174729439', '1682757735752', '2023-04-29 16:42:15', '2023-04-29 16:42:15');
INSERT INTO `playlist_video` VALUES ('1681568142974', '1682756519750', '2023-04-29 16:21:59', '2023-04-29 16:21:59');
INSERT INTO `playlist_video` VALUES ('1681568142974', '1682757004498', '2023-04-29 16:30:04', '2023-04-29 16:30:04');
INSERT INTO `playlist_video` VALUES ('1681568142974', '1682757188750', '2023-04-29 16:33:08', '2023-04-29 16:33:08');
INSERT INTO `playlist_video` VALUES ('1682756091239', '1682835347339', '2023-04-30 14:15:47', '2023-04-30 14:15:47');

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
INSERT INTO `tag` VALUES ('1682755867637', '动漫', '2023-04-29 16:11:07', '2023-04-29 16:11:07');
INSERT INTO `tag` VALUES ('1682755880310', '音乐', '2023-04-29 16:11:20', '2023-04-29 16:11:20');
INSERT INTO `tag` VALUES ('1682755885049', '学习', '2023-04-29 16:11:25', '2023-04-29 16:11:25');
INSERT INTO `tag` VALUES ('1682755889783', '运动', '2023-04-29 16:11:29', '2023-04-29 16:11:29');
INSERT INTO `tag` VALUES ('1682755895463', 'NBA', '2023-04-29 16:11:35', '2023-04-29 16:11:35');
INSERT INTO `tag` VALUES ('1682755912772', '日常', '2023-04-29 16:11:52', '2023-04-29 16:11:52');
INSERT INTO `tag` VALUES ('1682755917498', '短视频', '2023-04-29 16:11:57', '2023-04-29 16:11:57');
INSERT INTO `tag` VALUES ('1682755922162', '校园', '2023-04-29 16:12:02', '2023-04-29 16:12:02');
INSERT INTO `tag` VALUES ('1682756910209', '童年', '2023-04-29 16:28:30', '2023-04-29 16:28:30');

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
INSERT INTO `tag_video` VALUES ('1682755867637', '1682757004498', '2023-04-29 16:30:04', '2023-04-29 16:30:04');
INSERT INTO `tag_video` VALUES ('1682755867637', '1682757188750', '2023-04-29 16:33:08', '2023-04-29 16:33:08');
INSERT INTO `tag_video` VALUES ('1682755867637', '1682757542171', '2023-04-29 16:39:02', '2023-04-29 16:39:02');
INSERT INTO `tag_video` VALUES ('1682755867637', '1682757735752', '2023-04-29 16:42:15', '2023-04-29 16:42:15');
INSERT INTO `tag_video` VALUES ('1682755867637', '1682835347339', '2023-04-30 14:15:47', '2023-04-30 14:15:47');
INSERT INTO `tag_video` VALUES ('1682755880310', '1682757735752', '2023-04-29 16:42:15', '2023-04-29 16:42:15');
INSERT INTO `tag_video` VALUES ('1682755880310', '1682835347339', '2023-04-30 14:15:47', '2023-04-30 14:15:47');
INSERT INTO `tag_video` VALUES ('1682755917498', '1682756519750', '2023-04-29 16:21:59', '2023-04-29 16:21:59');
INSERT INTO `tag_video` VALUES ('1682755917498', '1682757542171', '2023-04-29 16:39:02', '2023-04-29 16:39:02');
INSERT INTO `tag_video` VALUES ('1682756910209', '1682757542171', '2023-04-29 16:39:02', '2023-04-29 16:39:02');

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
INSERT INTO `user` VALUES ('1667726102164', '靡靡', '123', 'http://localhost:8888/user/avatar/1667726102164', '2022-11-06 17:15:02', '2023-04-06 21:39:35', '2462589981.jpg', 'image/jpeg', './upload/user/avatar', '1680788375124.jpg', '62242', 1, 0);
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
INSERT INTO `user_block` VALUES ('1667300096850', '1667028360697');
INSERT INTO `user_block` VALUES ('1678512762310', '1667028360697');
INSERT INTO `user_block` VALUES ('1667300096850', '1667028662350');
INSERT INTO `user_block` VALUES ('1667300096850', '1667028710453');

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
INSERT INTO `user_chat_queue` VALUES ('1679213757715', '？？？？？', '1664789923657', '1678512762310', '2023-03-19 16:15:57', '2023-03-19 16:19:57');
INSERT INTO `user_chat_queue` VALUES ('1679213766288', '叶子好啊', '1678512762310', '1664789923657', '2023-03-19 16:16:06', '2023-03-19 16:19:46');
INSERT INTO `user_chat_queue` VALUES ('1679213830082', '本人再这里', '1678512762310', '1667300096850', '2023-03-19 16:17:10', '2023-03-19 16:19:35');
INSERT INTO `user_chat_queue` VALUES ('1679213848720', '本人在哪里？？？？？', '1667300096850', '1678512762310', '2023-03-19 16:17:28', '2023-03-19 16:19:25');
INSERT INTO `user_chat_queue` VALUES ('1679213925057', '给认同感认同感', '1664789923657', '1667300096850', '2023-03-19 16:18:45', '2023-04-01 16:30:51');
INSERT INTO `user_chat_queue` VALUES ('1679213934735', '叶子，我是bug码', '1667300096850', '1664789923657', '2023-03-19 16:18:54', '2023-03-19 16:18:54');

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
INSERT INTO `video` VALUES ('1682756519750', '穷 熊 极 饿', '1678512762310', '0', '279776.80299999996', '穷 熊 极 饿来自狂野脉动', '1682755203328', '2023-04-29 16:21:59', '2023-04-29 16:21:59');
INSERT INTO `video` VALUES ('1682757004498', '动漫音乐数码宝贝主题曲《Butter-Fly》', '1678512762310', '0', '254954.444', '动漫音乐数码宝贝主题曲《Butter-Fly》完整版，多少人的童年回忆', '1682755348953', '2023-04-29 16:30:04', '2023-04-29 16:30:04');
INSERT INTO `video` VALUES ('1682757188750', '名侦探柯南op - 转动命运之轮', '1678512762310', '0', '128511.167', '此版本的Op并未收录进CD中，但却是最经典的一版', '1682755260010', '2023-04-29 16:33:08', '2023-04-29 16:33:08');
INSERT INTO `video` VALUES ('1682757542171', '泰罗奥特曼是童年的回忆', '1664789923657', '0', '154815.667', '泰罗奥特曼是童年的回忆', '1682756928507', '2023-04-29 16:39:02', '2023-04-29 16:39:02');
INSERT INTO `video` VALUES ('1682757735752', '《龙珠》主题曲', '1664789923657', '0', '110085.578', '《龙珠》主题曲', '1682756928507', '2023-04-29 16:42:15', '2023-04-29 16:42:15');
INSERT INTO `video` VALUES ('1682835347339', '人个人提供', '1664789923657', '0', '252006', '沟通钢铁工人他个人', '1682755374704', '2023-04-30 14:15:47', '2023-04-30 14:15:47');

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
INSERT INTO `video_file` VALUES ('1682756519750', '1682756433113', 'cover');
INSERT INTO `video_file` VALUES ('1682756519750', '1682756364682', 'source');
INSERT INTO `video_file` VALUES ('1682757004498', '1682756883546', 'cover');
INSERT INTO `video_file` VALUES ('1682757004498', '1682756859932', 'source');
INSERT INTO `video_file` VALUES ('1682757188750', '1682757180658', 'cover');
INSERT INTO `video_file` VALUES ('1682757188750', '1682757153360', 'source');
INSERT INTO `video_file` VALUES ('1682757542171', '1682757505119', 'cover');
INSERT INTO `video_file` VALUES ('1682757542171', '1682757454750', 'source');
INSERT INTO `video_file` VALUES ('1682757735752', '1682757724092', 'cover');
INSERT INTO `video_file` VALUES ('1682757735752', '1682757679245', 'source');
INSERT INTO `video_file` VALUES ('1682835347339', '1682835333160', 'cover');
INSERT INTO `video_file` VALUES ('1682835347339', '1682835303515', 'source');

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
