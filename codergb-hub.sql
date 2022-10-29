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

 Date: 29/10/2022 17:06:52
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
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of channel
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
INSERT INTO `playlist_video` VALUES ('1665824604596', '1666787134290', '2022-10-26 20:25:34', '2022-10-26 20:25:34');
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667025790639', '2022-10-29 14:43:10', '2022-10-29 14:43:10');
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667025822769', '2022-10-29 14:43:42', '2022-10-29 14:43:42');
INSERT INTO `playlist_video` VALUES ('1665824604596', '1667025901576', '2022-10-29 14:45:01', '2022-10-29 14:45:01');

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
INSERT INTO `tag_video` VALUES ('1665897040416', '1667025901576', '2022-10-29 14:45:01', '2022-10-29 14:45:01');
INSERT INTO `tag_video` VALUES ('1665897046778', '1667025901576', '2022-10-29 14:45:01', '2022-10-29 14:45:01');
INSERT INTO `tag_video` VALUES ('1665897054998', '1666787134290', '2022-10-26 20:25:34', '2022-10-26 20:25:34');
INSERT INTO `tag_video` VALUES ('1665897058346', '1666787134290', '2022-10-26 20:25:34', '2022-10-26 20:25:34');
INSERT INTO `tag_video` VALUES ('1665897058346', '1667025790639', '2022-10-29 14:43:10', '2022-10-29 14:43:10');
INSERT INTO `tag_video` VALUES ('1665897058346', '1667025822769', '2022-10-29 14:43:42', '2022-10-29 14:43:42');
INSERT INTO `tag_video` VALUES ('1665897062762', '1667025790639', '2022-10-29 14:43:10', '2022-10-29 14:43:10');
INSERT INTO `tag_video` VALUES ('1665897062762', '1667025822769', '2022-10-29 14:43:42', '2022-10-29 14:43:42');

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
INSERT INTO `user` VALUES ('1664789923657', '叶子', '123', 'http://localhost:8888/user/avatar/1664789923657', '2022-10-03 17:38:43', '2022-10-04 15:41:22', 'th.gif', 'image/gif', './upload/user/avatar', '1664869281991.gif', '1235062');

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

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cateId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cateId`(`cateId` ASC) USING BTREE,
  CONSTRAINT `video_ibfk_3` FOREIGN KEY (`cateId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('1666787134290', '343', '2232', '1665897712689', '2022-10-26 20:25:34', '2022-10-26 20:25:34');
INSERT INTO `video` VALUES ('1667025790639', '如4如 ', '3 ', '1665897715639', '2022-10-29 14:43:10', '2022-10-29 14:43:10');
INSERT INTO `video` VALUES ('1667025822769', '如4如 ', '3 ', '1665897715639', '2022-10-29 14:43:42', '2022-10-29 14:43:42');
INSERT INTO `video` VALUES ('1667025901576', '肥肉皮肤加热', '服务服务', '1665897715639', '2022-10-29 14:45:01', '2022-10-29 14:45:01');

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

SET FOREIGN_KEY_CHECKS = 1;
