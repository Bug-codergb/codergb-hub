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

 Date: 06/11/2022 17:19:07
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
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of block
-- ----------------------------
INSERT INTO `block` VALUES ('1667028360697', '上传的视频', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:00', '2022-10-29 15:26:00');
INSERT INTO `block` VALUES ('1667028411493', '热门上传视频', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:51', '2022-10-29 15:26:51');
INSERT INTO `block` VALUES ('1667028433872', '短视频', '每当有短视频上传后，此板块就会有显示', '2022-10-29 15:27:13', '2022-10-29 15:27:13');
INSERT INTO `block` VALUES ('1667028473518', '正在直播', '此板块会在直播期间显示', '2022-10-29 15:27:53', '2022-10-29 15:27:53');
INSERT INTO `block` VALUES ('1667028537659', '过往的直播归档的视频', '此板块会在已归档的直播视频时显示', '2022-10-29 15:28:57', '2022-10-29 15:28:57');
INSERT INTO `block` VALUES ('1667028570849', '即将开始的直播', '此板块会在已安排的直播时显示', '2022-10-29 15:29:30', '2022-10-29 15:29:30');
INSERT INTO `block` VALUES ('1667028637618', '单个播放列表', '', '2022-10-29 15:30:37', '2022-10-29 15:30:37');
INSERT INTO `block` VALUES ('1667028662350', '创建的播放列表', '', '2022-10-29 15:31:02', '2022-10-29 15:31:02');
INSERT INTO `block` VALUES ('1667028677380', '多个播放列表', '', '2022-10-29 15:31:17', '2022-10-29 15:31:17');
INSERT INTO `block` VALUES ('1667028710453', '订阅的频道', '显示您订阅的频道', '2022-10-29 15:31:50', '2022-10-29 15:31:50');
INSERT INTO `block` VALUES ('1667028720735', '精选频道', '', '2022-10-29 15:32:00', '2022-10-29 15:32:00');

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
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1665897694232', '让他人', '2022-10-16 13:21:34', '2022-10-16 13:21:34');
INSERT INTO `category` VALUES ('1665897699123', '任何人', '2022-10-16 13:21:39', '2022-10-16 13:21:39');
INSERT INTO `category` VALUES ('1665897702064', '温热', '2022-10-16 13:21:42', '2022-10-16 13:21:42');
INSERT INTO `category` VALUES ('1665897705187', '他今天', '2022-10-16 13:21:45', '2022-10-16 13:21:45');
INSERT INTO `category` VALUES ('1665897708367', '微软', '2022-10-16 13:21:48', '2022-10-16 13:21:48');
INSERT INTO `category` VALUES ('1665897712689', '复活复活', '2022-10-16 13:21:52', '2022-10-16 13:21:52');
INSERT INTO `category` VALUES ('1665897715639', '任何一人', '2022-10-16 13:21:55', '2022-10-16 13:21:55');
INSERT INTO `category` VALUES ('1665897719079', '恶气呃', '2022-10-16 13:21:59', '2022-10-16 13:21:59');
INSERT INTO `category` VALUES ('1665897721642', '二哥突然', '2022-10-16 13:22:01', '2022-10-16 13:22:01');
INSERT INTO `category` VALUES ('1665897724379', '儿胡同', '2022-10-16 13:22:04', '2022-10-16 13:22:04');
INSERT INTO `category` VALUES ('1665897728729', '微软4人', '2022-10-16 13:22:08', '2022-10-16 13:22:08');
INSERT INTO `category` VALUES ('1665897747495', '让国人', '2022-10-16 13:22:27', '2022-10-16 13:22:27');
INSERT INTO `category` VALUES ('1665897751639', '请问', '2022-10-16 13:22:31', '2022-10-16 13:22:31');

-- ----------------------------
-- Table structure for channel
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `alias` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `official` int NULL DEFAULT NULL,
  `trailer` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `banner` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of channel
-- ----------------------------
INSERT INTO `channel` VALUES ('1667725899715', 'blackping', NULL, '韩国名媛', 0, '1667721308019', '1667724015014', '2022-11-06 17:11:39', '2022-11-06 17:11:39');

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
INSERT INTO `comment` VALUES ('1667628202533', '和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额和我菲菲姐我i额', '1664789923657', '1667111986632', NULL, '2022-11-05 14:03:22', '2022-11-05 16:06:33');
INSERT INTO `comment` VALUES ('1667628763095', '覅送风机我i飞机吴覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚覅送风机我i飞机吴佩孚今晚佩孚今晚', '1664789923657', NULL, '1667628202533', '2022-11-05 14:12:43', '2022-11-05 16:32:26');
INSERT INTO `comment` VALUES ('1667628835682', 'csfwefwef乳房如果热歌人格', '1664789923657', NULL, '1667628763095', '2022-11-05 14:13:55', '2022-11-05 14:13:55');
INSERT INTO `comment` VALUES ('1667629171592', 'VS的肥肉范围为', '1664789923657', NULL, '1667628835682', '2022-11-05 14:19:31', '2022-11-05 14:19:31');
INSERT INTO `comment` VALUES ('1667629500681', '个体透视人体华人', '1664789923657', '1667111986632', NULL, '2022-11-05 14:25:00', '2022-11-05 14:25:00');
INSERT INTO `comment` VALUES ('1667629505965', '哥哥好人情恶请问二哥他', '1664789923657', '1667111986632', NULL, '2022-11-05 14:25:05', '2022-11-05 14:25:05');
INSERT INTO `comment` VALUES ('1667629510978', '他航天局哭一哭i', '1664789923657', '1667111986632', NULL, '2022-11-05 14:25:10', '2022-11-05 14:25:10');
INSERT INTO `comment` VALUES ('1667637311169', '灌灌灌灌灌灌灌灌', '1667300096850', NULL, '1667628763095', '2022-11-05 16:35:11', '2022-11-05 16:35:11');
INSERT INTO `comment` VALUES ('1667637870317', 'ggggggg', '1667300096850', NULL, '1667629500681', '2022-11-05 16:44:30', '2022-11-05 16:44:30');
INSERT INTO `comment` VALUES ('1667637923539', '话u华华华华胡', '1667300096850', NULL, '1667629500681', '2022-11-05 16:45:23', '2022-11-05 16:45:23');
INSERT INTO `comment` VALUES ('1667639510255', 'fwefwfwefwfew', '1667300096850', '1667112116703', NULL, '2022-11-05 17:11:50', '2022-11-05 17:11:50');
INSERT INTO `comment` VALUES ('1667639685229', '謝謝周董你的歌總是像哆啦a夢的時光機總能把我拉回學生時代青澀的回憶下課的打球.網咖.書局.和暗戀的女同學 單純的想法.聽著你的歌漫步走在街上都能感覺到以前那個時代', '1667300096850', '1667112116703', NULL, '2022-11-05 17:14:45', '2022-11-05 17:14:45');
INSERT INTO `comment` VALUES ('1667639763585', '的威风威风威风我', '1664789923657', '1667111868216', NULL, '2022-11-05 17:16:03', '2022-11-05 17:16:03');
INSERT INTO `comment` VALUES ('1667639790158', '孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之', '1664789923657', '1667111868216', NULL, '2022-11-05 17:16:30', '2022-11-05 17:16:30');
INSERT INTO `comment` VALUES ('1667639794791', '重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。', '1664789923657', '1667111868216', NULL, '2022-11-05 17:16:34', '2022-11-05 17:16:34');
INSERT INTO `comment` VALUES ('1667639799695', '蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷', '1664789923657', '1667111868216', NULL, '2022-11-05 17:16:39', '2022-11-05 17:16:39');
INSERT INTO `comment` VALUES ('1667639805447', '山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，', '1664789923657', '1667111868216', NULL, '2022-11-05 17:16:45', '2022-11-05 17:16:45');
INSERT INTO `comment` VALUES ('1667639829871', '暮山紫。俨骖騑于', '1667300096850', '1667111868216', NULL, '2022-11-05 17:17:09', '2022-11-05 17:17:09');
INSERT INTO `comment` VALUES ('1667639851832', '舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，', '1667300096850', '1667121382104', NULL, '2022-11-05 17:17:31', '2022-11-05 17:17:31');
INSERT INTO `comment` VALUES ('1667639856262', '孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？', '1667300096850', '1667121382104', NULL, '2022-11-05 17:17:36', '2022-11-05 17:17:36');
INSERT INTO `comment` VALUES ('1667639861606', '吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉', '1667300096850', '1667121382104', NULL, '2022-11-05 17:17:41', '2022-11-05 17:17:41');
INSERT INTO `comment` VALUES ('1667639873665', '之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝', '1667300096850', '1667120940268', NULL, '2022-11-05 17:17:53', '2022-11-05 17:17:53');
INSERT INTO `comment` VALUES ('1667639879472', '爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中', '1667300096850', '1667120940268', NULL, '2022-11-05 17:17:59', '2022-11-05 17:17:59');
INSERT INTO `comment` VALUES ('1667715599398', '人人人人哎人人', '1667300096850', NULL, '1667628202533', '2022-11-06 14:19:59', '2022-11-06 14:19:59');
INSERT INTO `comment` VALUES ('1667715630528', 'rfrfrf', '1667300096850', NULL, '1667628202533', '2022-11-06 14:20:30', '2022-11-06 14:20:30');
INSERT INTO `comment` VALUES ('1667716271932', '45', '1667300096850', NULL, '1667628202533', '2022-11-06 14:31:11', '2022-11-06 14:31:11');
INSERT INTO `comment` VALUES ('1667716313140', 'errerer', '1667300096850', NULL, '1667629500681', '2022-11-06 14:31:53', '2022-11-06 14:31:53');
INSERT INTO `comment` VALUES ('1667716321488', 'ewwrwrw', '1667300096850', NULL, '1667629500681', '2022-11-06 14:32:01', '2022-11-06 14:32:01');
INSERT INTO `comment` VALUES ('1667716333443', '发分为氛围分为氛围分为氛围', '1667300096850', NULL, '1667629500681', '2022-11-06 14:32:13', '2022-11-06 14:32:13');
INSERT INTO `comment` VALUES ('1667716349290', '二位分为', '1667300096850', NULL, '1667629500681', '2022-11-06 14:32:29', '2022-11-06 14:32:29');
INSERT INTO `comment` VALUES ('1667716397975', '11111', '1667300096850', NULL, '1667629505965', '2022-11-06 14:33:17', '2022-11-06 14:33:17');
INSERT INTO `comment` VALUES ('1667716777054', '欧派附件二排风机房较为频繁', '1667300096850', NULL, '1667629510978', '2022-11-06 14:39:37', '2022-11-06 14:39:37');
INSERT INTO `comment` VALUES ('1667717858600', 'fwfewfwfwefwfewfwf', '1667300096850', NULL, '1667716397975', '2022-11-06 14:57:38', '2022-11-06 14:57:38');
INSERT INTO `comment` VALUES ('1667719387934', 'wweewdwfewfewfewfw', '1664789923657', NULL, '1667637870317', '2022-11-06 15:23:07', '2022-11-06 15:23:07');
INSERT INTO `comment` VALUES ('1667719511263', '哈哈哈哈哈啊哈', '1664789923657', NULL, '1667716313140', '2022-11-06 15:25:11', '2022-11-06 15:25:11');

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
INSERT INTO `file` VALUES ('1666790859971', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-26 21:28:07', '2022-10-26 21:28:07');
INSERT INTO `file` VALUES ('1666791734545', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-26 21:42:40', '2022-10-26 21:42:40');
INSERT INTO `file` VALUES ('1667023542614', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:06:14', '2022-10-29 14:06:14');
INSERT INTO `file` VALUES ('1667023685936', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:08:53', '2022-10-29 14:08:53');
INSERT INTO `file` VALUES ('1667023686049', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:08:53', '2022-10-29 14:08:53');
INSERT INTO `file` VALUES ('1667024668525', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:24:55', '2022-10-29 14:24:55');
INSERT INTO `file` VALUES ('1667024765143', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:26:30', '2022-10-29 14:26:30');
INSERT INTO `file` VALUES ('1667024822558', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:27:29', '2022-10-29 14:27:29');
INSERT INTO `file` VALUES ('1667024870795', 'http://localhost:8888/image/1667024870795', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667024870794.webp', 60818, '2022-10-29 14:27:50', '2022-10-29 14:27:50');
INSERT INTO `file` VALUES ('1667024992365', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:30:17', '2022-10-29 14:30:17');
INSERT INTO `file` VALUES ('1667025217881', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:34:05', '2022-10-29 14:34:05');
INSERT INTO `file` VALUES ('1667025253186', 'http://localhost:8888/image/1667025253186', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667025253185.webp', 85045, '2022-10-29 14:34:13', '2022-10-29 14:34:13');
INSERT INTO `file` VALUES ('1667025331313', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:36:00', '2022-10-29 14:36:00');
INSERT INTO `file` VALUES ('1667025405471', 'http://localhost:8888/image/1667025405471', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667025405470.webp', 91238, '2022-10-29 14:36:45', '2022-10-29 14:36:45');
INSERT INTO `file` VALUES ('1667025437810', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:37:44', '2022-10-29 14:37:44');
INSERT INTO `file` VALUES ('1667025526311', 'http://localhost:8888/image/1667025526311', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667025526310.jpg', 54608, '2022-10-29 14:38:46', '2022-10-29 14:38:46');
INSERT INTO `file` VALUES ('1667025595036', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:40:23', '2022-10-29 14:40:23');
INSERT INTO `file` VALUES ('1667025630509', 'http://localhost:8888/image/1667025630509', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/image', '1667025630508.jpg', 60415, '2022-10-29 14:40:30', '2022-10-29 14:40:30');
INSERT INTO `file` VALUES ('1667025672236', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:41:38', '2022-10-29 14:41:38');
INSERT INTO `file` VALUES ('1667025761829', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:43:07', '2022-10-29 14:43:07');
INSERT INTO `file` VALUES ('1667025820281', 'http://localhost:8888/image/1667025820281', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667025820280.webp', 61024, '2022-10-29 14:43:40', '2022-10-29 14:43:40');
INSERT INTO `file` VALUES ('1667025883960', 'http://localhost:8888/image/1667025883960', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/image', '1667025883958.jpg', 69656, '2022-10-29 14:44:43', '2022-10-29 14:44:43');
INSERT INTO `file` VALUES ('1667025873221', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-29 14:44:59', '2022-10-29 14:44:59');
INSERT INTO `file` VALUES ('1667025964681', 'http://localhost:8888/image/1667025964681', NULL, '1.jpg', 'image/jpeg', './upload/channel/avatar', '1667025964680.jpg', 96402, '2022-10-29 14:46:04', '2022-10-29 14:46:04');
INSERT INTO `file` VALUES ('1667109528136', NULL, 'http://localhost:8888/video/a932e9d92c87e538f345e77c143841e2.m3u8', '成log.mp4', NULL, './upload/video/', 'a932e9d92c87e538f345e77c143841e2.m3u8', NULL, '2022-10-30 14:00:41', '2022-10-30 14:00:41');
INSERT INTO `file` VALUES ('1667109696652', 'http://localhost:8888/image/1667109696652', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667109696651.webp', 83693, '2022-10-30 14:01:36', '2022-10-30 14:01:36');
INSERT INTO `file` VALUES ('1667110182427', 'http://localhost:8888/image/1667110182427', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667110182423.webp', 83693, '2022-10-30 14:09:42', '2022-10-30 14:09:42');
INSERT INTO `file` VALUES ('1667110172021', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-30 14:09:59', '2022-10-30 14:09:59');
INSERT INTO `file` VALUES ('1667110230330', 'http://localhost:8888/image/1667110230330', NULL, '2.jpg', 'image/jpeg', './upload/image', '1667110230327.jpg', 98460, '2022-10-30 14:10:30', '2022-10-30 14:10:30');
INSERT INTO `file` VALUES ('1667110216850', NULL, 'http://localhost:8888/video/a932e9d92c87e538f345e77c143841e2.m3u8', '成log.mp4', NULL, './upload/video/', 'a932e9d92c87e538f345e77c143841e2.m3u8', NULL, '2022-10-30 14:12:04', '2022-10-30 14:12:04');
INSERT INTO `file` VALUES ('1667111143796', 'http://localhost:8888/image/1667111143796', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667111143795.webp', 62019, '2022-10-30 14:25:43', '2022-10-30 14:25:43');
INSERT INTO `file` VALUES ('1667111123824', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2022-10-30 14:27:02', '2022-10-30 14:27:02');
INSERT INTO `file` VALUES ('1667111736402', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-30 14:36:02', '2022-10-30 14:36:02');
INSERT INTO `file` VALUES ('1667111824419', 'http://localhost:8888/image/1667111824419', NULL, '3.webp', 'image/webp', './upload/image', '1667111824415.webp', 67978, '2022-10-30 14:37:04', '2022-10-30 14:37:04');
INSERT INTO `file` VALUES ('1667111851112', 'http://localhost:8888/image/1667111851112', NULL, '3.webp', 'image/webp', './upload/image', '1667111851110.webp', 70082, '2022-10-30 14:37:31', '2022-10-30 14:37:31');
INSERT INTO `file` VALUES ('1667111838380', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-30 14:37:45', '2022-10-30 14:37:45');
INSERT INTO `file` VALUES ('1667111897033', 'http://localhost:8888/image/1667111897033', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667111897031.jpg', 56408, '2022-10-30 14:38:17', '2022-10-30 14:38:17');
INSERT INTO `file` VALUES ('1667111882258', NULL, 'http://localhost:8888/video/88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', 'time after time.mp4', NULL, './upload/video/', '88cc0b9f0170cf0d03dc806a3769d3f7.m3u8', NULL, '2022-10-30 14:39:44', '2022-10-30 14:39:44');
INSERT INTO `file` VALUES ('1667112013730', 'http://localhost:8888/image/1667112013730', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667112013729.webp', 59377, '2022-10-30 14:40:13', '2022-10-30 14:40:13');
INSERT INTO `file` VALUES ('1667112000258', NULL, 'http://localhost:8888/video/a932e9d92c87e538f345e77c143841e2.m3u8', '成log.mp4', NULL, './upload/video/', 'a932e9d92c87e538f345e77c143841e2.m3u8', NULL, '2022-10-30 14:41:54', '2022-10-30 14:41:54');
INSERT INTO `file` VALUES ('1667117042938', 'http://localhost:8888/image/1667117042938', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667117042937.webp', 80247, '2022-10-30 16:04:02', '2022-10-30 16:04:02');
INSERT INTO `file` VALUES ('1667117029047', NULL, 'http://localhost:8888/video/29822064e596b4b965457c3276c4ffed.m3u8', '梵高.mp4', NULL, './upload/video/', '29822064e596b4b965457c3276c4ffed.m3u8', NULL, '2022-10-30 16:05:24', '2022-10-30 16:05:24');
INSERT INTO `file` VALUES ('1667120917236', 'http://localhost:8888/image/1667120917236', NULL, 'p1378204929.4.jpg', 'image/jpeg', './upload/image', '1667120917234.jpg', 52158, '2022-10-30 17:08:37', '2022-10-30 17:08:37');
INSERT INTO `file` VALUES ('1667120903757', NULL, 'http://localhost:8888/video/b9ca20fad043aea449f0b7433f74941e.m3u8', 'tom.mp4', NULL, './upload/video/', 'b9ca20fad043aea449f0b7433f74941e.m3u8', NULL, '2022-10-30 17:08:58', '2022-10-30 17:08:58');
INSERT INTO `file` VALUES ('1667121109963', 'http://localhost:8888/image/1667121109963', NULL, '1.jpg', 'image/jpeg', './upload/image', '1667121109962.jpg', 96206, '2022-10-30 17:11:49', '2022-10-30 17:11:49');
INSERT INTO `file` VALUES ('1667121098009', NULL, 'http://localhost:8888/video/c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', '怪盗基德.mp4', NULL, './upload/video/', 'c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', NULL, '2022-10-30 17:13:11', '2022-10-30 17:13:11');
INSERT INTO `file` VALUES ('1667121296931', 'http://localhost:8888/image/1667121296931', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667121296929.webp', 58396, '2022-10-30 17:14:56', '2022-10-30 17:14:56');
INSERT INTO `file` VALUES ('1667121280374', NULL, 'http://localhost:8888/video/c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', '怪盗基德.mp4', NULL, './upload/video/', 'c1d457b7cce2bd3f492232cd2b2a0aa9.m3u8', NULL, '2022-10-30 17:16:20', '2022-10-30 17:16:20');
INSERT INTO `file` VALUES ('1667566450241', NULL, 'http://localhost:8888/video/14012f2678f887445b24f9ebd76df0b4.m3u8', '卡塔尔世界杯.mp4', NULL, './upload/video/', '14012f2678f887445b24f9ebd76df0b4.m3u8', NULL, '2022-11-04 20:54:17', '2022-11-04 20:54:17');
INSERT INTO `file` VALUES ('1667566473097', 'http://localhost:8888/image/1667566473097', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667566473096.jpg', 62440, '2022-11-04 20:54:33', '2022-11-04 20:54:33');
INSERT INTO `file` VALUES ('1667566507344', NULL, 'http://localhost:8888/video/14012f2678f887445b24f9ebd76df0b4.m3u8', '卡塔尔世界杯.mp4', NULL, './upload/video/', '14012f2678f887445b24f9ebd76df0b4.m3u8', NULL, '2022-11-04 20:55:12', '2022-11-04 20:55:12');
INSERT INTO `file` VALUES ('1667566519568', 'http://localhost:8888/image/1667566519568', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667566519566.jpg', 60373, '2022-11-04 20:55:19', '2022-11-04 20:55:19');
INSERT INTO `file` VALUES ('1667566560161', NULL, 'http://localhost:8888/video/14012f2678f887445b24f9ebd76df0b4.m3u8', '卡塔尔世界杯.mp4', NULL, './upload/video/', '14012f2678f887445b24f9ebd76df0b4.m3u8', NULL, '2022-11-04 20:56:05', '2022-11-04 20:56:05');
INSERT INTO `file` VALUES ('1667566570573', 'http://localhost:8888/image/1667566570573', NULL, '2.jpg', 'image/jpeg', './upload/image', '1667566570572.jpg', 98291, '2022-11-04 20:56:10', '2022-11-04 20:56:10');
INSERT INTO `file` VALUES ('1667721318632', 'http://localhost:8888/image/1667721318632', NULL, 'p1378204929.4.jpg', 'image/jpeg', './upload/image', '1667721318630.jpg', 50844, '2022-11-06 15:55:18', '2022-11-06 15:55:18');
INSERT INTO `file` VALUES ('1667721308019', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-11-06 15:55:34', '2022-11-06 15:55:34');
INSERT INTO `file` VALUES ('1667722596688', 'http://localhost:8888/image/1667722596688', NULL, '3.webp', 'image/webp', './upload/image', '1667722596687.webp', 76182, '2022-11-06 16:16:36', '2022-11-06 16:16:36');
INSERT INTO `file` VALUES ('1667722776632', 'http://localhost:8888/image/1667722776632', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667722776631.jpg', 73093, '2022-11-06 16:19:36', '2022-11-06 16:19:36');
INSERT INTO `file` VALUES ('1667722810994', 'http://localhost:8888/image/1667722810994', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667722810993.webp', 75135, '2022-11-06 16:20:10', '2022-11-06 16:20:10');
INSERT INTO `file` VALUES ('1667723662486', 'http://localhost:8888/image/1667723662486', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667723662484.webp', 185103, '2022-11-06 16:34:22', '2022-11-06 16:34:22');
INSERT INTO `file` VALUES ('1667723725054', 'http://localhost:8888/image/1667723725054', NULL, '2.jpg', 'image/jpeg', './upload/image', '1667723725053.jpg', 64026, '2022-11-06 16:35:25', '2022-11-06 16:35:25');
INSERT INTO `file` VALUES ('1667723786364', 'http://localhost:8888/image/1667723786364', NULL, 'ww.jpeg', 'image/jpeg', './upload/image', '1667723786364.jpeg', 233672, '2022-11-06 16:36:26', '2022-11-06 16:36:26');
INSERT INTO `file` VALUES ('1667723818802', 'http://localhost:8888/image/1667723818802', NULL, 'ww.jpeg', 'image/jpeg', './upload/image', '1667723818801.jpeg', 304785, '2022-11-06 16:36:58', '2022-11-06 16:36:58');
INSERT INTO `file` VALUES ('1667723956110', 'http://localhost:8888/image/1667723956110', NULL, '2.jpg', 'image/jpeg', './upload/image', '1667723956109.jpg', 73428, '2022-11-06 16:39:16', '2022-11-06 16:39:16');
INSERT INTO `file` VALUES ('1667724015014', 'http://localhost:8888/image/1667724015014', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667724015013.jpg', 156011, '2022-11-06 16:40:15', '2022-11-06 16:40:15');
INSERT INTO `file` VALUES ('1667724185463', 'http://localhost:8888/image/1667724185463', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1667724185462.webp', 77909, '2022-11-06 16:43:05', '2022-11-06 16:43:05');
INSERT INTO `file` VALUES ('1667724240400', 'http://localhost:8888/image/1667724240400', NULL, '2.jpg', 'image/jpeg', './upload/image', '1667724240399.jpg', 47104, '2022-11-06 16:44:00', '2022-11-06 16:44:00');
INSERT INTO `file` VALUES ('1667724248701', 'http://localhost:8888/image/1667724248701', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1667724248701.jpg', 152506, '2022-11-06 16:44:08', '2022-11-06 16:44:08');
INSERT INTO `file` VALUES ('1667724352988', 'http://localhost:8888/image/1667724352988', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1667724352987.webp', 177083, '2022-11-06 16:45:52', '2022-11-06 16:45:52');

-- ----------------------------
-- Table structure for playlist
-- ----------------------------
DROP TABLE IF EXISTS `playlist`;
CREATE TABLE `playlist`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
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
INSERT INTO `playlist` VALUES ('1665824604596', 'foo', '', '1664789923657', '2022-10-15 17:03:24', '2022-10-15 17:03:24');
INSERT INTO `playlist` VALUES ('1665824630522', 'sdsds', 'ferferfer', '1664789923657', '2022-10-15 17:03:50', '2022-10-15 17:03:50');

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
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667111986632', '2022-10-30 14:39:46', '2022-10-30 14:39:46');
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667112116703', '2022-10-30 14:41:56', '2022-10-30 14:41:56');
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667120940268', '2022-10-30 17:09:00', '2022-10-30 17:09:00');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1667111868216', '2022-10-30 14:37:48', '2022-10-30 14:37:48');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1667117126446', '2022-10-30 16:05:26', '2022-10-30 16:05:26');
INSERT INTO `playlist_video` VALUES ('1665824630522', '1667121382104', '2022-10-30 17:16:22', '2022-10-30 17:16:22');

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
INSERT INTO `tag_video` VALUES ('1665897016760', '1667117126446', '2022-10-30 16:05:26', '2022-10-30 16:05:26');
INSERT INTO `tag_video` VALUES ('1665897046778', '1667117126446', '2022-10-30 16:05:26', '2022-10-30 16:05:26');
INSERT INTO `tag_video` VALUES ('1665897050494', '1667111986632', '2022-10-30 14:39:46', '2022-10-30 14:39:46');
INSERT INTO `tag_video` VALUES ('1665897050494', '1667120940268', '2022-10-30 17:09:00', '2022-10-30 17:09:00');
INSERT INTO `tag_video` VALUES ('1665897054998', '1667111868216', '2022-10-30 14:37:48', '2022-10-30 14:37:48');
INSERT INTO `tag_video` VALUES ('1665897054998', '1667112116703', '2022-10-30 14:41:56', '2022-10-30 14:41:56');
INSERT INTO `tag_video` VALUES ('1665897054998', '1667121382104', '2022-10-30 17:16:22', '2022-10-30 17:16:22');
INSERT INTO `tag_video` VALUES ('1665897058346', '1667111986632', '2022-10-30 14:39:46', '2022-10-30 14:39:46');
INSERT INTO `tag_video` VALUES ('1665897058346', '1667112116703', '2022-10-30 14:41:56', '2022-10-30 14:41:56');
INSERT INTO `tag_video` VALUES ('1665897058346', '1667120940268', '2022-10-30 17:09:00', '2022-10-30 17:09:00');
INSERT INTO `tag_video` VALUES ('1665897062762', '1667111868216', '2022-10-30 14:37:48', '2022-10-30 14:37:48');
INSERT INTO `tag_video` VALUES ('1665897062762', '1667121382104', '2022-10-30 17:16:22', '2022-10-30 17:16:22');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
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
  PRIMARY KEY (`userId`) USING BTREE,
  UNIQUE INDEX `userName`(`userName` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1664789923657', '叶子', '123', 'http://localhost:8888/user/avatar/1664789923657', '2022-10-03 17:38:43', '2022-11-06 15:52:56', 'p2677018763.webp', 'image/webp', './upload/user/avatar', '1667721176193.webp', '93480');
INSERT INTO `user` VALUES ('1667300096850', 'Bug码', '123', 'http://localhost:8888/user/avatar/1667300096850', '2022-11-01 18:54:56', '2022-11-01 20:06:59', '3.webp', 'image/webp', './upload/user/avatar', '1667304419698.webp', '78795');
INSERT INTO `user` VALUES ('1667726102164', '靡靡', '123', 'http://localhost:8888/user/avatar/1667726102164', '2022-11-06 17:15:02', '2022-11-06 17:15:32', 'p2629896175.webp', 'image/webp', './upload/user/avatar', '1667726132274.webp', '76000');

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
INSERT INTO `user_block` VALUES ('1664789923657', '1667028570849');
INSERT INTO `user_block` VALUES ('1664789923657', '1667028720735');

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
INSERT INTO `video` VALUES ('1667111868216', '谔谔额为温热微软', '1664789923657', '0', NULL, '认为人', '1665897712689', '2022-10-30 14:37:48', '2022-10-30 16:12:15');
INSERT INTO `video` VALUES ('1667111986632', '纷纷乳房热风热风', '1664789923657', '0', NULL, '风热风热风热风风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非风热风热风热风热肥肉非人非热肥肉非人非', '1665897747495', '2022-10-30 14:39:46', '2022-11-05 13:32:23');
INSERT INTO `video` VALUES ('1667112116703', '反对v反对v发的人', '1664789923657', '0', NULL, '风格天天任何一句', '1665897702064', '2022-10-30 14:41:56', '2022-10-30 16:12:16');
INSERT INTO `video` VALUES ('1667117126446', 'frfr分威风威风方法热但是的的哇风热风热而愤然二分frfr分威风威风方法热但是的的哇风热风热而愤然二分对外服务frfr分威风威风方法热但是的的哇风热风热而愤然二分对外服务对外服务', '1664789923657', '0', NULL, 'frfrfrfrfrfr', '1665897712689', '2022-10-30 16:05:26', '2022-10-30 17:04:56');
INSERT INTO `video` VALUES ('1667120940268', 'fsfwefwefwfew', '1664789923657', '0', NULL, 'fwfewfwfewfwefewfefffwefwe', '1665897708367', '2022-10-30 17:09:00', '2022-10-30 17:09:00');
INSERT INTO `video` VALUES ('1667121382104', 'ger咯咯咯g俄格哥哥微软', '1664789923657', '0', NULL, '各人各Greg问问日期人五人死亡认为人', '1665897715639', '2022-10-30 17:16:22', '2022-10-30 17:16:22');

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
INSERT INTO `video_file` VALUES ('1666787134290', '1666787111642', 'cover');
INSERT INTO `video_file` VALUES ('1666787134290', '1666787101271', 'source');
INSERT INTO `video_file` VALUES ('1667025790639', '1667025786695', 'cover');
INSERT INTO `video_file` VALUES ('1667025790639', '1667025761829', 'source');
INSERT INTO `video_file` VALUES ('1667025822769', '1667025786695', 'cover');
INSERT INTO `video_file` VALUES ('1667025822769', '1667025761829', 'source');
INSERT INTO `video_file` VALUES ('1667025901576', '1667025883960', 'cover');
INSERT INTO `video_file` VALUES ('1667025901576', '1667025873221', 'source');
INSERT INTO `video_file` VALUES ('1667110202274', '1667110182427', 'cover');
INSERT INTO `video_file` VALUES ('1667110202274', '1667110172021', 'source');
INSERT INTO `video_file` VALUES ('1667110329063', '1667110230330', 'cover');
INSERT INTO `video_file` VALUES ('1667110329063', '1667110216850', 'source');
INSERT INTO `video_file` VALUES ('1667111242355', '1667111143796', 'cover');
INSERT INTO `video_file` VALUES ('1667111242355', '1667111123824', 'source');
INSERT INTO `video_file` VALUES ('1667111868216', '1667111851112', 'cover');
INSERT INTO `video_file` VALUES ('1667111868216', '1667111838380', 'source');
INSERT INTO `video_file` VALUES ('1667111986632', '1667111897033', 'cover');
INSERT INTO `video_file` VALUES ('1667111986632', '1667111882258', 'source');
INSERT INTO `video_file` VALUES ('1667112116703', '1667112013730', 'cover');
INSERT INTO `video_file` VALUES ('1667112116703', '1667112000258', 'source');
INSERT INTO `video_file` VALUES ('1667117126446', '1667117042938', 'cover');
INSERT INTO `video_file` VALUES ('1667117126446', '1667117029047', 'source');
INSERT INTO `video_file` VALUES ('1667120940268', '1667120917236', 'cover');
INSERT INTO `video_file` VALUES ('1667120940268', '1667120903757', 'source');
INSERT INTO `video_file` VALUES ('1667121382104', '1667121296931', 'cover');
INSERT INTO `video_file` VALUES ('1667121382104', '1667121280374', 'source');

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
