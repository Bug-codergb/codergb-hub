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

 Date: 08/04/2023 17:34:28
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
INSERT INTO `chat` VALUES ('1679213778019', '你好啊叶子，叶子', '1678512762310', 1, '1664789923657', NULL, '2023-03-19 16:16:18', '2023-03-19 16:16:18');
INSERT INTO `chat` VALUES ('1679213792866', '你好啊，本人', '1664789923657', 1, '1678512762310', NULL, '2023-03-19 16:16:32', '2023-03-19 16:16:32');
INSERT INTO `chat` VALUES ('1679213802954', '今天是个好日子啊', '1678512762310', 1, '1664789923657', NULL, '2023-03-19 16:16:42', '2023-03-19 16:16:42');
INSERT INTO `chat` VALUES ('1679213811146', '快去学习JavaScript', '1678512762310', 1, '1664789923657', NULL, '2023-03-19 16:16:51', '2023-03-19 16:16:51');
INSERT INTO `chat` VALUES ('1679213820875', '确实，确实', '1664789923657', 1, '1678512762310', NULL, '2023-03-19 16:17:00', '2023-03-19 16:17:00');
INSERT INTO `chat` VALUES ('1679213848723', 'ben你好啊，我是bugMa', '1667300096850', 1, '1678512762310', NULL, '2023-03-19 16:17:28', '2023-03-19 16:17:28');
INSERT INTO `chat` VALUES ('1679213865153', 'n好啊，我是啊啊啊啊啊啊啊啊', '1678512762310', 1, '1667300096850', NULL, '2023-03-19 16:17:45', '2023-03-19 16:17:45');
INSERT INTO `chat` VALUES ('1679213872106', 'eeeeeee', '1667300096850', 1, '1678512762310', NULL, '2023-03-19 16:17:52', '2023-03-19 16:17:52');
INSERT INTO `chat` VALUES ('1679213879881', 'gbgbgbgbgbgbgbgbgbgbg', '1664789923657', 1, '1678512762310', NULL, '2023-03-19 16:17:59', '2023-03-19 16:17:59');
INSERT INTO `chat` VALUES ('1679213888514', '哈哈哈哈哈哈哈哈哈', '1678512762310', 1, '1664789923657', NULL, '2023-03-19 16:18:08', '2023-03-19 16:18:08');
INSERT INTO `chat` VALUES ('1679213898203', 'gbgbgbgbgbgbgbgb', '1667300096850', 1, '1678512762310', NULL, '2023-03-19 16:18:18', '2023-03-19 16:18:18');
INSERT INTO `chat` VALUES ('1679213915204', 'w我去找叶子', '1667300096850', 1, '1678512762310', NULL, '2023-03-19 16:18:35', '2023-03-19 16:18:35');
INSERT INTO `chat` VALUES ('1679213934738', '叶子，我是bug码', '1667300096850', 1, '1664789923657', NULL, '2023-03-19 16:18:54', '2023-03-19 16:18:54');
INSERT INTO `chat` VALUES ('1679213951819', 'h好久不见好久不见啊啊啊啊！！！！', '1664789923657', 1, '1667300096850', NULL, '2023-03-19 16:19:11', '2023-03-19 16:19:11');
INSERT INTO `chat` VALUES ('1679213965861', '本人在哪里？？？？？', '1667300096850', 1, '1678512762310', NULL, '2023-03-19 16:19:25', '2023-03-19 16:19:25');
INSERT INTO `chat` VALUES ('1679213975922', '本人再这里', '1678512762310', 1, '1667300096850', NULL, '2023-03-19 16:19:35', '2023-03-19 16:19:35');
INSERT INTO `chat` VALUES ('1679213986457', '叶子好啊', '1678512762310', 1, '1664789923657', NULL, '2023-03-19 16:19:46', '2023-03-19 16:19:46');
INSERT INTO `chat` VALUES ('1679213997765', '？？？？？', '1664789923657', 1, '1678512762310', NULL, '2023-03-19 16:19:57', '2023-03-19 16:19:57');
INSERT INTO `chat` VALUES ('1680337678046', '日本本土云南铜业你', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:27:58', '2023-04-01 16:27:58');
INSERT INTO `chat` VALUES ('1680337680588', '给天热个人通过', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:28:00', '2023-04-01 16:28:00');
INSERT INTO `chat` VALUES ('1680337685524', '颐和园九8看离任与 ', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:28:05', '2023-04-01 16:28:05');
INSERT INTO `chat` VALUES ('1680337692244', '然后用提供和我仍然热热热让3让3让3如2人', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:28:12', '2023-04-01 16:28:12');
INSERT INTO `chat` VALUES ('1680337729540', '5法5他', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:28:49', '2023-04-01 16:28:49');
INSERT INTO `chat` VALUES ('1680337739236', '54太5太5图4太 ', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:28:59', '2023-04-01 16:28:59');
INSERT INTO `chat` VALUES ('1680337755236', 'u预计预计', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:29:15', '2023-04-01 16:29:15');
INSERT INTO `chat` VALUES ('1680337851867', '给认同感认同感', '1664789923657', 0, '1667300096850', NULL, '2023-04-01 16:30:51', '2023-04-01 16:30:51');

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
INSERT INTO `comment` VALUES ('1680787769193', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得', '1664789923657', NULL, NULL, '2023-04-06 21:29:29', '2023-04-06 21:29:29', '1680785456502');
INSERT INTO `comment` VALUES ('1680787779225', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明', '1664789923657', NULL, NULL, '2023-04-06 21:29:39', '2023-04-06 21:29:39', '1680785456502');
INSERT INTO `comment` VALUES ('1680787788401', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临', '1664789923657', NULL, NULL, '2023-04-06 21:29:48', '2023-04-06 21:29:48', '1680785456502');
INSERT INTO `comment` VALUES ('1680788012009', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。(豫章故郡 一作', '1664789923657', NULL, NULL, '2023-04-06 21:33:32', '2023-04-06 21:33:32', '1680688967484');
INSERT INTO `comment` VALUES ('1680788031795', '让羊肉汤羊肉汤羊肉汤羊肉汤羊肉汤有人', '1664789923657', NULL, NULL, '2023-04-06 21:33:51', '2023-04-06 21:33:51', '1680688967484');
INSERT INTO `comment` VALUES ('1680788528145', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦', '1667726102164', NULL, NULL, '2023-04-06 21:42:08', '2023-04-06 21:42:08', '1680788518885');
INSERT INTO `comment` VALUES ('1680936258613', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临', '1667726102164', NULL, NULL, '2023-04-08 14:44:18', '2023-04-08 14:44:18', '1680787735271');
INSERT INTO `comment` VALUES ('1680936913011', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。', '1667726102164', NULL, '1680936258613', '2023-04-08 14:55:13', '2023-04-08 14:55:13', NULL);
INSERT INTO `comment` VALUES ('1680937500426', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，', '1667726102164', '1680788429085', NULL, '2023-04-08 15:05:00', '2023-04-08 15:05:00', NULL);
INSERT INTO `comment` VALUES ('1680937510393', '水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。（天人 ', '1667726102164', '1680688724715', NULL, '2023-04-08 15:05:10', '2023-04-08 15:05:10', NULL);

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
INSERT INTO `file` VALUES ('1674199935054', 'http://localhost:8888/image/1674199935054', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674199935053.jpg', 119804, '2023-01-20 15:32:15', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200031043', 'http://localhost:8888/image/1674200031043', NULL, '3.webp', 'image/webp', './upload/image', '1674200031039.webp', 85024, '2023-01-20 15:33:51', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200106101', 'http://localhost:8888/image/1674200106101', NULL, '1670486044628_539539601_200.jpg', 'image/jpeg', './upload/image', '1674200106099.jpg', 50409, '2023-01-20 15:35:06', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674200230627', 'http://localhost:8888/image/1674200230627', NULL, '3183845842.jpg', 'image/jpeg', './upload/image', '1674200230626.jpg', 73184, '2023-01-20 15:37:10', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674204052794', 'http://localhost:8888/image/1674204052794', NULL, '3648126291.jpg', 'image/jpeg', './upload/image', '1674204052792.jpg', 106867, '2023-01-20 16:40:52', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674204262747', 'http://localhost:8888/image/1674204262747', NULL, 'd82a28f5cacc1ed1b49af75b3c11fc8f95cf83d4.jpg', 'image/jpeg', './upload/image', '1674204262742.jpg', 106498, '2023-01-20 16:44:22', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674211872548', 'http://localhost:8888/image/1674211872548', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674211872546.jpg', 36408, '2023-01-20 18:51:12', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212032510', 'http://localhost:8888/image/1674212032510', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674212032509.jpg', 12857, '2023-01-20 18:53:52', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212169820', 'http://localhost:8888/image/1674212169820', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1674212169818.jpg', 78289, '2023-01-20 18:56:09', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212241381', 'http://localhost:8888/image/1674212241381', NULL, 'hq720.png', 'image/png', './upload/image', '1674212241372.png', 120228, '2023-01-20 18:57:21', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212384537', 'http://localhost:8888/image/1674212384537', NULL, 'p2185073849.webp', 'image/webp', './upload/image', '1674212384534.webp', 71402, '2023-01-20 18:59:44', '2023-01-21 08:53:00');
INSERT INTO `file` VALUES ('1674212512334', 'http://localhost:8888/image/1674212512334', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1674212512333.jpg', 42026, '2023-01-20 19:01:52', '2023-01-21 08:53:00');
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
INSERT INTO `file` VALUES ('1674709472989', 'http://localhost:8888/image/1674709472989', NULL, '1.jpg', 'image/jpeg', './upload/image', '1674709472988.jpg', 119975, '2023-01-26 13:04:32', '2023-01-26 13:04:32');
INSERT INTO `file` VALUES ('1674709565803', 'http://localhost:8888/image/1674709565803', NULL, '2.jpg', 'image/jpeg', './upload/image', '1674709565800.jpg', 129982, '2023-01-26 13:06:05', '2023-01-26 13:06:05');
INSERT INTO `file` VALUES ('1674717462404', 'http://localhost:8888/image/1674717462404', NULL, '200.jpg', 'image/jpeg', './upload/image', '1674717462401.jpg', 36629, '2023-01-26 15:17:42', '2023-01-26 15:17:42');
INSERT INTO `file` VALUES ('1675174113069', 'http://localhost:8888/image/1675174113069', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1675174113067.jpg', 46319, '2023-01-31 22:08:33', '2023-01-31 22:08:33');
INSERT INTO `file` VALUES ('1675174484085', 'http://localhost:8888/image/1675174484085', NULL, '2462589981.jpg', 'image/jpeg', './upload/image', '1675174484082.jpg', 63860, '2023-01-31 22:14:44', '2023-01-31 22:14:44');
INSERT INTO `file` VALUES ('1675174705480', 'http://localhost:8888/image/1675174705480', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1675174705479.jpg', 158848, '2023-01-31 22:18:25', '2023-01-31 22:18:25');
INSERT INTO `file` VALUES ('1675256241916', 'http://localhost:8888/image/1675256241916', NULL, '703861982.jpg', 'image/jpeg', './upload/image', '1675256241913.jpg', 70024, '2023-02-01 20:57:21', '2023-02-01 20:57:21');
INSERT INTO `file` VALUES ('1675256452572', 'http://localhost:8888/image/1675256452572', NULL, '1.jpg', 'image/jpeg', './upload/image', '1675256452570.jpg', 94764, '2023-02-01 21:00:52', '2023-02-01 21:00:52');
INSERT INTO `file` VALUES ('1675256462106', 'http://localhost:8888/image/1675256462106', NULL, '1242910458.jpg', 'image/jpeg', './upload/image', '1675256462105.jpg', 72271, '2023-02-01 21:01:02', '2023-02-01 21:01:02');
INSERT INTO `file` VALUES ('1675256544176', 'http://localhost:8888/image/1675256544176', NULL, 'ww.jpeg', 'image/jpeg', './upload/image', '1675256544175.jpeg', 81766, '2023-02-01 21:02:24', '2023-02-01 21:02:24');
INSERT INTO `file` VALUES ('1676899018977', 'http://localhost:8888/image/1676899018977', NULL, '1356806980.jpg', 'image/jpeg', './upload/image', '1676899018975.jpg', 56363, '2023-02-20 21:16:58', '2023-02-20 21:16:58');
INSERT INTO `file` VALUES ('1676899168330', 'http://localhost:8888/image/1676899168330', NULL, '2049078194 (1).jpg', 'image/jpeg', './upload/image', '1676899168329.jpg', 83470, '2023-02-20 21:19:28', '2023-02-20 21:19:28');
INSERT INTO `file` VALUES ('1677303213508', 'http://localhost:8888/image/1677303213508', NULL, '1356806980.jpg', 'image/jpeg', './upload/image', '1677303213504.jpg', 23632, '2023-02-25 13:33:33', '2023-02-25 13:33:33');
INSERT INTO `file` VALUES ('1677308411469', 'http://localhost:8888/image/1677308411469', NULL, 'wallhaven-49e8gd.png', 'image/png', './upload/image', '1677308411467.png', 100230, '2023-02-25 15:00:11', '2023-02-25 15:00:11');
INSERT INTO `file` VALUES ('1677308494819', 'http://localhost:8888/image/1677308494819', NULL, 'wallhaven-49e8gd.png', 'image/png', './upload/image', '1677308494818.png', 298277, '2023-02-25 15:01:34', '2023-02-25 15:01:34');
INSERT INTO `file` VALUES ('1677309782781', 'http://localhost:8888/image/1677309782781', NULL, '1848905788.jpg', 'image/jpeg', './upload/image', '1677309782780.jpg', 16810, '2023-02-25 15:23:02', '2023-02-25 15:23:02');
INSERT INTO `file` VALUES ('1677907300976', 'http://localhost:8888/image/1677907300976', NULL, '157514682.jpg', 'image/jpeg', './upload/image', '1677907300973.jpg', 43423, '2023-03-04 13:21:40', '2023-03-04 13:21:40');
INSERT INTO `file` VALUES ('1677911182732', 'http://localhost:8888/image/1677911182732', NULL, '10673188_220811446034_2.jpg', 'image/jpeg', './upload/image', '1677911182730.jpg', 28775, '2023-03-04 14:26:22', '2023-03-04 14:26:22');
INSERT INTO `file` VALUES ('1677912986136', 'http://localhost:8888/image/1677912986136', NULL, '1.jpg', 'image/jpeg', './upload/image', '1677912986135.jpg', 120325, '2023-03-04 14:56:26', '2023-03-04 14:56:26');
INSERT INTO `file` VALUES ('1677913146008', 'http://localhost:8888/image/1677913146008', NULL, 'wallhaven-5gg6d3.png', 'image/png', './upload/image', '1677913146007.png', 92547, '2023-03-04 14:59:06', '2023-03-04 14:59:06');
INSERT INTO `file` VALUES ('1677913615907', 'http://localhost:8888/image/1677913615907', NULL, '109951168221730139.jpg', 'image/jpeg', './upload/image', '1677913615906.jpg', 51094, '2023-03-04 15:06:55', '2023-03-04 15:06:55');
INSERT INTO `file` VALUES ('1677913754223', 'http://localhost:8888/image/1677913754223', NULL, '2265481084.jpg', 'image/jpeg', './upload/image', '1677913754222.jpg', 71957, '2023-03-04 15:09:14', '2023-03-04 15:09:14');
INSERT INTO `file` VALUES ('1677914691922', 'http://localhost:8888/image/1677914691922', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1677914691921.jpg', 43801, '2023-03-04 15:24:51', '2023-03-04 15:24:51');
INSERT INTO `file` VALUES ('1677914874560', 'http://localhost:8888/image/1677914874560', NULL, '3.webp', 'image/webp', './upload/image', '1677914874559.webp', 80548, '2023-03-04 15:27:54', '2023-03-04 15:27:54');
INSERT INTO `file` VALUES ('1677915345000', 'http://localhost:8888/image/1677915345000', NULL, '2.jpg', 'image/jpeg', './upload/image', '1677915344999.jpg', 114885, '2023-03-04 15:35:45', '2023-03-04 15:35:45');
INSERT INTO `file` VALUES ('1677915373487', 'http://localhost:8888/image/1677915373487', NULL, '157514682.jpg', 'image/jpeg', './upload/image', '1677915373485.jpg', 29056, '2023-03-04 15:36:13', '2023-03-04 15:36:13');
INSERT INTO `file` VALUES ('1678003837159', 'http://localhost:8888/image/1678003837159', NULL, '3831863927.jpg', 'image/jpeg', './upload/image', '1678003837156.jpg', 40295, '2023-03-05 16:10:37', '2023-03-05 16:10:37');
INSERT INTO `file` VALUES ('1678512875906', 'http://localhost:8888/image/1678512875906', NULL, '3831863927.jpg', 'image/jpeg', './upload/image', '1678512875905.jpg', 39533, '2023-03-11 13:34:35', '2023-03-11 13:34:35');
INSERT INTO `file` VALUES ('1678513177984', 'http://localhost:8888/image/1678513177984', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/image', '1678513177982.jpg', 117552, '2023-03-11 13:39:37', '2023-03-11 13:39:37');
INSERT INTO `file` VALUES ('1680327558591', 'http://localhost:8888/image/1680327558591', NULL, '2 (2).jpg', 'image/jpeg', './upload/image', '1680327558586.jpg', 262826, '2023-04-01 13:39:18', '2023-04-01 13:39:18');
INSERT INTO `file` VALUES ('1680679351350', 'http://localhost:8888/image/1680679351350', NULL, '7e2d12ca3340252abc5e1d45a8281685c0528dc6.jpg', 'image/jpeg', './upload/image', '1680679351348.jpg', 82639, '2023-04-05 15:22:31', '2023-04-05 15:22:31');
INSERT INTO `file` VALUES ('1680688495096', NULL, 'http://localhost:8888/video/b18aece1e620e04a104fee62cdb228aa.m3u8', '乌梅自降-16.mp4', NULL, './upload/video/', 'b18aece1e620e04a104fee62cdb228aa.m3u8', NULL, '2023-04-05 17:55:13', '2023-04-05 17:55:13');
INSERT INTO `file` VALUES ('1680688518494', 'http://localhost:8888/image/1680688518494', NULL, '1 (2).jpg', 'image/jpeg', './upload/image', '1680688518492.jpg', 84639, '2023-04-05 17:55:18', '2023-04-05 17:55:18');
INSERT INTO `file` VALUES ('1680688605244', 'http://localhost:8888/image/1680688605244', NULL, '3.png', 'image/png', './upload/image', '1680688605242.png', 79177, '2023-04-05 17:56:45', '2023-04-05 17:56:45');
INSERT INTO `file` VALUES ('1680688620436', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2023-04-05 17:58:37', '2023-04-05 17:58:37');
INSERT INTO `file` VALUES ('1680788365415', 'http://localhost:8888/image/1680788365415', NULL, '20f9acd4ec08d2f8c1beec80a5da7fd6726f0802.jpg@672w_378h_1c_!web-search-common-cover.webp', 'image/webp', './upload/image', '1680788365412.webp', 86393, '2023-04-06 21:39:25', '2023-04-06 21:39:25');
INSERT INTO `file` VALUES ('1680788394303', NULL, 'http://localhost:8888/video/b303084301950a8d37c6cba1213ce32a.m3u8', '19335626_da3-1-16.mp4', NULL, './upload/video/', 'b303084301950a8d37c6cba1213ce32a.m3u8', NULL, '2023-04-06 21:40:07', '2023-04-06 21:40:07');
INSERT INTO `file` VALUES ('1680788419705', 'http://localhost:8888/image/1680788419705', NULL, '20f9acd4ec08d2f8c1beec80a5da7fd6726f0802.jpg@672w_378h_1c_!web-search-common-cover.webp', 'image/webp', './upload/image', '1680788419704.webp', 79930, '2023-04-06 21:40:19', '2023-04-06 21:40:19');

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
INSERT INTO `history` VALUES ('1680688533766', '1680688529281', '1667300096850', 1, '2023-04-05 17:55:34');
INSERT INTO `history` VALUES ('1680688734581', '1680688724715', '1667300096850', 3, '2023-04-06 21:23:07');
INSERT INTO `history` VALUES ('1680788232101', '1680688724715', '1664789923657', 1, '2023-04-06 21:37:12');
INSERT INTO `history` VALUES ('1680788236264', '1680688529281', '1664789923657', 1, '2023-04-06 21:37:16');
INSERT INTO `history` VALUES ('1680788434681', '1680788429085', '1667726102164', 4, '2023-04-08 17:14:40');
INSERT INTO `history` VALUES ('1680937503824', '1680688724715', '1667726102164', 0, '2023-04-08 15:05:03');
INSERT INTO `history` VALUES ('1680945527964', '1680688529281', '1667726102164', 0, '2023-04-08 17:18:47');

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
INSERT INTO `moment` VALUES ('1680688967484', '突然吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼', '会让他水水水水水水水水水水水水水水水水', '1680688724715', '1667300096850', '1668927539032', '2023-04-05 18:02:47', '2023-04-05 18:02:47');
INSERT INTO `moment` VALUES ('1680785456502', '二微软微软微软', '给让他给他人给让他给他物非人非', '1680688529281', '1667300096850', '1668927539032', '2023-04-06 20:50:56', '2023-04-06 20:50:56');
INSERT INTO `moment` VALUES ('1680787735271', '迫榴矿业集团和如果非得', '咯i可预见一会功夫大师', '1680688724715', '1664789923657', '1668930069921', '2023-04-06 21:28:55', '2023-04-06 21:28:55');
INSERT INTO `moment` VALUES ('1680788518885', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。', '1680788429085', '1667726102164', '1671344573529', '2023-04-06 21:41:58', '2023-04-06 21:41:58');

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
INSERT INTO `playlist_video` VALUES ('1669449769836', '1680688529281', '2023-04-05 17:55:29', '2023-04-05 17:55:29');
INSERT INTO `playlist_video` VALUES ('1672563163420', '1680788429085', '2023-04-06 21:40:29', '2023-04-06 21:40:29');
INSERT INTO `playlist_video` VALUES ('1674614810952', '1680688724715', '2023-04-05 17:58:44', '2023-04-05 17:58:44');

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
INSERT INTO `tag_video` VALUES ('1665897016760', '1680688724715', '2023-04-05 17:58:44', '2023-04-05 17:58:44');
INSERT INTO `tag_video` VALUES ('1665897040416', '1680688529281', '2023-04-05 17:55:29', '2023-04-05 17:55:29');
INSERT INTO `tag_video` VALUES ('1665897040416', '1680688724715', '2023-04-05 17:58:44', '2023-04-05 17:58:44');
INSERT INTO `tag_video` VALUES ('1665897046778', '1680688529281', '2023-04-05 17:55:29', '2023-04-05 17:55:29');
INSERT INTO `tag_video` VALUES ('1665897046778', '1680788429085', '2023-04-06 21:40:29', '2023-04-06 21:40:29');
INSERT INTO `tag_video` VALUES ('1665897050494', '1680788429085', '2023-04-06 21:40:29', '2023-04-06 21:40:29');
INSERT INTO `tag_video` VALUES ('1665897054998', '1680688529281', '2023-04-05 17:55:29', '2023-04-05 17:55:29');
INSERT INTO `tag_video` VALUES ('1665897058346', '1680688724715', '2023-04-05 17:58:44', '2023-04-05 17:58:44');
INSERT INTO `tag_video` VALUES ('1665897058346', '1680788429085', '2023-04-06 21:40:29', '2023-04-06 21:40:29');
INSERT INTO `tag_video` VALUES ('1665897062762', '1680688724715', '2023-04-05 17:58:44', '2023-04-05 17:58:44');

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
INSERT INTO `thumb` VALUES ('1680787954819', '1664789923657', '1680787769193', NULL, '2023-04-06 21:32:34', '2023-04-06 21:32:34', 0);
INSERT INTO `thumb` VALUES ('1680788456996', '1667726102164', NULL, '1680788429085', '2023-04-06 21:40:56', '2023-04-06 21:40:56', 0);
INSERT INTO `thumb` VALUES ('1680788531135', '1667726102164', '1680788528145', NULL, '2023-04-06 21:42:11', '2023-04-06 21:42:11', 0);

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
INSERT INTO `video` VALUES ('1680688529281', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖', '1667300096850', '0', '252006', '光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。(豫章故郡 一作：南昌故郡；青霜 一作：清霜', '1665897712689', '2023-04-05 17:55:29', '2023-04-05 17:55:29');
INSERT INTO `video` VALUES ('1680688724715', '潦水尽而寒潭清，烟光凝而暮山紫', '1664789923657', '0', '251179', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人；萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？(遥襟甫畅 一作：遥吟俯畅', '1665897751639', '2023-04-05 17:58:44', '2023-04-05 17:58:44');
INSERT INTO `video` VALUES ('1680788429085', '恶趣味请问恶趣味我去饿呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃恶趣味恶趣味而我却             威威企鹅额外全额完全', '1667726102164', '0', '225350', '发热纷纷分为氛围风热发是完全驱蚊器恶气委屈问问去恶趣味请问', '1665897712689', '2023-04-06 21:40:29', '2023-04-06 21:40:29');

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
INSERT INTO `video_file` VALUES ('1674200046723', '1674200031043', 'cover');
INSERT INTO `video_file` VALUES ('1674200195530', '1674200106101', 'cover');
INSERT INTO `video_file` VALUES ('1674200319056', '1674200230627', 'cover');
INSERT INTO `video_file` VALUES ('1674204125033', '1674204052794', 'cover');
INSERT INTO `video_file` VALUES ('1674204298817', '1674204262747', 'cover');
INSERT INTO `video_file` VALUES ('1674211881903', '1674211872548', 'cover');
INSERT INTO `video_file` VALUES ('1674212180782', '1674212169820', 'cover');
INSERT INTO `video_file` VALUES ('1674212309138', '1674212241381', 'cover');
INSERT INTO `video_file` VALUES ('1674212417900', '1674212384537', 'cover');
INSERT INTO `video_file` VALUES ('1674212598117', '1674212512334', 'cover');
INSERT INTO `video_file` VALUES ('1674698104289', '1674698090429', 'cover');
INSERT INTO `video_file` VALUES ('1674709496396', '1674709472989', 'cover');
INSERT INTO `video_file` VALUES ('1674709673843', '1674709565803', 'cover');
INSERT INTO `video_file` VALUES ('1674717470061', '1674717462404', 'cover');
INSERT INTO `video_file` VALUES ('1675174120100', '1675174113069', 'cover');
INSERT INTO `video_file` VALUES ('1675174589862', '1675174484085', 'cover');
INSERT INTO `video_file` VALUES ('1677308428529', '1677308411469', 'cover');
INSERT INTO `video_file` VALUES ('1677912996302', '1677912986136', 'cover');
INSERT INTO `video_file` VALUES ('1677913339226', '1677913146008', 'cover');
INSERT INTO `video_file` VALUES ('1677913665361', '1677913615907', 'cover');
INSERT INTO `video_file` VALUES ('1677913812494', '1677913754223', 'cover');
INSERT INTO `video_file` VALUES ('1677914892106', '1677914874560', 'cover');
INSERT INTO `video_file` VALUES ('1678003854022', '1678003837159', 'cover');
INSERT INTO `video_file` VALUES ('1678512906798', '1678512875906', 'cover');
INSERT INTO `video_file` VALUES ('1680679364020', '1680679351350', 'cover');
INSERT INTO `video_file` VALUES ('1680688529281', '1680688518494', 'cover');
INSERT INTO `video_file` VALUES ('1680688529281', '1680688495096', 'source');
INSERT INTO `video_file` VALUES ('1680688724715', '1680688605244', 'cover');
INSERT INTO `video_file` VALUES ('1680688724715', '1680688620436', 'source');
INSERT INTO `video_file` VALUES ('1680788429085', '1680788419705', 'cover');
INSERT INTO `video_file` VALUES ('1680788429085', '1680788394303', 'source');

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
