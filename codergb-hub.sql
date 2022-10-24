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

 Date: 24/10/2022 20:03:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
  `avatarUrl` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverUrl` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `official` int NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatarOriginalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarMimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarDest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarFilename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatarSize` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverOriginalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverMimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverDest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverFilename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `coverSize` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
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
INSERT INTO `file` VALUES ('1665746862151', 'http://localhost:8888/image/1665746862151', NULL, 'p2629896175.webp', 'image/webp', './upload/channel/avatar', '1665746862146.webp', 78230, '2022-10-14 19:27:42', '2022-10-14 19:27:42');
INSERT INTO `file` VALUES ('1665746893563', 'http://localhost:8888/image/1665746893563', NULL, '0130e6573c5df332f8757cb94ab286.jpg', 'image/jpeg', './upload/channel/avatar', '1665746893555.jpg', 632103, '2022-10-14 19:28:13', '2022-10-14 19:28:13');
INSERT INTO `file` VALUES ('1665747307452', 'http://localhost:8888/image/1665747307452', NULL, 'lisa.jpg', 'image/jpeg', './upload/channel/avatar', '1665747307450.jpg', 128633, '2022-10-14 19:35:07', '2022-10-14 19:35:07');
INSERT INTO `file` VALUES ('1665747360532', 'http://localhost:8888/image/1665747360532', NULL, 'p2629896175.webp', 'image/webp', './upload/channel/avatar', '1665747360530.webp', 76258, '2022-10-14 19:36:00', '2022-10-14 19:36:00');
INSERT INTO `file` VALUES ('1665747405928', 'http://localhost:8888/image/1665747405928', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/channel/avatar', '1665747405927.jpg', 62640, '2022-10-14 19:36:45', '2022-10-14 19:36:45');
INSERT INTO `file` VALUES ('1665812475267', 'http://localhost:8888/image/1665812475267', NULL, 'lisa.jpg', 'image/jpeg', './upload/channel/avatar', '1665812475262.jpg', 72537, '2022-10-15 13:41:15', '2022-10-15 13:41:15');
INSERT INTO `file` VALUES ('1665812835943', 'http://localhost:8888/image/1665812835943', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/channel/avatar', '1665812835941.jpg', 72951, '2022-10-15 13:47:15', '2022-10-15 13:47:15');
INSERT INTO `file` VALUES ('1665812867212', 'http://localhost:8888/image/1665812867212', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/channel/avatar', '1665812866037.jpg', 73614, '2022-10-15 13:47:47', '2022-10-15 13:47:47');
INSERT INTO `file` VALUES ('1665813083991', 'http://localhost:8888/image/1665813083991', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/channel/avatar', '1665813082844.jpg', 73134, '2022-10-15 13:51:23', '2022-10-15 13:51:23');
INSERT INTO `file` VALUES ('1665813148230', 'http://localhost:8888/image/1665813148230', NULL, 'p2677018763.webp', 'image/webp', './upload/channel/avatar', '1665813146552.webp', 99395, '2022-10-15 13:52:28', '2022-10-15 13:52:28');
INSERT INTO `file` VALUES ('1665813230460', 'http://localhost:8888/image/1665813230460', NULL, 'p2629896175.webp', 'image/webp', './upload/channel/avatar', '1665813229257.webp', 76044, '2022-10-15 13:53:50', '2022-10-15 13:53:50');
INSERT INTO `file` VALUES ('1665822983752', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-15 16:36:23', '2022-10-15 16:36:23');
INSERT INTO `file` VALUES ('1665899222802', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-16 13:47:02', '2022-10-16 13:47:02');
INSERT INTO `file` VALUES ('1665900832991', 'http://localhost:8888/image/1665900832991', NULL, '2.jpg', 'image/jpeg', './upload/image', '1665900832986.jpg', 35135, '2022-10-16 14:13:52', '2022-10-16 14:13:52');
INSERT INTO `file` VALUES ('1665901349109', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-16 14:22:29', '2022-10-16 14:22:29');
INSERT INTO `file` VALUES ('1665901763545', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-16 14:29:23', '2022-10-16 14:29:23');
INSERT INTO `file` VALUES ('1665902384259', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-16 14:39:44', '2022-10-16 14:39:44');
INSERT INTO `file` VALUES ('1666266561852', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 19:49:21', '2022-10-20 19:49:21');
INSERT INTO `file` VALUES ('1666266767954', 'http://localhost:8888/image/1666266767954', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1666266767952.jpg', 216978, '2022-10-20 19:52:47', '2022-10-20 19:52:47');
INSERT INTO `file` VALUES ('1666267038635', 'http://localhost:8888/image/1666267038635', NULL, '2.jpg', 'image/jpeg', './upload/image', '1666267038634.jpg', 99958, '2022-10-20 19:57:18', '2022-10-20 19:57:18');
INSERT INTO `file` VALUES ('1666267052231', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 19:57:32', '2022-10-20 19:57:32');
INSERT INTO `file` VALUES ('1666267137691', 'http://localhost:8888/image/1666267137691', NULL, '2.jpg', 'image/jpeg', './upload/image', '1666267137688.jpg', 102801, '2022-10-20 19:58:57', '2022-10-20 19:58:57');
INSERT INTO `file` VALUES ('1666267147886', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 19:59:07', '2022-10-20 19:59:07');
INSERT INTO `file` VALUES ('1666267597595', 'http://localhost:8888/image/1666267597595', NULL, '1.jpg', 'image/jpeg', './upload/image', '1666267597592.jpg', 90684, '2022-10-20 20:06:37', '2022-10-20 20:06:37');
INSERT INTO `file` VALUES ('1666267608514', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:06:48', '2022-10-20 20:06:48');
INSERT INTO `file` VALUES ('1666267650856', 'http://localhost:8888/image/1666267650856', NULL, '1.jpg', 'image/jpeg', './upload/image', '1666267650855.jpg', 94175, '2022-10-20 20:07:30', '2022-10-20 20:07:30');
INSERT INTO `file` VALUES ('1666267668151', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:07:48', '2022-10-20 20:07:48');
INSERT INTO `file` VALUES ('1666267724454', 'http://localhost:8888/image/1666267724454', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1666267724451.jpg', 64326, '2022-10-20 20:08:44', '2022-10-20 20:08:44');
INSERT INTO `file` VALUES ('1666267741870', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:09:01', '2022-10-20 20:09:01');
INSERT INTO `file` VALUES ('1666267783283', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:09:43', '2022-10-20 20:09:43');
INSERT INTO `file` VALUES ('1666267799772', 'http://localhost:8888/image/1666267799772', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1666267799771.webp', 65645, '2022-10-20 20:09:59', '2022-10-20 20:09:59');
INSERT INTO `file` VALUES ('1666267993921', 'http://localhost:8888/image/1666267993921', NULL, '2.jpg', 'image/jpeg', './upload/image', '1666267993908.jpg', 98291, '2022-10-20 20:13:13', '2022-10-20 20:13:13');
INSERT INTO `file` VALUES ('1666268013845', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:13:33', '2022-10-20 20:13:33');
INSERT INTO `file` VALUES ('1666268217547', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:16:57', '2022-10-20 20:16:57');
INSERT INTO `file` VALUES ('1666268386998', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:19:46', '2022-10-20 20:19:46');
INSERT INTO `file` VALUES ('1666269588830', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:39:48', '2022-10-20 20:39:48');
INSERT INTO `file` VALUES ('1666269634453', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:40:34', '2022-10-20 20:40:34');
INSERT INTO `file` VALUES ('1666269728541', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:42:08', '2022-10-20 20:42:08');
INSERT INTO `file` VALUES ('1666269784940', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:43:04', '2022-10-20 20:43:04');
INSERT INTO `file` VALUES ('1666269864380', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:44:24', '2022-10-20 20:44:24');
INSERT INTO `file` VALUES ('1666269866313', 'http://localhost:8888/image/1666269866313', NULL, 'p2185073849.webp', 'image/webp', './upload/image', '1666269866312.webp', 83051, '2022-10-20 20:44:26', '2022-10-20 20:44:26');
INSERT INTO `file` VALUES ('1666269948782', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:45:48', '2022-10-20 20:45:48');
INSERT INTO `file` VALUES ('1666269994409', 'http://localhost:8888/image/1666269994409', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1666269994408.webp', 70720, '2022-10-20 20:46:34', '2022-10-20 20:46:34');
INSERT INTO `file` VALUES ('1666270128513', 'http://localhost:8888/image/1666270128513', NULL, 'f15887af9.jpg', 'image/jpeg', './upload/image', '1666270128502.jpg', 69058, '2022-10-20 20:48:48', '2022-10-20 20:48:48');
INSERT INTO `file` VALUES ('1666270133859', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 20:48:53', '2022-10-20 20:48:53');
INSERT INTO `file` VALUES ('1666271163916', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:06:03', '2022-10-20 21:06:03');
INSERT INTO `file` VALUES ('1666271176958', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:06:16', '2022-10-20 21:06:16');
INSERT INTO `file` VALUES ('1666271529479', 'http://localhost:8888/image/1666271529479', NULL, '2.jpg', 'image/jpeg', './upload/image', '1666271529477.jpg', 100647, '2022-10-20 21:12:09', '2022-10-20 21:12:09');
INSERT INTO `file` VALUES ('1666271536535', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:12:16', '2022-10-20 21:12:16');
INSERT INTO `file` VALUES ('1666271608562', 'http://localhost:8888/image/1666271608562', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1666271608561.webp', 66675, '2022-10-20 21:13:28', '2022-10-20 21:13:28');
INSERT INTO `file` VALUES ('1666271614298', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:13:34', '2022-10-20 21:13:34');
INSERT INTO `file` VALUES ('1666271695619', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:14:55', '2022-10-20 21:14:55');
INSERT INTO `file` VALUES ('1666271720860', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:15:20', '2022-10-20 21:15:20');
INSERT INTO `file` VALUES ('1666271770987', 'http://localhost:8888/image/1666271770987', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1666271770985.webp', 60783, '2022-10-20 21:16:10', '2022-10-20 21:16:10');
INSERT INTO `file` VALUES ('1666271789307', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:16:29', '2022-10-20 21:16:29');
INSERT INTO `file` VALUES ('1666271809977', 'http://localhost:8888/image/1666271809977', NULL, 'p2629896175.webp', 'image/webp', './upload/image', '1666271809976.webp', 62354, '2022-10-20 21:16:49', '2022-10-20 21:16:49');
INSERT INTO `file` VALUES ('1666271854656', 'http://localhost:8888/image/1666271854656', NULL, 'p2677018763.webp', 'image/webp', './upload/image', '1666271854655.webp', 88625, '2022-10-20 21:17:34', '2022-10-20 21:17:34');
INSERT INTO `file` VALUES ('1666271947396', 'http://localhost:8888/image/1666271947396', NULL, 'p1378204929.4.jpg', 'image/jpeg', './upload/channel/avatar', '1666271947393.jpg', 87309, '2022-10-20 21:19:07', '2022-10-20 21:19:07');
INSERT INTO `file` VALUES ('1666272013537', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-20 21:20:13', '2022-10-20 21:20:13');
INSERT INTO `file` VALUES ('1666272023225', 'http://localhost:8888/image/1666272023225', NULL, 'p2185073849.webp', 'image/webp', './upload/image', '1666272023225.webp', 44414, '2022-10-20 21:20:23', '2022-10-20 21:20:23');
INSERT INTO `file` VALUES ('1666609979212', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:12:59', '2022-10-24 19:12:59');
INSERT INTO `file` VALUES ('1666610509402', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:21:49', '2022-10-24 19:21:49');
INSERT INTO `file` VALUES ('1666610541958', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:22:21', '2022-10-24 19:22:21');
INSERT INTO `file` VALUES ('1666611522291', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:38:42', '2022-10-24 19:38:42');
INSERT INTO `file` VALUES ('1666611879208', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:44:39', '2022-10-24 19:44:39');
INSERT INTO `file` VALUES ('1666611932868', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:45:32', '2022-10-24 19:45:32');
INSERT INTO `file` VALUES ('1666612006780', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:46:46', '2022-10-24 19:46:46');
INSERT INTO `file` VALUES ('1666612061342', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:48:07', '2022-10-24 19:48:07');
INSERT INTO `file` VALUES ('1666612202458', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:50:28', '2022-10-24 19:50:28');
INSERT INTO `file` VALUES ('1666612302055', NULL, 'http://localhost:8888/video/0f5b2584adef633b42b8a973a3732771.m3u8', 'videoplayback.mp4', NULL, './upload/video/', '0f5b2584adef633b42b8a973a3732771.m3u8', NULL, '2022-10-24 19:52:06', '2022-10-24 19:52:06');
INSERT INTO `file` VALUES ('1666612395468', 'http://localhost:8888/image/1666612395468', NULL, 'lisa.jpg', 'image/jpeg', './upload/image', '1666612395466.jpg', 64716, '2022-10-24 19:53:15', '2022-10-24 19:53:15');

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
  `tId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `tId`(`tId` ASC) USING BTREE,
  INDEX `vId`(`vId` ASC) USING BTREE,
  CONSTRAINT `tag_video_ibfk_1` FOREIGN KEY (`tId`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_video_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag_video
-- ----------------------------

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

SET FOREIGN_KEY_CHECKS = 1;
