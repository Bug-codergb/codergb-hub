/*
 Navicat Premium Dump SQL

 Source Server         : NodeMySQL
 Source Server Type    : MySQL
 Source Server Version : 80040 (8.0.40)
 Source Host           : localhost:3306
 Source Schema         : codergb-hub

 Target Server Type    : MySQL
 Target Server Version : 80040 (8.0.40)
 File Encoding         : 65001

 Date: 03/01/2025 22:13:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for block
-- ----------------------------
DROP TABLE IF EXISTS `block`;
CREATE TABLE `block` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cate` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of block
-- ----------------------------
BEGIN;
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028360697', '上传的视频', '1', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:00', '2022-11-24 22:05:54');
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028411493', '热门上传视频', '1', '每当有视频上传后，此板块就会有显示', '2022-10-29 15:26:51', '2022-11-24 22:05:55');
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028433872', '短视频', '1', '每当有短视频上传后，此板块就会有显示', '2022-10-29 15:27:13', '2022-11-24 22:05:58');
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028662350', '创建的播放列表', '3', '', '2022-10-29 15:31:02', '2022-11-24 22:06:07');
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028677380', '收藏的播放列表', '3', '', '2022-10-29 15:31:17', '2024-01-11 21:01:14');
INSERT INTO `block` (`id`, `name`, `cate`, `description`, `createTime`, `updateTime`) VALUES ('1667028710453', '订阅的频道', '4', '显示您订阅的频道', '2022-10-29 15:31:50', '2022-11-24 22:06:10');
COMMIT;

-- ----------------------------
-- Table structure for block_content
-- ----------------------------
DROP TABLE IF EXISTS `block_content`;
CREATE TABLE `block_content` (
  `blockId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  KEY `blockId` (`blockId`) USING BTREE,
  KEY `cId` (`cId`) USING BTREE,
  KEY `pId` (`pId`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  CONSTRAINT `block_content_ibfk_1` FOREIGN KEY (`blockId`) REFERENCES `block` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_2` FOREIGN KEY (`cId`) REFERENCES `channel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_3` FOREIGN KEY (`pId`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_content_ibfk_4` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of block_content
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isExplore` int DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
BEGIN;
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726732940', '短视频', '2024-03-06 20:05:32', '2024-03-06 20:05:32', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726739056', '音乐', '2024-03-06 20:05:39', '2024-03-06 20:05:39', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726744101', '爱豆', '2024-03-06 20:05:44', '2024-03-06 20:05:44', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726748303', '校园', '2024-03-06 20:05:48', '2024-03-06 20:05:48', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726752168', '怀旧', '2024-03-06 20:05:52', '2024-03-06 20:05:52', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726762835', '童年', '2024-03-06 20:06:02', '2024-03-06 20:06:02', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726773338', '摇滚', '2024-03-06 20:06:13', '2024-03-06 20:06:13', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726777884', '港台', '2024-03-06 20:06:17', '2024-03-06 20:06:17', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726781533', '动物', '2024-03-06 20:06:21', '2024-03-06 20:06:21', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726784965', '植物', '2024-03-06 20:06:24', '2024-03-06 20:06:24', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726788867', '美食', '2024-03-06 20:06:28', '2024-03-06 20:06:28', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726798997', '科学', '2024-03-06 20:06:38', '2024-03-06 20:06:38', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726804948', '计算机', '2024-03-06 20:06:44', '2024-03-06 20:06:44', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726816214', '影视', '2024-03-06 20:06:56', '2024-03-06 20:06:56', 0);
INSERT INTO `category` (`id`, `name`, `createTime`, `updateTime`, `isExplore`) VALUES ('1709726950345', '运动', '2024-03-06 20:09:10', '2024-03-06 20:09:10', 0);
COMMIT;

-- ----------------------------
-- Table structure for channel
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `alias` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `official` int DEFAULT NULL,
  `trailer` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `featured` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `banner` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of channel
-- ----------------------------
BEGIN;
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709726632143', '叶子', NULL, '1709726632137', '真不错，我爱你，我的祖国', NULL, '1709727694829', '1709968946947', '1709735232954', '2024-03-06 20:03:52', '2024-05-01 16:37:40');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709726637541', 'guobin', NULL, '1709726637539', NULL, NULL, NULL, NULL, NULL, '2024-03-06 20:03:57', '2024-03-06 20:03:57');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709728495275', 'BugMa', NULL, '1709728495272', NULL, NULL, NULL, NULL, NULL, '2024-03-06 20:34:55', '2024-03-06 20:34:55');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709729533924', '小夜刀', NULL, '1709729533921', NULL, NULL, NULL, NULL, NULL, '2024-03-06 20:52:13', '2024-03-06 20:52:13');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730195055', '音乐', '音乐', '1709730195053', '耳朵怀孕系列', 1, NULL, NULL, '1709731222196', '2024-03-06 21:03:15', '2024-03-06 21:20:23');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730357382', '游戏', NULL, '1709730357380', NULL, NULL, NULL, NULL, '1709965974961', '2024-03-06 21:05:57', '2024-03-09 14:32:54');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730362357', '新闻', NULL, '1709730362355', NULL, NULL, NULL, NULL, '1709965903836', '2024-03-06 21:06:02', '2024-03-09 14:31:43');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730367419', '学习', NULL, '1709730367418', NULL, NULL, NULL, NULL, '1709965811151', '2024-03-06 21:06:07', '2024-03-09 14:30:11');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730372558', '体育', '运动', '1709730372557', '足球篮球', 1, NULL, NULL, '1709731148579', '2024-03-06 21:06:12', '2024-03-06 21:19:09');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709730380641', '电影和节目', '影视', '1709730380639', '收集相关影视资料学习', 0, NULL, NULL, '1709731003611', '2024-03-06 21:06:20', '2024-03-06 21:17:05');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709733343051', '特朗普', NULL, '1709733343047', NULL, NULL, NULL, NULL, NULL, '2024-03-06 21:55:43', '2024-03-06 21:55:43');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709820642244', '梅子', NULL, '1709820642242', NULL, NULL, '1709902167810', '1709901682371', '1709972006626', '2024-03-07 22:10:42', '2024-03-09 16:13:47');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709902530673', '旎旎', NULL, '1709902530670', NULL, NULL, NULL, NULL, NULL, '2024-03-08 20:55:30', '2024-03-08 20:55:30');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709905648924', '鞋底的石子儿', NULL, '1709905648920', NULL, NULL, NULL, NULL, NULL, '2024-03-08 21:47:28', '2024-03-08 21:47:28');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709962443379', '郭嘉', NULL, '1709962443377', NULL, NULL, NULL, NULL, NULL, '2024-03-09 13:34:03', '2024-03-09 13:34:03');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709963638255', '叉叉', NULL, '1709963638248', '太棒了，这里', NULL, '1709963889528', '1709964424184', '1709967662621', '2024-03-09 13:53:58', '2024-03-09 15:01:48');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709964349422', '亲亲', NULL, '1709964349418', NULL, NULL, '1709964424184', '1709966991829', '1709967248841', '2024-03-09 14:05:49', '2024-03-09 14:54:08');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709968099991', '橙子', NULL, '1709968099989', NULL, NULL, NULL, NULL, NULL, '2024-03-09 15:08:19', '2024-03-09 15:08:19');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709968338870', 'ln', NULL, '1709968338867', NULL, NULL, NULL, NULL, NULL, '2024-03-09 15:12:18', '2024-03-09 15:12:18');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1709968523873', '浪花', NULL, '1709968523870', NULL, NULL, NULL, NULL, NULL, '2024-03-09 15:15:23', '2024-03-09 15:15:23');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1710054197923', '欢喜', NULL, '1710054197921', '我太爱这个网站了', NULL, '1710054284377', '1709968946947', '1710054243291', '2024-03-10 15:03:17', '2024-03-10 15:05:22');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1714543289864', '猪猪', NULL, '1714543289857', NULL, NULL, NULL, NULL, '1714545324643', '2024-05-01 14:01:29', '2024-05-01 14:35:24');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1714549381816', '朴彩英', NULL, '1714549381813', '我是一个爱听歌曲的大褂', NULL, '1714549541546', '1714545759293', '1714549686360', '2024-05-01 15:43:01', '2024-05-01 15:48:50');
INSERT INTO `channel` (`id`, `name`, `alias`, `userId`, `description`, `official`, `trailer`, `featured`, `banner`, `createTime`, `updateTime`) VALUES ('1735910367766', '如意', NULL, '1735910367763', NULL, NULL, NULL, NULL, NULL, '2025-01-03 21:19:27', '2025-01-03 21:19:27');
COMMIT;

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `sourceUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `online` int DEFAULT NULL,
  `targetUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `deleteUser` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of chat
-- ----------------------------
BEGIN;
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1710052405625', '今天适合学习', '1709726632137', 0, '1709728495272', NULL, '2024-03-10 14:33:25', '2024-03-10 14:33:25');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1710053802681', '橙子你好', '1709726632137', 0, '1709968099989', NULL, '2024-03-10 14:56:42', '2024-03-10 14:56:42');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1710053833049', '今天是个学习的好日子', '1709968099989', 1, '1709726632137', NULL, '2024-03-10 14:57:13', '2024-03-10 14:57:13');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1710053843461', '最近在学java', '1709726632137', 1, '1709968099989', NULL, '2024-03-10 14:57:23', '2024-03-10 14:57:23');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1710053853762', '应该学前端哈哈哈', '1709968099989', 1, '1709726632137', NULL, '2024-03-10 14:57:33', '2024-03-10 14:57:33');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1714632275603', '叶子，我喜欢你很久了', '1714543289857', 1, '1709726632137', NULL, '2024-05-02 14:44:35', '2024-05-02 14:44:35');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1714632281418', '这是真的么', '1709726632137', 1, '1714543289857', NULL, '2024-05-02 14:44:41', '2024-05-02 14:44:41');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1714632295464', '自从第一次遇见你，我就喜欢上了你', '1714543289857', 1, '1709726632137', NULL, '2024-05-02 14:44:55', '2024-05-02 14:44:55');
INSERT INTO `chat` (`id`, `content`, `sourceUser`, `online`, `targetUser`, `deleteUser`, `createTime`, `updateTime`) VALUES ('1714632308049', '我也喜欢你很久了', '1709726632137', 1, '1714543289857', NULL, '2024-05-02 14:45:08', '2024-05-02 14:45:08');
COMMIT;

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE,
  KEY `collection_userId_fk` (`userId`) USING BTREE,
  CONSTRAINT `collection_userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of collection
-- ----------------------------
BEGIN;
INSERT INTO `collection` (`id`, `name`, `cover`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709730235010', '唯美音乐', '1709730233852', '聆听内心的声音', '1709730195053', '2024-03-06 21:03:55', '2024-03-06 21:03:55');
INSERT INTO `collection` (`id`, `name`, `cover`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709730282205', '那些你熟悉却又不知道名字的轻音乐', '1709730281330', '只听一小会你就会爱上它。音乐就像生活，有开心也会有低落的时候，anyway', '1709730195053', '2024-03-06 21:04:42', '2024-03-06 21:04:42');
INSERT INTO `collection` (`id`, `name`, `cover`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709730326489', '8090后专属怀旧老歌合集', '1709730325531', '8090后的老歌来了', '1709730195053', '2024-03-06 21:05:26', '2024-03-06 21:05:26');
INSERT INTO `collection` (`id`, `name`, `cover`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709730435208', '华语民谣，因为懂得才有共鸣', '1709730434023', '民谣是最安静的角落，民谣是一种诉说，包含了一种朴素的情感，在听的过程中可能会与自己的故事契合，产生共鸣，100首华语民谣，因为懂得才有共鸣。', '1709730195053', '2024-03-06 21:07:15', '2024-03-06 21:07:15');
COMMIT;

-- ----------------------------
-- Table structure for collection_video
-- ----------------------------
DROP TABLE IF EXISTS `collection_video`;
CREATE TABLE `collection_video` (
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sort` int NOT NULL,
  PRIMARY KEY (`cId`,`vId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of collection_video
-- ----------------------------
BEGIN;
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730235010', '1709727158279', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730235010', '1709727225326', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730235010', '1709727360760', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730235010', '1709727694829', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709728097869', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709728442684', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709728788586', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709728917857', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709729476568', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709729514660', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709729818524', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709730058428', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730282205', '1709730689098', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709901525538', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709901682371', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709901732306', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709902167810', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709902212933', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709902491136', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709902846546', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709903103144', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730326489', '1709903474181', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709904597222', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709904846470', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709905956013', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709906040181', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709906184558', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709906560937', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709963889528', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709964424184', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709964765739', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709966796036', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709966991829', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709968946947', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709968992295', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1709970879644', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1710049033545', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709730435208', '1710054012961', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709966090765', '1709906040181', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709966090765', '1709962703249', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709966090765', '1709963106823', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709966090765', '1709963889528', 12);
INSERT INTO `collection_video` (`cId`, `vId`, `sort`) VALUES ('1709966090765', '1709964765739', 12);
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `replyId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  KEY `replyId` (`replyId`) USING BTREE,
  KEY `comment_ibfk_4` (`mId`) USING BTREE,
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`replyId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_4` FOREIGN KEY (`mId`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731633317', '豫章（南昌）故郡，洪都新府。星分翼轸（zhěn），地接衡庐。襟三江而带五湖，控蛮荆而引瓯（ōu）越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃（fān）之榻（tà）。雄州雾列，俊采星驰。台隍（huáng）枕夷夏之交', '1709729533921', '1709727158279', NULL, '2024-03-06 21:27:13', '2024-03-06 21:27:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731644064', '豫章（南昌）故郡，洪都新府。星分翼轸（zhěn），地接衡庐。襟三江而带五湖，控蛮荆而引瓯（ōu）越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃（fān）之榻（tà）。雄州雾列，俊采星驰。台隍（huáng）枕夷夏之交', '1709729533921', '1709728097869', NULL, '2024-03-06 21:27:24', '2024-03-06 21:27:24', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731656397', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹', '1709729533921', '1709728917857', NULL, '2024-03-06 21:27:36', '2024-03-06 21:27:36', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731664530', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹', '1709729533921', '1709728788586', NULL, '2024-03-06 21:27:44', '2024-03-06 21:27:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731669949', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹', '1709729533921', '1709729476568', NULL, '2024-03-06 21:27:49', '2024-03-06 21:27:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731682803', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会（kuài）于云间', '1709729533921', '1709728442684', NULL, '2024-03-06 21:28:02', '2024-03-06 21:28:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731694815', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会（kuài）于云间', '1709729533921', '1709727360760', NULL, '2024-03-06 21:28:14', '2024-03-06 21:28:14', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731704099', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会（kuài）于云间', '1709729533921', '1709729514660', NULL, '2024-03-06 21:28:24', '2024-03-06 21:28:24', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731709931', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会（kuài）于云间', '1709729533921', '1709729818524', NULL, '2024-03-06 21:28:29', '2024-03-06 21:28:29', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731721998', '嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子安贫（见机），达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志', '1709729533921', '1709727225326', NULL, '2024-03-06 21:28:41', '2024-03-06 21:28:41', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731741300', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709731599134', NULL, '2024-03-06 21:29:01', '2024-03-06 21:29:01', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731747684', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709731471688', NULL, '2024-03-06 21:29:07', '2024-03-06 21:29:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731754554', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709730689098', NULL, '2024-03-06 21:29:14', '2024-03-06 21:29:14', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731762299', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709730058428', NULL, '2024-03-06 21:29:22', '2024-03-06 21:29:22', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731768884', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709729818524', NULL, '2024-03-06 21:29:28', '2024-03-06 21:29:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731774964', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709729514660', NULL, '2024-03-06 21:29:34', '2024-03-06 21:29:34', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731779930', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709729476568', NULL, '2024-03-06 21:29:39', '2024-03-06 21:29:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731785881', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709728917857', NULL, '2024-03-06 21:29:45', '2024-03-06 21:29:45', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731792199', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709728442684', NULL, '2024-03-06 21:29:52', '2024-03-06 21:29:52', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731799731', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色', '1709726632137', '1709728788586', NULL, '2024-03-06 21:29:59', '2024-03-06 21:29:59', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731830601', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709731599134', NULL, '2024-03-06 21:30:30', '2024-03-06 21:30:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731836986', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709731471688', NULL, '2024-03-06 21:30:36', '2024-03-06 21:30:36', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731843530', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709730689098', NULL, '2024-03-06 21:30:43', '2024-03-06 21:30:43', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731848530', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709730058428', NULL, '2024-03-06 21:30:48', '2024-03-06 21:30:48', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731854915', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709729818524', NULL, '2024-03-06 21:30:54', '2024-03-06 21:30:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731860498', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709729514660', NULL, '2024-03-06 21:31:00', '2024-03-06 21:31:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731865647', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709729476568', NULL, '2024-03-06 21:31:05', '2024-03-06 21:31:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731872397', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709728442684', NULL, '2024-03-06 21:31:12', '2024-03-06 21:31:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731878212', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709728097869', NULL, '2024-03-06 21:31:18', '2024-03-06 21:31:18', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731885398', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709727694829', NULL, '2024-03-06 21:31:25', '2024-03-06 21:31:25', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731891597', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709727360760', NULL, '2024-03-06 21:31:31', '2024-03-06 21:31:31', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709731897014', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下', '1709728495272', '1709727158279', NULL, '2024-03-06 21:31:37', '2024-03-06 21:31:37', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733145297', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕（爱）宗悫（què）之长风。舍簪（zān）笏（hù）于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨（tāo）陪鲤对；今兹（晨）捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既（相）遇，奏流水以何惭？', '1709728495272', '1709728917857', NULL, '2024-03-06 21:52:25', '2024-03-06 21:52:25', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733174680', '呜乎！胜地不常，盛筵难再；兰亭已矣，梓（zǐ）泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀（诚），恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔', '1709728495272', '1709733037458', NULL, '2024-03-06 21:52:54', '2024-03-06 21:52:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733198615', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。', '1709728495272', '1709732612806', NULL, '2024-03-06 21:53:18', '2024-03-06 21:53:18', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733395580', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹，下临无地。鹤汀（tīng）凫（fú）渚（zhǔ），穷岛屿之萦回；桂殿兰宫，列（即）冈峦之体势', '1709733343047', '1709733037458', NULL, '2024-03-06 21:56:35', '2024-03-06 21:56:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733406599', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡（lǐ）之滨，雁阵惊寒，声断衡阳之浦', '1709733343047', '1709732612806', NULL, '2024-03-06 21:56:46', '2024-03-06 21:56:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733416895', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥', '1709733343047', '1709727694829', NULL, '2024-03-06 21:56:56', '2024-03-06 21:56:56', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733430916', '嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子安贫（见机），达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙（hézhé）以（而）犹（相）欢。北海虽赊（shē），扶摇可接；东隅（yú）已逝，桑榆非晚', '1709733343047', '1709727225326', NULL, '2024-03-06 21:57:10', '2024-03-06 21:57:10', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733443748', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕（爱）宗悫（què）之长风。舍簪（zān）笏（hù）于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨（tāo）陪鲤对；今兹（晨）捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既（相）遇，奏流水以何惭？', '1709733343047', '1709732368308', NULL, '2024-03-06 21:57:23', '2024-03-06 21:57:23', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733455964', '呜乎！胜地不常，盛筵难再；兰亭已矣，梓（zǐ）泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀（诚），恭疏短引', '1709733343047', '1709731599134', NULL, '2024-03-06 21:57:35', '2024-03-06 21:57:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733469763', '　嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子安贫（见机），达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志', '1709733343047', '1709727158279', NULL, '2024-03-06 21:57:49', '2024-03-06 21:57:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733478752', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕（爱）宗悫（què）之长风。舍簪（zān）笏（hù）于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨（tāo）陪鲤对', '1709733343047', '1709731471688', NULL, '2024-03-06 21:57:58', '2024-03-06 21:57:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733487632', '嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子安贫（见机），达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙（hézhé）以（而）犹（相）欢。北海虽赊（shē），扶摇可接；东隅（yú）已逝', '1709733343047', '1709731471688', NULL, '2024-03-06 21:58:07', '2024-03-06 21:58:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733499596', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日', '1709733343047', '1709730058428', NULL, '2024-03-06 21:58:19', '2024-03-06 21:58:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733517550', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹，下临无地。鹤汀（tīng）凫（fú）渚（zhǔ），穷岛屿之萦回；桂殿兰宫，列（即）冈峦之体势', '1709733343047', '1709728097869', NULL, '2024-03-06 21:58:37', '2024-03-06 21:58:37', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733531684', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚', '1709733343047', '1709728442684', NULL, '2024-03-06 21:58:51', '2024-03-06 21:58:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733542965', '时维九月，序属三秋。潦（lǎo）水尽而寒潭清，烟光凝而暮山紫。俨（yǎn）骖（cān）騑（fēi）于上路，访风景于崇阿（ē）。临帝子之长洲，得仙人（天人）之旧馆。层台（峦）耸翠，上出重霄；飞阁流（翔）丹，下临无地。鹤汀（tīng）凫（fú）渚（zhǔ），穷岛屿之萦回；桂殿兰宫，列（即）冈峦之体势', '1709733343047', '1709729476568', NULL, '2024-03-06 21:59:02', '2024-03-06 21:59:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733557665', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日', '1709733343047', '1709729514660', NULL, '2024-03-06 21:59:17', '2024-03-06 21:59:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733567745', '　勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕（爱）宗悫（què）之长风。舍簪（zān）笏（hù）于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨（tāo）陪鲤对；今兹（晨）捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既（相）遇，奏流水以何惭？', '1709733343047', '1709729818524', NULL, '2024-03-06 21:59:27', '2024-03-06 21:59:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733581348', '嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子', '1709733343047', '1709727225326', NULL, '2024-03-06 21:59:41', '2024-03-06 21:59:41', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733593166', '遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日', '1709733343047', '1709728788586', NULL, '2024-03-06 21:59:53', '2024-03-06 21:59:53', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733603617', '披绣闼（tà），俯雕甍（méng），山原旷其盈视，川泽纡其骇瞩。闾阎（lǘyán）扑地，钟鸣鼎食之家；舸（gě）舰迷（弥）津，青雀黄龙之轴（通：舳zhú）。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡（lǐ）之滨', '1709733343047', '1709730689098', NULL, '2024-03-06 22:00:03', '2024-03-06 22:00:03', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733617413', '嗟乎！时运不齐，命途多舛（chuǎn）。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子安贫（见机），达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙（hézhé）以（而）犹（相）欢。北海虽赊（shē），扶摇可接；东隅（yú）已逝，桑榆非晚。孟尝高洁，空余（怀）报国之情；阮籍猖狂，岂效穷途之哭！', '1709733343047', '1709727694829', NULL, '2024-03-06 22:00:17', '2024-03-06 22:00:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709733630419', '　遥吟（襟）俯（甫）畅，逸兴遄（chuán）飞。爽籁发而清风生，纤歌凝而白云遏（è）。睢（suī）园绿竹，气凌彭泽之樽（zūn）；邺（yè）水朱华，光照临川之笔。四美具，二难并。穷睇眄（dìmiǎn）于中天，极娱游于暇日。天高地迥（jiǒng），觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日', '1709733343047', '1709727360760', NULL, '2024-03-06 22:00:30', '2024-03-06 22:00:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820087432', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，', '1709726632137', '1709728917857', NULL, '2024-03-07 22:01:27', '2024-03-07 22:01:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820137548', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳', '1709726632137', '1709728097869', NULL, '2024-03-07 22:02:17', '2024-03-07 22:02:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820193298', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数', '1709726632137', '1709731471688', NULL, '2024-03-07 22:03:13', '2024-03-07 22:03:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820339150', '，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何', '1709726632137', '1709732612806', NULL, '2024-03-07 22:05:39', '2024-03-07 22:05:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820367465', '，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何', '1709726632137', '1709727694829', NULL, '2024-03-07 22:06:07', '2024-03-07 22:06:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820439399', '照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人；萍水相逢，尽是他乡之', '1709726632137', '1709728442684', NULL, '2024-03-07 22:07:19', '2024-03-07 22:07:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820706659', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷', '1709820642242', '1709734139055', NULL, '2024-03-07 22:11:46', '2024-03-07 22:11:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820718329', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝', '1709820642242', '1709733037458', NULL, '2024-03-07 22:11:58', '2024-03-07 22:11:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820732694', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹', '1709820642242', '1709732612806', NULL, '2024-03-07 22:12:12', '2024-03-07 22:12:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820740843', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，', '1709820642242', '1709727225326', NULL, '2024-03-07 22:12:20', '2024-03-07 22:12:20', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709820766625', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹', '1709820642242', '1709727360760', NULL, '2024-03-07 22:12:46', '2024-03-07 22:12:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821059790', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既', '1709820642242', '1709731599134', NULL, '2024-03-07 22:17:39', '2024-03-07 22:17:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821067094', '勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既', '1709820642242', '1709729818524', NULL, '2024-03-07 22:17:47', '2024-03-07 22:17:47', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821080239', '乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效', '1709820642242', '1709728442684', NULL, '2024-03-07 22:18:00', '2024-03-07 22:18:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821093556', '，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709820642242', '1709729476568', NULL, '2024-03-07 22:18:13', '2024-03-07 22:18:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821108038', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709727225326', NULL, '2024-03-07 22:18:28', '2024-03-07 22:18:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821118075', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709730689098', NULL, '2024-03-07 22:18:38', '2024-03-07 22:18:38', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821123621', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709728788586', NULL, '2024-03-07 22:18:43', '2024-03-07 22:18:43', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821132342', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709728097869', NULL, '2024-03-07 22:18:52', '2024-03-07 22:18:52', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821137425', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709730058428', NULL, '2024-03-07 22:18:57', '2024-03-07 22:18:57', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709821168122', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之', '1709820642242', '1709727694829', NULL, '2024-03-07 22:19:28', '2024-03-07 22:19:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905080675', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟', '1709902530670', '1709904846470', NULL, '2024-03-08 21:38:00', '2024-03-08 21:38:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905092824', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势', '1709902530670', '1709904597222', NULL, '2024-03-08 21:38:12', '2024-03-08 21:38:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905105940', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督', '1709902530670', '1709733037458', NULL, '2024-03-08 21:38:25', '2024-03-08 21:38:25', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905114075', '公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯！', '1709902530670', '1709901189845', NULL, '2024-03-08 21:38:34', '2024-03-08 21:38:34', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905124454', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势', '1709902530670', '1709731599134', NULL, '2024-03-08 21:38:44', '2024-03-08 21:38:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905138107', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有', '1709902530670', '1709731471688', NULL, '2024-03-08 21:38:58', '2024-03-08 21:38:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905151223', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见几，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志，酌贪泉而觉爽，处涸辙以犹欢', '1709902530670', '1709904147909', NULL, '2024-03-08 21:39:11', '2024-03-08 21:39:11', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905160054', '勃三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，爱宗慤之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲁对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；', '1709902530670', '1709902846546', NULL, '2024-03-08 21:39:20', '2024-03-08 21:39:20', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905167495', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见几，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志，酌贪泉而觉爽，处涸', '1709902530670', '1709901682371', NULL, '2024-03-08 21:39:27', '2024-03-08 21:39:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905175526', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美', '1709902530670', '1709902212933', NULL, '2024-03-08 21:39:35', '2024-03-08 21:39:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905184372', '，识盈虚之有数。望长安于日下，指吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？', '1709902530670', '1709902167810', NULL, '2024-03-08 21:39:44', '2024-03-08 21:39:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905194554', '勃三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，爱宗慤之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲁对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？', '1709902530670', '1709901227938', NULL, '2024-03-08 21:39:54', '2024-03-08 21:39:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905202673', '嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见几，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志，酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空怀报国之情；阮籍猖狂，岂效穷途之哭？', '1709902530670', '1709734139055', NULL, '2024-03-08 21:40:02', '2024-03-08 21:40:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905214138', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之', '1709902530670', '1709902491136', NULL, '2024-03-08 21:40:14', '2024-03-08 21:40:14', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905220654', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，指', '1709902530670', '1709728917857', NULL, '2024-03-08 21:40:20', '2024-03-08 21:40:20', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905229639', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云', '1709902530670', '1709727158279', NULL, '2024-03-08 21:40:29', '2024-03-08 21:40:29', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905251305', '光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。', '1709902530670', '1709903824403', NULL, '2024-03-08 21:40:51', '2024-03-08 21:40:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905266423', '遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。', '1709902530670', '1709901343387', NULL, '2024-03-08 21:41:06', '2024-03-08 21:41:06', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905273823', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼', '1709902530670', '1709901732306', NULL, '2024-03-08 21:41:13', '2024-03-08 21:41:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905281472', '光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯', '1709902530670', '1709901525538', NULL, '2024-03-08 21:41:21', '2024-03-08 21:41:21', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905294873', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709902530670', '1709901343387', NULL, '2024-03-08 21:41:34', '2024-03-08 21:41:34', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905323157', '牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾', '1709820642242', '1709904846470', NULL, '2024-03-08 21:42:03', '2024-03-08 21:42:03', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905332520', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709904597222', NULL, '2024-03-08 21:42:12', '2024-03-08 21:42:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905338888', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709904147909', NULL, '2024-03-08 21:42:18', '2024-03-08 21:42:18', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905341553', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709902846546', NULL, '2024-03-08 21:42:21', '2024-03-08 21:42:21', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905345157', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709727360760', NULL, '2024-03-08 21:42:25', '2024-03-08 21:42:25', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905350554', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709902167810', NULL, '2024-03-08 21:42:30', '2024-03-08 21:42:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905353237', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709902212933', NULL, '2024-03-08 21:42:33', '2024-03-08 21:42:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905357004', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709734139055', NULL, '2024-03-08 21:42:37', '2024-03-08 21:42:37', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905364936', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709903474181', NULL, '2024-03-08 21:42:44', '2024-03-08 21:42:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905370204', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709903824403', NULL, '2024-03-08 21:42:50', '2024-03-08 21:42:50', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905375869', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709903878483', NULL, '2024-03-08 21:42:55', '2024-03-08 21:42:55', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905384118', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709903103144', NULL, '2024-03-08 21:43:04', '2024-03-08 21:43:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905392154', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709901227938', NULL, '2024-03-08 21:43:12', '2024-03-08 21:43:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905399454', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709902491136', NULL, '2024-03-08 21:43:19', '2024-03-08 21:43:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905408887', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709901189845', NULL, '2024-03-08 21:43:28', '2024-03-08 21:43:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905413786', '之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙之轴。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，', '1709820642242', '1709733037458', NULL, '2024-03-08 21:43:33', '2024-03-08 21:43:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905430488', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709904846470', NULL, '2024-03-08 21:43:50', '2024-03-08 21:43:50', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905435721', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709904597222', NULL, '2024-03-08 21:43:55', '2024-03-08 21:43:55', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905440639', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709904147909', NULL, '2024-03-08 21:44:00', '2024-03-08 21:44:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905444801', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709727360760', NULL, '2024-03-08 21:44:04', '2024-03-08 21:44:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905451787', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709903878483', NULL, '2024-03-08 21:44:11', '2024-03-08 21:44:11', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905457039', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709903824403', NULL, '2024-03-08 21:44:17', '2024-03-08 21:44:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905462289', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709903474181', NULL, '2024-03-08 21:44:22', '2024-03-08 21:44:22', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905466756', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709903103144', NULL, '2024-03-08 21:44:26', '2024-03-08 21:44:26', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905473338', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709902846546', NULL, '2024-03-08 21:44:33', '2024-03-08 21:44:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905478985', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709902491136', NULL, '2024-03-08 21:44:38', '2024-03-08 21:44:38', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905484718', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709903474181', NULL, '2024-03-08 21:44:44', '2024-03-08 21:44:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905491871', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709902167810', NULL, '2024-03-08 21:44:51', '2024-03-08 21:44:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905498105', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709901525538', NULL, '2024-03-08 21:44:58', '2024-03-08 21:44:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905502772', '豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。腾蛟起凤，', '1709726632137', '1709901343387', NULL, '2024-03-08 21:45:02', '2024-03-08 21:45:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905521470', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709904846470', NULL, '2024-03-08 21:45:21', '2024-03-08 21:45:21', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905527736', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709904597222', NULL, '2024-03-08 21:45:27', '2024-03-08 21:45:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905535489', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709904147909', NULL, '2024-03-08 21:45:35', '2024-03-08 21:45:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905541021', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709903878483', NULL, '2024-03-08 21:45:41', '2024-03-08 21:45:41', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905546572', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709903824403', NULL, '2024-03-08 21:45:46', '2024-03-08 21:45:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905553636', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709903103144', NULL, '2024-03-08 21:45:53', '2024-03-08 21:45:53', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905556253', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709902846546', NULL, '2024-03-08 21:45:56', '2024-03-08 21:45:56', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905558921', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709901227938', NULL, '2024-03-08 21:45:58', '2024-03-08 21:45:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905565121', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709902167810', NULL, '2024-03-08 21:46:05', '2024-03-08 21:46:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905570939', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709901682371', NULL, '2024-03-08 21:46:10', '2024-03-08 21:46:10', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905579670', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709729818524', NULL, '2024-03-08 21:46:19', '2024-03-08 21:46:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905595486', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709902212933', NULL, '2024-03-08 21:46:35', '2024-03-08 21:46:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905604387', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709901189845', NULL, '2024-03-08 21:46:44', '2024-03-08 21:46:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709905615570', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄', '1709733343047', '1709732612806', NULL, '2024-03-08 21:46:55', '2024-03-08 21:46:55', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709906307789', '　豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云，千里逢迎，高朋满座。', '1709820642242', '1709906040181', NULL, '2024-03-08 21:58:27', '2024-03-08 21:58:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709906319722', '　时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙', '1709820642242', '1709905956013', NULL, '2024-03-08 21:58:39', '2024-03-08 21:58:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709906329442', '　时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层台耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回，桂殿兰宫，即冈峦之体势。披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸艦迷津，青雀黄龙', '1709820642242', '1709906184558', NULL, '2024-03-08 21:58:49', '2024-03-08 21:58:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967462570', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709966991829', NULL, '2024-03-09 14:57:42', '2024-03-09 14:57:42', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967466700', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709902212933', NULL, '2024-03-09 14:57:46', '2024-03-09 14:57:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967469633', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709901682371', NULL, '2024-03-09 14:57:49', '2024-03-09 14:57:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967473233', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709727360760', NULL, '2024-03-09 14:57:53', '2024-03-09 14:57:53', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967479768', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709734139055', NULL, '2024-03-09 14:57:59', '2024-03-09 14:57:59', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967483532', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709901227938', NULL, '2024-03-09 14:58:03', '2024-03-09 14:58:03', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967491549', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709904147909', NULL, '2024-03-09 14:58:11', '2024-03-09 14:58:11', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967497215', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709964765739', NULL, '2024-03-09 14:58:17', '2024-03-09 14:58:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967500836', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709962703249', NULL, '2024-03-09 14:58:20', '2024-03-09 14:58:20', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967506100', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709729514660', NULL, '2024-03-09 14:58:26', '2024-03-09 14:58:26', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967513448', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709964424184', NULL, '2024-03-09 14:58:33', '2024-03-09 14:58:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967516418', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709963889528', NULL, '2024-03-09 14:58:36', '2024-03-09 14:58:36', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967526679', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709906560937', NULL, '2024-03-09 14:58:46', '2024-03-09 14:58:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967530400', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709903474181', NULL, '2024-03-09 14:58:50', '2024-03-09 14:58:50', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967537164', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709903824403', NULL, '2024-03-09 14:58:57', '2024-03-09 14:58:57', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967542382', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709963106823', NULL, '2024-03-09 14:59:02', '2024-03-09 14:59:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967552099', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709901343387', NULL, '2024-03-09 14:59:12', '2024-03-09 14:59:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967557148', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709906184558', NULL, '2024-03-09 14:59:17', '2024-03-09 14:59:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967561797', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709901525538', NULL, '2024-03-09 14:59:21', '2024-03-09 14:59:21', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967568000', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709728442684', NULL, '2024-03-09 14:59:28', '2024-03-09 14:59:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967573547', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709903878483', NULL, '2024-03-09 14:59:33', '2024-03-09 14:59:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967579048', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709729476568', NULL, '2024-03-09 14:59:39', '2024-03-09 14:59:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967586233', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709904597222', NULL, '2024-03-09 14:59:46', '2024-03-09 14:59:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967591632', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙', '1709963638248', '1709904846470', NULL, '2024-03-09 14:59:51', '2024-03-09 14:59:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967806142', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困', '1709963638248', '1709902167810', NULL, '2024-03-09 15:03:26', '2024-03-09 15:03:26', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967813294', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困', '1709963638248', '1709904147909', NULL, '2024-03-09 15:03:33', '2024-03-09 15:03:33', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967825210', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困', '1709963638248', '1709727694829', NULL, '2024-03-09 15:03:45', '2024-03-09 15:03:45', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967843491', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困', '1709963638248', '1709731599134', NULL, '2024-03-09 15:04:03', '2024-03-09 15:04:03', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967904608', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709966991829', NULL, '2024-03-09 15:05:04', '2024-03-09 15:05:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967908688', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709901227938', NULL, '2024-03-09 15:05:08', '2024-03-09 15:05:08', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967911742', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709901682371', NULL, '2024-03-09 15:05:11', '2024-03-09 15:05:11', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967915074', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709734139055', NULL, '2024-03-09 15:05:15', '2024-03-09 15:05:15', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967917892', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709902167810', NULL, '2024-03-09 15:05:17', '2024-03-09 15:05:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967927556', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709904147909', NULL, '2024-03-09 15:05:27', '2024-03-09 15:05:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967937023', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709966796036', NULL, '2024-03-09 15:05:37', '2024-03-09 15:05:37', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967940539', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709728917857', NULL, '2024-03-09 15:05:40', '2024-03-09 15:05:40', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967944137', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709730058428', NULL, '2024-03-09 15:05:44', '2024-03-09 15:05:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967948575', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709731471688', NULL, '2024-03-09 15:05:48', '2024-03-09 15:05:48', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967953711', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709728097869', NULL, '2024-03-09 15:05:53', '2024-03-09 15:05:53', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967960639', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709727158279', NULL, '2024-03-09 15:06:00', '2024-03-09 15:06:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967968385', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709902491136', NULL, '2024-03-09 15:06:08', '2024-03-09 15:06:08', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967986940', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709906560937', NULL, '2024-03-09 15:06:26', '2024-03-09 15:06:26', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967991054', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709903474181', NULL, '2024-03-09 15:06:31', '2024-03-09 15:06:31', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709967996094', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709963106823', NULL, '2024-03-09 15:06:36', '2024-03-09 15:06:36', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968001252', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709962703249', NULL, '2024-03-09 15:06:41', '2024-03-09 15:06:41', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968009353', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709902212933', NULL, '2024-03-09 15:06:49', '2024-03-09 15:06:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968014719', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709902846546', NULL, '2024-03-09 15:06:54', '2024-03-09 15:06:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968025838', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709728442684', NULL, '2024-03-09 15:07:05', '2024-03-09 15:07:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968032184', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709729476568', NULL, '2024-03-09 15:07:12', '2024-03-09 15:07:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968039655', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709901525538', NULL, '2024-03-09 15:07:19', '2024-03-09 15:07:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968044952', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709901732306', NULL, '2024-03-09 15:07:24', '2024-03-09 15:07:24', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968048236', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709906184558', NULL, '2024-03-09 15:07:28', '2024-03-09 15:07:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968054084', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709906040181', NULL, '2024-03-09 15:07:34', '2024-03-09 15:07:34', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968059502', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709733037458', NULL, '2024-03-09 15:07:39', '2024-03-09 15:07:39', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709968068372', '嗟乎！时运不齐，命途多舛(chuǎn)。（呵！各人的时机不同，人生的命运多有不顺。）冯唐易老，李广难封。（冯唐容易衰老，李广难得封侯。）屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时?（使贾谊遭受委屈，贬于长沙，并不是没有圣明的君主，使梁鸿逃匿到齐鲁海滨，难道不是政治昌明的时代？）所', '1709962443377', '1709905956013', NULL, '2024-03-09 15:07:48', '2024-03-09 15:07:48', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969025214', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709968946947', NULL, '2024-03-09 15:23:45', '2024-03-09 15:23:45', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969031329', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709964424184', NULL, '2024-03-09 15:23:51', '2024-03-09 15:23:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969034980', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709963889528', NULL, '2024-03-09 15:23:54', '2024-03-09 15:23:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969044680', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709966991829', NULL, '2024-03-09 15:24:04', '2024-03-09 15:24:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969049965', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709902167810', NULL, '2024-03-09 15:24:09', '2024-03-09 15:24:09', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969053894', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709901227938', NULL, '2024-03-09 15:24:13', '2024-03-09 15:24:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969064198', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709964765739', NULL, '2024-03-09 15:24:24', '2024-03-09 15:24:24', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969070580', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709729818524', NULL, '2024-03-09 15:24:30', '2024-03-09 15:24:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969076695', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709962703249', NULL, '2024-03-09 15:24:36', '2024-03-09 15:24:36', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969085408', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709966796036', NULL, '2024-03-09 15:24:45', '2024-03-09 15:24:45', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969089509', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709968992295', NULL, '2024-03-09 15:24:49', '2024-03-09 15:24:49', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969094163', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709731471688', NULL, '2024-03-09 15:24:54', '2024-03-09 15:24:54', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969105694', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709905956013', NULL, '2024-03-09 15:25:05', '2024-03-09 15:25:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969114511', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709906040181', NULL, '2024-03-09 15:25:14', '2024-03-09 15:25:14', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969119612', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709731599134', NULL, '2024-03-09 15:25:19', '2024-03-09 15:25:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969127061', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709906560937', NULL, '2024-03-09 15:25:27', '2024-03-09 15:25:27', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969130964', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709903474181', NULL, '2024-03-09 15:25:30', '2024-03-09 15:25:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969140627', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709732612806', NULL, '2024-03-09 15:25:40', '2024-03-09 15:25:40', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709969147078', '老当益壮，宁移白首之心；穷且益坚，不坠青云之志。（年纪虽然老了，但志气应当更加旺盛，怎能在白头时改变心情？境遇虽然困苦，但节操应当更加坚定，决不能抛弃自己的凌云壮志。）酌贪泉而觉爽，处涸辙(hé zhé)以犹欢。', '1709968338867', '1709727694829', NULL, '2024-03-09 15:25:47', '2024-03-09 15:25:47', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972182168', '没章法能直接斩首战术吃掉坂田联队？没章法能在抗战时期打攻城战？没章法能让楚云飞吃哑巴亏撤出两个营？李云龙微操很牛逼的好吧，他和丁伟是完全不同的人才，李云龙是剑丁伟是用剑的手，缺一不可', '1709820642242', '1709901682371', NULL, '2024-03-09 16:16:22', '2024-03-09 16:16:22', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972226980', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦', '1709820642242', '1709901682371', NULL, '2024-03-09 16:17:06', '2024-03-09 16:17:06', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972255412', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709970879644', NULL, '2024-03-09 16:17:35', '2024-03-09 16:17:35', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972258478', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709729818524', NULL, '2024-03-09 16:17:38', '2024-03-09 16:17:38', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972262179', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709962703249', NULL, '2024-03-09 16:17:42', '2024-03-09 16:17:42', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972266512', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709729514660', NULL, '2024-03-09 16:17:46', '2024-03-09 16:17:46', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972271066', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709964765739', NULL, '2024-03-09 16:17:51', '2024-03-09 16:17:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972275960', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709968992295', NULL, '2024-03-09 16:17:55', '2024-03-09 16:17:55', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972278463', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709731471688', NULL, '2024-03-09 16:17:58', '2024-03-09 16:17:58', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972280710', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709728917857', NULL, '2024-03-09 16:18:00', '2024-03-09 16:18:00', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972284263', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709730058428', NULL, '2024-03-09 16:18:04', '2024-03-09 16:18:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972287576', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709966796036', NULL, '2024-03-09 16:18:07', '2024-03-09 16:18:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972295148', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709728097869', NULL, '2024-03-09 16:18:15', '2024-03-09 16:18:15', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972299729', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709902491136', NULL, '2024-03-09 16:18:19', '2024-03-09 16:18:19', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972310847', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709968946947', NULL, '2024-03-09 16:18:30', '2024-03-09 16:18:30', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972317017', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709731599134', NULL, '2024-03-09 16:18:37', '2024-03-09 16:18:37', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972320697', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709963889528', NULL, '2024-03-09 16:18:40', '2024-03-09 16:18:40', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972325980', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709901189845', NULL, '2024-03-09 16:18:45', '2024-03-09 16:18:45', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972331079', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709906560937', NULL, '2024-03-09 16:18:51', '2024-03-09 16:18:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972335963', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709903474181', NULL, '2024-03-09 16:18:55', '2024-03-09 16:18:55', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972345598', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709903824403', NULL, '2024-03-09 16:19:05', '2024-03-09 16:19:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972352966', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709904846470', NULL, '2024-03-09 16:19:12', '2024-03-09 16:19:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972357696', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势', '1709968523870', '1709904597222', NULL, '2024-03-09 16:19:17', '2024-03-09 16:19:17', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972404382', '1709728495272', '1709968523870', '1709966991829', NULL, '2024-03-09 16:20:04', '2024-03-09 16:20:04', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972406968', '1709728495272', '1709968523870', '1709902167810', NULL, '2024-03-09 16:20:06', '2024-03-09 16:20:06', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972412932', '1709728495272', '1709968523870', '1709963106823', NULL, '2024-03-09 16:20:12', '2024-03-09 16:20:12', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972422299', '1709728495272', '1709968523870', '1709905956013', NULL, '2024-03-09 16:20:22', '2024-03-09 16:20:22', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972429883', '1709728495272', '1709968523870', '1709904147909', NULL, '2024-03-09 16:20:29', '2024-03-09 16:20:29', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972456565', '之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之', '1709968523870', '1709727360760', NULL, '2024-03-09 16:20:56', '2024-03-09 16:20:56', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972462550', '之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之', '1709968523870', '1709902846546', NULL, '2024-03-09 16:21:02', '2024-03-09 16:21:02', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972467680', '之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之', '1709968523870', '1709902212933', NULL, '2024-03-09 16:21:07', '2024-03-09 16:21:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972474700', '之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之', '1709968523870', '1709729476568', NULL, '2024-03-09 16:21:14', '2024-03-09 16:21:14', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1709972482485', '之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之', '1709968523870', '1709728442684', NULL, '2024-03-09 16:21:22', '2024-03-09 16:21:22', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710049213169', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体', '1709726632137', '1709968992295', NULL, '2024-03-10 13:40:13', '2024-03-10 13:40:13', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710049267182', '墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词', '1709726632137', '1709905956013', NULL, '2024-03-10 13:41:07', '2024-03-10 13:41:07', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710050254419', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体', '1709820642242', '1710049033545', NULL, '2024-03-10 13:57:34', '2024-03-10 13:57:34', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710050277480', '披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰弥津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦', '1709968338867', '1710049033545', NULL, '2024-03-10 13:57:57', '2024-03-10 13:57:57', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710051371979', '见天是个好日子', '1709726632137', '1709903103144', NULL, '2024-03-10 14:16:11', '2024-03-10 14:16:11', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710052108869', '真好听', '1709726632137', '1709968946947', NULL, '2024-03-10 14:28:28', '2024-03-10 14:28:28', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710052745859', '太爱这首歌了', '1709726632137', '1710049033545', NULL, '2024-03-10 14:39:05', '2024-03-10 14:39:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1710056216849', '我觉得很有创意', '1709726632137', NULL, NULL, '2024-03-10 15:36:56', '2024-03-10 15:36:56', '1709971184129');
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714486787235', '11111', '1709726632137', NULL, '1709969031329', '2024-04-30 22:19:47', '2024-04-30 22:19:47', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714545804057', '这是神马歌曲', '1714543289857', '1714545759293', NULL, '2024-05-01 14:43:24', '2024-05-01 14:43:24', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714545811745', '这你也不知道？', '1714543289857', NULL, '1714545804057', '2024-05-01 14:43:31', '2024-05-01 14:43:31', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714545820978', '吃屎吧', '1714543289857', NULL, '1714545811745', '2024-05-01 14:43:40', '2024-05-01 14:43:40', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714546544867', '物是人非了  爱转角终究还是遇见了时间管理大师', '1714543289857', '1714546475533', NULL, '2024-05-01 14:55:44', '2024-05-01 14:55:44', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714546568563', '爱转角遇见了谁 是否有爱情的美 爱转角以后的街 能不能有我来陪 爱转角遇见了谁 是否不让你流泪', '1714543289857', '1714546475533', NULL, '2024-05-01 14:56:08', '2024-05-01 14:56:08', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714552617185', '哈哈哈哈哈，今天终于失去了你', '1709726632137', NULL, NULL, '2024-05-01 16:36:57', '2024-05-01 16:36:57', '1714552606427');
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714632351581', '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之', '1709726632137', '1714545759293', NULL, '2024-05-02 14:45:51', '2024-05-02 14:45:51', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714632365083', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风', '1709726632137', '1714545759293', NULL, '2024-05-02 14:46:05', '2024-05-02 14:46:05', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1714632572160', '至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风', '1709726632137', '1709903474181', NULL, '2024-05-02 14:49:32', '2024-05-02 14:49:32', NULL);
INSERT INTO `comment` (`id`, `content`, `userId`, `vId`, `replyId`, `createTime`, `updateTime`, `mId`) VALUES ('1735911538178', '“伍岚正和程艾影从上海到武汉，他们要坐十天马车三天两夜的轮船，泥路上艾影含着糖 靠着岚正的肩膀', '1709726632137', '1735306697868', NULL, '2025-01-03 21:38:58', '2025-01-03 21:38:58', NULL);
COMMIT;

-- ----------------------------
-- Table structure for dm
-- ----------------------------
DROP TABLE IF EXISTS `dm`;
CREATE TABLE `dm` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `text` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `time` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  CONSTRAINT `dm_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of dm
-- ----------------------------
BEGIN;
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049088394', '支持弹幕速度、显示时长、打开/暂停弹幕等配置和设置', '18540.79999998212', '1709970879644', '1709726632137', '2024-12-24 22:04:48', '2024-12-24 22:04:48');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049121724', '因为弹幕插件不是很常用且代码量较大', '51744.59999999404', '1709970879644', '1709726632137', '2024-12-24 22:05:21', '2024-12-24 22:05:21');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049237669', '哈哈哈哈', '168823.19999998808', '1709970879644', '1709726632137', '2024-12-24 22:07:17', '2024-12-24 22:07:17');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049293943', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路', '224870.09999999404', '1709970879644', '1709726632137', '2024-12-24 22:08:13', '2024-12-24 22:08:13');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049340662', '时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路', '271822.59999999404', '1709970879644', '1709726632137', '2024-12-24 22:09:00', '2024-12-24 22:09:00');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049518648', '潦水尽而寒潭清，烟光凝而暮山紫', '12049.194', '1709970879644', '1709726632137', '2024-12-24 22:11:58', '2024-12-24 22:11:58');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735049541322', '哈哈哈哈哈哈', '34627.429', '1709970879644', '1709726632137', '2024-12-24 22:12:21', '2024-12-24 22:12:21');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299822666', '我爱赵雷', '84344.708', '1714549541546', '1709726632137', '2024-12-27 19:43:42', '2024-12-27 19:43:42');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299832644', '我真的很爱赵雷', '94438.813', '1714549541546', '1709726632137', '2024-12-27 19:43:52', '2024-12-27 19:43:52');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299843451', '明天听赵雷', '105062.567', '1714549541546', '1709726632137', '2024-12-27 19:44:03', '2024-12-27 19:44:03');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299877166', '永远都像初次见你那样使我心荡漾', '138796.549', '1714549541546', '1709726632137', '2024-12-27 19:44:37', '2024-12-27 19:44:37');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299878821', '永远都像初次见你那样使我心荡漾', '140391.16', '1714549541546', '1709726632137', '2024-12-27 19:44:38', '2024-12-27 19:44:38');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299903767', '回望故乡的月亮', '165360.25699999998', '1714549541546', '1709726632137', '2024-12-27 19:45:03', '2024-12-27 19:45:03');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299961532', '没有道理，褶皱的信成飞羽', '223281.98', '1714549541546', '1709726632137', '2024-12-27 19:46:01', '2024-12-27 19:46:01');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299989538', '他们要坐十天马车三天两夜的轮船', '251172.957', '1714549541546', '1709726632137', '2024-12-27 19:46:29', '2024-12-27 19:46:29');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735299996843', '马车经过村庄 石路颠簸不渝的情肠', '258610.24500000002', '1714549541546', '1709726632137', '2024-12-27 19:46:36', '2024-12-27 19:46:36');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300005805', '路海长 青夜旷 越过群山追斜阳', '267375.62100000004', '1714549541546', '1709726632137', '2024-12-27 19:46:45', '2024-12-27 19:46:45');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300010130', '路海长 青夜旷 越过群山追斜阳', '87034.58600000001', '1714549541546', '1709726632137', '2024-12-27 19:46:50', '2024-12-27 19:46:50');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300024109', '没有奇迹 没有惊喜 尘埃里花不会哭泣', '100846.276', '1714549541546', '1709726632137', '2024-12-27 19:47:04', '2024-12-27 19:47:04');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300044096', '路海长 青夜旷 越过群山追斜阳', '120769.239', '1714549541546', '1709726632137', '2024-12-27 19:47:24', '2024-12-27 19:47:24');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300053194', '这是一条必经的路 没有指引出口的光', '130066.04', '1714549541546', '1709726632137', '2024-12-27 19:47:33', '2024-12-27 19:47:33');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300069239', '漫山遍野你的脸庞 唯有遗忘是最漫长', '146003.202', '1714549541546', '1709726632137', '2024-12-27 19:47:49', '2024-12-27 19:47:49');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300098428', '雨水冲不掉常德路上爬满蛛网的门窗', '175221.568', '1714549541546', '1709726632137', '2024-12-27 19:48:18', '2024-12-27 19:48:18');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300116762', '梦里回到他的身旁 蜜语中风不再凉', '193550.239', '1714549541546', '1709726632137', '2024-12-27 19:48:36', '2024-12-27 19:48:36');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300128402', '一路望 跌跌撞 午夜流星何去何往', '205236.989', '1714549541546', '1709726632137', '2024-12-27 19:48:48', '2024-12-27 19:48:48');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300155511', '泥路上艾影含着糖 靠着岚正的肩膀', '230248.363', '1714549541546', '1709726632137', '2024-12-27 19:49:15', '2024-12-27 19:49:15');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300166938', '拨开面纱回望故乡 只见潮湿的月亮', '241671.255', '1714549541546', '1709726632137', '2024-12-27 19:49:26', '2024-12-27 19:49:26');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300179646', '路海长 青夜旷 越过群山追斜阳', '254420.70799999998', '1714549541546', '1709726632137', '2024-12-27 19:49:39', '2024-12-27 19:49:39');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300203888', '伍岚正和程艾影从上海到武汉', '278591.464', '1714549541546', '1709726632137', '2024-12-27 19:50:03', '2024-12-27 19:50:03');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300227850', '泥路上艾影含着糖 靠着岚正的肩膀', '138778.02', '1714549541546', '1709726632137', '2024-12-27 19:50:27', '2024-12-27 19:50:27');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300260391', '揣着多天来的期盼', '171451.168', '1714549541546', '1709726632137', '2024-12-27 19:51:00', '2024-12-27 19:51:00');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300267114', '如果我不能再次把你遇见', '178090.994', '1714549541546', '1709726632137', '2024-12-27 19:51:07', '2024-12-27 19:51:07');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300288010', '我会日夜期盼', '199074.187', '1714549541546', '1709726632137', '2024-12-27 19:51:28', '2024-12-27 19:51:28');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300325722', '在这隐忍的夏天 冰淇淋里面', '21081.515', '1714549541546', '1709726632137', '2024-12-27 19:52:05', '2024-12-27 19:52:05');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300385524', '你的耳机里到底听的是什么', '82255.993', '1714549541546', '1709726632137', '2024-12-27 19:53:05', '2024-12-27 19:53:05');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300495607', '谁愿与孤单为伴', '220999.369', '1714549541546', '1709726632137', '2024-12-27 19:54:55', '2024-12-27 19:54:55');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300561811', '只好写初识游泳馆 大厅的里面', '41987.547', '1714549541546', '1709726632137', '2024-12-27 19:56:01', '2024-12-27 19:56:01');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300589694', '你的耳机里到底听的是什么', '69877.537', '1714549541546', '1709726632137', '2024-12-27 19:56:29', '2024-12-27 19:56:29');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300601646', '我想发寻你的传单', '81830.68000000001', '1714549541546', '1709726632137', '2024-12-27 19:56:41', '2024-12-27 19:56:41');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300612968', '只好写初识游泳馆 大厅的里面', '92986.365', '1714549541546', '1709726632137', '2024-12-27 19:56:52', '2024-12-27 19:56:52');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300626638', '我在红绿灯下面等了你很久', '106799.185', '1714549541546', '1709726632137', '2024-12-27 19:57:06', '2024-12-27 19:57:06');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300640540', '我懂女孩子是矜持的', '3609.8379999999997', '1714549541546', '1709726632137', '2024-12-27 19:57:20', '2024-12-27 19:57:20');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300667268', '我猜在南锣的里面 中戏的门前', '4379.344999999999', '1709729818524', '1709726632137', '2024-12-27 19:57:47', '2024-12-27 19:57:47');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300673793', '我想现在就见到你', '11020.58', '1709729818524', '1709726632137', '2024-12-27 19:57:53', '2024-12-27 19:57:53');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300681102', '可是我没有你的照片', '18192.146999999997', '1709729818524', '1709726632137', '2024-12-27 19:58:01', '2024-12-27 19:58:01');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300687316', '我猜在南锣的里面 中戏的门前', '24565.945', '1709729818524', '1709726632137', '2024-12-27 19:58:07', '2024-12-27 19:58:07');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300693765', '或许你会再次出现', '30942.077999999998', '1709729818524', '1709726632137', '2024-12-27 19:58:13', '2024-12-27 19:58:13');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300699378', '我猜在南锣的里面 书店的门前', '36519.862', '1709729818524', '1709726632137', '2024-12-27 19:58:19', '2024-12-27 19:58:19');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300705854', '握着啤酒等你出现', '43161.068999999996', '1709729818524', '1709726632137', '2024-12-27 19:58:25', '2024-12-27 19:58:25');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300711352', '你也等待我的出现', '48472.87', '1709729818524', '1709726632137', '2024-12-27 19:58:31', '2024-12-27 19:58:31');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300720118', '我与你会注定擦肩', '57238.875', '1709729818524', '1709726632137', '2024-12-27 19:58:40', '2024-12-27 19:58:40');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300728850', '揣着多天来的期盼揣着多天来的期盼', '66082.516', '1709729818524', '1709726632137', '2024-12-27 19:58:48', '2024-12-27 19:58:48');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300736255', '走过初识你的地点', '7025.754', '1709729818524', '1709726632137', '2024-12-27 19:58:56', '2024-12-27 19:58:56');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300745306', '如果我不能再次把你遇见', '16057.326', '1709729818524', '1709726632137', '2024-12-27 19:59:05', '2024-12-27 19:59:05');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300754517', '我会日夜期盼', '25087.532', '1709729818524', '1709726632137', '2024-12-27 19:59:14', '2024-12-27 19:59:14');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300760997', '我不是伟岸的正经人', '31729.619', '1709729818524', '1709726632137', '2024-12-27 19:59:20', '2024-12-27 19:59:20');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300767729', '在这隐忍的夏天 冰淇淋里面', '38370.564', '1709729818524', '1709726632137', '2024-12-27 19:59:27', '2024-12-27 19:59:27');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300775422', '谁愿与孤单为伴', '46072.752', '1709729818524', '1709726632137', '2024-12-27 19:59:35', '2024-12-27 19:59:35');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300781455', '我的心情总是失落', '52182.377', '1709729818524', '1709726632137', '2024-12-27 19:59:41', '2024-12-27 19:59:41');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300788144', '我懂女孩子是矜持的', '58822.829', '1709729818524', '1709726632137', '2024-12-27 19:59:48', '2024-12-27 19:59:48');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300795695', '你的耳机里到底听的是什么', '66082.516', '1709729818524', '1709726632137', '2024-12-27 19:59:55', '2024-12-27 19:59:55');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300813495', '有没有我熟悉的歌', '5601.849999999999', '1709729818524', '1709726632137', '2024-12-27 20:00:13', '2024-12-27 20:00:13');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300823542', '我想发寻你的传单', '15430.133', '1709729818524', '1709726632137', '2024-12-27 20:00:23', '2024-12-27 20:00:23');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300831650', '只好写初识游泳馆 大厅的里面', '23663.763', '1709729818524', '1709726632137', '2024-12-27 20:00:31', '2024-12-27 20:00:31');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300843061', '康铭旋转门转不休', '3460.726', '1709729818524', '1709726632137', '2024-12-27 20:00:43', '2024-12-27 20:00:43');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300852855', '我在红绿灯下面等了你很久', '3737.811', '1709729818524', '1709726632137', '2024-12-27 20:00:52', '2024-12-27 20:00:52');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300865482', '我不是油嘴滑舌的人', '16221.978', '1709729818524', '1709726632137', '2024-12-27 20:01:05', '2024-12-27 20:01:05');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300871485', '布满皱纹的城市都在因为你', '22332.016', '1709729818524', '1709726632137', '2024-12-27 20:01:11', '2024-12-27 20:01:11');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300878530', '而变得越来越青春', '29237.849000000002', '1709729818524', '1709726632137', '2024-12-27 20:01:18', '2024-12-27 20:01:18');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300885980', '你的耳机里到底听的是什么', '36675.69', '1709729818524', '1709726632137', '2024-12-27 20:01:25', '2024-12-27 20:01:25');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300894282', '我想现在就见到你', '45175.089', '1709729818524', '1709726632137', '2024-12-27 20:01:34', '2024-12-27 20:01:34');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300900970', '只好写初识游泳馆 大厅的里面', '51816.517', '1709729818524', '1709726632137', '2024-12-27 20:01:40', '2024-12-27 20:01:40');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300914965', '我猜在19岁这一天 青春的一半', '65894.775', '1709729818524', '1709726632137', '2024-12-27 20:01:54', '2024-12-27 20:01:54');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300918778', '我猜在19岁这一天 青春的一半', '3030.3810000000003', '1709729818524', '1709726632137', '2024-12-27 20:01:58', '2024-12-27 20:01:58');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300923986', '我猜在19岁这一天 青春的一半', '8342.541000000001', '1709729818524', '1709726632137', '2024-12-27 20:02:03', '2024-12-27 20:02:03');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300941396', '伍岚正和程艾影从上海到武汉', '3167.022', '1709729818524', '1709726632137', '2024-12-27 20:02:21', '2024-12-27 20:02:21');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300948382', '们要坐十天马车三天两夜的轮', '10339.621', '1709729818524', '1709726632137', '2024-12-27 20:02:28', '2024-12-27 20:02:28');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300956646', '马车经过村庄 石路颠簸不渝的情肠', '2778.008', '1709729818524', '1709726632137', '2024-12-27 20:02:36', '2024-12-27 20:02:36');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300964691', '路海长 青夜旷 越过群山追斜阳', '2502.771', '1709729818524', '1709726632137', '2024-12-27 20:02:44', '2024-12-27 20:02:44');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300975144', '拨开面纱回望故乡 只见潮湿的月亮', '13128.574999999999', '1709729818524', '1709726632137', '2024-12-27 20:02:55', '2024-12-27 20:02:55');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300984193', '梦里回到他的身旁 蜜语中风不再凉', '22160.407', '1709729818524', '1709726632137', '2024-12-27 20:03:04', '2024-12-27 20:03:04');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735300992984', '永远都像初次见你那样 使我心荡漾', '30926.018', '1709729818524', '1709726632137', '2024-12-27 20:03:12', '2024-12-27 20:03:12');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301002434', '没有奇迹 没有惊喜 尘埃里花不会哭泣', '40222.37899999999', '1709729818524', '1709726632137', '2024-12-27 20:03:22', '2024-12-27 20:03:22');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301011060', '一路望 跌跌撞 午夜流星何去何往', '48988.252', '1709729818524', '1709726632137', '2024-12-27 20:03:31', '2024-12-27 20:03:31');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301018050', '路海长 青夜旷 越过群山追斜阳', '55894.025', '1709729818524', '1709726632137', '2024-12-27 20:03:38', '2024-12-27 20:03:38');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301031589', '有奇迹 没有惊喜 尘埃里花不', '2769.4809999999998', '1709729818524', '1709726632137', '2024-12-27 20:03:51', '2024-12-27 20:03:51');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301101484', '有奇迹 没有惊喜 尘埃里花不', '49409.006', '1714549541546', '1709726632137', '2024-12-27 20:05:01', '2024-12-27 20:05:01');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301106351', '有奇迹 没有惊喜 尘埃里花不', '54457.187', '1714549541546', '1709726632137', '2024-12-27 20:05:06', '2024-12-27 20:05:06');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301113948', '有奇迹 没有惊喜 尘埃里花不', '3842.8759999999997', '1709729818524', '1709726632137', '2024-12-27 20:05:13', '2024-12-27 20:05:13');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301142608', '有奇迹 没有惊喜 尘埃里花不', '32529.502', '1709729818524', '1709726632137', '2024-12-27 20:05:42', '2024-12-27 20:05:42');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301165930', '111111111111111111111', '55905.242', '1709729818524', '1709726632137', '2024-12-27 20:06:05', '2024-12-27 20:06:05');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301223586', '11111', '3291.703', '1709729818524', '1709726632137', '2024-12-27 20:07:03', '2024-12-27 20:07:03');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301236916', '22222222222', '16572.584000000003', '1709729818524', '1709726632137', '2024-12-27 20:07:16', '2024-12-27 20:07:16');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301286088', '有奇迹 没有惊喜 尘埃里花不', '4889.401', '1709968946947', '1709726632137', '2024-12-27 20:08:06', '2024-12-27 20:08:06');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301293315', '1111111111111', '12061.478', '1709968946947', '1709726632137', '2024-12-27 20:08:13', '2024-12-27 20:08:13');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301298148', '22222222222', '17107.894999999997', '1709968946947', '1709726632137', '2024-12-27 20:08:18', '2024-12-27 20:08:18');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301303033', '333333333', '21888.985', '1709968946947', '1709726632137', '2024-12-27 20:08:23', '2024-12-27 20:08:23');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301312038', '55555555', '30921.001', '1709968946947', '1709726632137', '2024-12-27 20:08:32', '2024-12-27 20:08:32');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301321721', '666', '40482.091', '1709968946947', '1709726632137', '2024-12-27 20:08:41', '2024-12-27 20:08:41');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301334393', '111111', '55705.804000000004', '1714549541546', '1709726632137', '2024-12-27 20:08:54', '2024-12-27 20:08:54');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301367143', 'gggggggggggggg', '27731.538', '1709729818524', '1709726632137', '2024-12-27 20:09:27', '2024-12-27 20:09:27');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735301397099', '2222222', '57747.231999999996', '1709729818524', '1709726632137', '2024-12-27 20:09:57', '2024-12-27 20:09:57');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735302348100', '他厉害了', '119544.14300000001', '1709728097869', '1709726632137', '2024-12-27 20:25:48', '2024-12-27 20:25:48');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735310783903', '罗志祥，我爱你', '12606.239', '1714546475533', '1709726632137', '2024-12-27 22:46:23', '2024-12-27 22:46:23');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735905357021', '啊啊啊啊，南方姑娘', '15785.339', '1709728917857', '1709726632137', '2025-01-03 19:55:57', '2025-01-03 19:55:57');
INSERT INTO `dm` (`id`, `text`, `time`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1735905400371', '我们好像在哪见过', '11815.367999999999', '1709902491136', '1709726632137', '2025-01-03 19:56:40', '2025-01-03 19:56:40');
COMMIT;

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `picUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vioUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `originalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `filename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `size` int DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of file
-- ----------------------------
BEGIN;
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727084908', 'http://localhost:8888/image/1709727084908', NULL, 'fate.avif', 'image/avif', './upload/image', '1709727084907.avif', 75142, '2024-03-06 20:11:24', '2024-03-06 20:11:24');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727063159', NULL, 'http://localhost:8888/video/911da967783b495a411667a225a81ea0.m3u8', 'fate.mp4', NULL, './upload/video/', '911da967783b495a411667a225a81ea0.m3u8', NULL, '2024-03-06 20:12:30', '2024-03-06 20:12:30');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727209958', 'http://localhost:8888/image/1709727209958', NULL, 'i do.avif', 'image/avif', './upload/image', '1709727209957.avif', 67359, '2024-03-06 20:13:29', '2024-03-06 20:13:29');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727194304', NULL, 'http://localhost:8888/video/7fdd5f51b488983cfee8f4e5ef89de89.m3u8', 'i do.mp4', NULL, './upload/video/', '7fdd5f51b488983cfee8f4e5ef89de89.m3u8', NULL, '2024-03-06 20:13:32', '2024-03-06 20:13:32');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727346388', 'http://localhost:8888/image/1709727346388', NULL, 'take me higher.avif', 'image/avif', './upload/image', '1709727346386.avif', 82554, '2024-03-06 20:15:46', '2024-03-06 20:15:46');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727327479', NULL, 'http://localhost:8888/video/f23fc2e510c8b8ae46468acde5f681f4.m3u8', 'take me higer.mp4', NULL, './upload/video/', 'f23fc2e510c8b8ae46468acde5f681f4.m3u8', NULL, '2024-03-06 20:15:52', '2024-03-06 20:15:52');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727454540', 'http://localhost:8888/image/1709727454540', NULL, 'love.avif', 'image/avif', './upload/image', '1709727454538.avif', 75263, '2024-03-06 20:17:34', '2024-03-06 20:17:34');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727442557', NULL, 'http://localhost:8888/video/2abff7b18f4f4d67c718b7b7de90e1a2.m3u8', 'love.mp4', NULL, './upload/video/', '2abff7b18f4f4d67c718b7b7de90e1a2.m3u8', NULL, '2024-03-06 20:21:31', '2024-03-06 20:21:31');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727722769', 'http://localhost:8888/image/1709727722769', NULL, 'as if.avif', 'image/avif', './upload/image', '1709727722763.avif', 114131, '2024-03-06 20:22:02', '2024-03-06 20:22:02');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709727713740', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'as if.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-06 20:27:14', '2024-03-06 20:27:14');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728088344', 'http://localhost:8888/image/1709728088344', NULL, '音乐.jpeg', 'image/jpeg', './upload/image', '1709728088342.jpeg', 72696, '2024-03-06 20:28:08', '2024-03-06 20:28:08');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728395846', 'http://localhost:8888/image/1709728395846', NULL, 'cluo.avif', 'image/avif', './upload/image', '1709728395840.avif', 70224, '2024-03-06 20:33:15', '2024-03-06 20:33:15');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728385211', NULL, 'http://localhost:8888/video/d96fd0f41e801a507050cac82e717ac2.m3u8', 'c luo.mp4', NULL, './upload/video/', 'd96fd0f41e801a507050cac82e717ac2.m3u8', NULL, '2024-03-06 20:33:48', '2024-03-06 20:33:48');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728740338', 'http://localhost:8888/image/1709728740338', NULL, '北极熊.avif', 'image/avif', './upload/image', '1709728740338.avif', 47391, '2024-03-06 20:39:00', '2024-03-06 20:39:00');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728728868', NULL, 'http://localhost:8888/video/8fa6e08cc20f7f644f6725ed56a9f1e5.m3u8', '北极熊.mp4', NULL, './upload/video/', '8fa6e08cc20f7f644f6725ed56a9f1e5.m3u8', NULL, '2024-03-06 20:39:47', '2024-03-06 20:39:47');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728895778', 'http://localhost:8888/image/1709728895778', NULL, '南方姑娘.avif', 'image/avif', './upload/image', '1709728895777.avif', 72070, '2024-03-06 20:41:35', '2024-03-06 20:41:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709728886852', NULL, 'http://localhost:8888/video/9531f87a275fc248cf2ad6e54035323d.m3u8', '南方姑娘.mp4', NULL, './upload/video/', '9531f87a275fc248cf2ad6e54035323d.m3u8', NULL, '2024-03-06 20:41:49', '2024-03-06 20:41:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729313193', 'http://localhost:8888/image/1709729313193', NULL, '足坛.avif', 'image/avif', './upload/image', '1709729313193.avif', 112420, '2024-03-06 20:48:33', '2024-03-06 20:48:33');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729304313', NULL, 'http://localhost:8888/video/2a067ef04875d9eec1cc452462b7edb8.m3u8', '足坛.mp4', NULL, './upload/video/', '2a067ef04875d9eec1cc452462b7edb8.m3u8', NULL, '2024-03-06 20:50:49', '2024-03-06 20:50:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729498103', 'http://localhost:8888/image/1709729498103', NULL, '童年.avif', 'image/avif', './upload/image', '1709729498101.avif', 98242, '2024-03-06 20:51:38', '2024-03-06 20:51:38');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729488867', NULL, 'http://localhost:8888/video/99ddec751eebd50bbb17c5f58539531c.m3u8', '童年.mp4', NULL, './upload/video/', '99ddec751eebd50bbb17c5f58539531c.m3u8', NULL, '2024-03-06 20:51:51', '2024-03-06 20:51:51');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729803976', 'http://localhost:8888/image/1709729803976', NULL, '童年ni.avif', 'image/avif', './upload/image', '1709729803974.avif', 111032, '2024-03-06 20:56:43', '2024-03-06 20:56:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729792879', NULL, 'http://localhost:8888/video/9f4d2490867461d1908f57a5f2301dbd.m3u8', '童年你别走.mp4', NULL, './upload/video/', '9f4d2490867461d1908f57a5f2301dbd.m3u8', NULL, '2024-03-06 20:56:57', '2024-03-06 20:56:57');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729966368', 'http://localhost:8888/image/1709729966368', NULL, '向云端.avif', 'image/avif', './upload/image', '1709729966366.avif', 63649, '2024-03-06 20:59:26', '2024-03-06 20:59:26');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709729945136', NULL, 'http://localhost:8888/video/a90e50e71a86da5b625975c657fed477.m3u8', '向云端.mp4', NULL, './upload/video/', 'a90e50e71a86da5b625975c657fed477.m3u8', NULL, '2024-03-06 21:00:43', '2024-03-06 21:00:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730148028', 'http://localhost:8888/image/1709730148028', NULL, '鲑鱼.avif', 'image/avif', './upload/image', '1709730148023.avif', 87435, '2024-03-06 21:02:28', '2024-03-06 21:02:28');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730233852', 'http://localhost:8888/image/1709730233852', NULL, '音乐.jpeg', 'image/jpeg', './upload/image', '1709730233851.jpeg', 79925, '2024-03-06 21:03:53', '2024-03-06 21:03:53');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730281330', 'http://localhost:8888/image/1709730281330', NULL, '1.jpeg', 'image/jpeg', './upload/image', '1709730281329.jpeg', 46914, '2024-03-06 21:04:41', '2024-03-06 21:04:41');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730325531', 'http://localhost:8888/image/1709730325531', NULL, '2.jpeg', 'image/jpeg', './upload/image', '1709730325528.jpeg', 84337, '2024-03-06 21:05:25', '2024-03-06 21:05:25');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730434023', 'http://localhost:8888/image/1709730434023', NULL, '民谣.jpeg', 'image/jpeg', './upload/image', '1709730434002.jpeg', 72325, '2024-03-06 21:07:14', '2024-03-06 21:07:14');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709730138470', NULL, 'http://localhost:8888/video/fa29bd296dca6cd4647a03eba0587a18.m3u8', '鲑鱼.mp4', NULL, './upload/video/', 'fa29bd296dca6cd4647a03eba0587a18.m3u8', NULL, '2024-03-06 21:11:04', '2024-03-06 21:11:04');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731003611', 'http://localhost:8888/image/1709731003611', NULL, '大雨.webp', 'image/webp', './upload/image', '1709731003610.webp', 217909, '2024-03-06 21:16:43', '2024-03-06 21:16:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731148579', 'http://localhost:8888/image/1709731148579', NULL, '体育1.webp', 'image/webp', './upload/image', '1709731148576.webp', 299273, '2024-03-06 21:19:08', '2024-03-06 21:19:08');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731222196', 'http://localhost:8888/image/1709731222196', NULL, '音乐1.jpeg', 'image/jpeg', './upload/image', '1709731222195.jpeg', 245845, '2024-03-06 21:20:22', '2024-03-06 21:20:22');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731378770', 'http://localhost:8888/image/1709731378770', NULL, '挪威.avif', 'image/avif', './upload/image', '1709731378769.avif', 95234, '2024-03-06 21:22:58', '2024-03-06 21:22:58');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731369255', NULL, 'http://localhost:8888/video/cc44ce47a59d39148516e9469e978e48.m3u8', '挪威.mp4', NULL, './upload/video/', 'cc44ce47a59d39148516e9469e978e48.m3u8', NULL, '2024-03-06 21:24:29', '2024-03-06 21:24:29');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731575235', 'http://localhost:8888/image/1709731575235', NULL, 'everywhere we go.avif', 'image/avif', './upload/image', '1709731575234.avif', 83655, '2024-03-06 21:26:15', '2024-03-06 21:26:15');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709731563902', NULL, 'http://localhost:8888/video/00582a6b244d3bd8e578cfc4d79569d7.m3u8', 'everywhere we go.mp4', NULL, './upload/video/', '00582a6b244d3bd8e578cfc4d79569d7.m3u8', NULL, '2024-03-06 21:26:36', '2024-03-06 21:26:36');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732226978', 'http://localhost:8888/image/1709732226978', NULL, '赌神.avif', 'image/avif', './upload/image', '1709732226976.avif', 61220, '2024-03-06 21:37:06', '2024-03-06 21:37:06');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732217183', NULL, 'http://localhost:8888/video/d45f63f2da367f2902e25c38d9c5474c.m3u8', '赌神.mp4', NULL, './upload/video/', 'd45f63f2da367f2902e25c38d9c5474c.m3u8', NULL, '2024-03-06 21:39:25', '2024-03-06 21:39:25');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732396149', 'http://localhost:8888/image/1709732396149', NULL, 'butter.avif', 'image/avif', './upload/image', '1709732396147.avif', 97172, '2024-03-06 21:39:56', '2024-03-06 21:39:56');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732382800', NULL, 'http://localhost:8888/video/3be41e7462e84ada61bd0f955dd32f7e.m3u8', 'butter.mp4', NULL, './upload/video/', '3be41e7462e84ada61bd0f955dd32f7e.m3u8', NULL, '2024-03-06 21:43:30', '2024-03-06 21:43:30');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732636462', 'http://localhost:8888/image/1709732636462', NULL, '功夫.avif', 'image/avif', './upload/image', '1709732636460.avif', 78267, '2024-03-06 21:43:56', '2024-03-06 21:43:56');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709732624411', NULL, 'http://localhost:8888/video/3389861de45c7ca58e24744e5cfd9940.m3u8', '功夫.mp4', NULL, './upload/video/', '3389861de45c7ca58e24744e5cfd9940.m3u8', NULL, '2024-03-06 21:50:21', '2024-03-06 21:50:21');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709733849490', 'http://localhost:8888/image/1709733849490', NULL, '漫威.avif', 'image/avif', './upload/image', '1709733849479.avif', 85600, '2024-03-06 22:04:09', '2024-03-06 22:04:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709733836831', NULL, 'http://localhost:8888/video/74c0728c90d3b46e3b8bb8ab3dc18c18.m3u8', '漫威.mp4', NULL, './upload/video/', '74c0728c90d3b46e3b8bb8ab3dc18c18.m3u8', NULL, '2024-03-06 22:08:23', '2024-03-06 22:08:23');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709735232954', 'http://localhost:8888/image/1709735232954', NULL, 'yz.webp', 'image/webp', './upload/image', '1709735232950.webp', 176259, '2024-03-06 22:27:12', '2024-03-06 22:27:12');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901110666', 'http://localhost:8888/image/1709901110666', NULL, '变形金刚.avif', 'image/avif', './upload/image', '1709901110662.avif', 100712, '2024-03-08 20:31:50', '2024-03-08 20:31:50');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901097364', NULL, 'http://localhost:8888/video/7fea650afd3adda1a2c2a94558b08c37.m3u8', '变形金刚.mp4', NULL, './upload/video/', '7fea650afd3adda1a2c2a94558b08c37.m3u8', NULL, '2024-03-08 20:32:27', '2024-03-08 20:32:27');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901213610', 'http://localhost:8888/image/1709901213610', NULL, '加勒比海盗.avif', 'image/avif', './upload/image', '1709901213606.avif', 67769, '2024-03-08 20:33:33', '2024-03-08 20:33:33');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901203026', NULL, 'http://localhost:8888/video/bbc3ac6433e2a2bc91994288f735834f.m3u8', '加勒比海盗.mp4', NULL, './upload/video/', 'bbc3ac6433e2a2bc91994288f735834f.m3u8', NULL, '2024-03-08 20:33:45', '2024-03-08 20:33:45');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901327862', 'http://localhost:8888/image/1709901327862', NULL, '外星人.avif', 'image/avif', './upload/image', '1709901327861.avif', 63325, '2024-03-08 20:35:27', '2024-03-08 20:35:27');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901313906', NULL, 'http://localhost:8888/video/cfbf3511c6090fe0db005b9eb3fc2032.m3u8', '外星人.mp4', NULL, './upload/video/', 'cfbf3511c6090fe0db005b9eb3fc2032.m3u8', NULL, '2024-03-08 20:35:28', '2024-03-08 20:35:28');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901470611', 'http://localhost:8888/image/1709901470611', NULL, '黑衣人.avif', 'image/avif', './upload/image', '1709901470609.avif', 60630, '2024-03-08 20:37:50', '2024-03-08 20:37:50');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901451200', NULL, 'http://localhost:8888/video/4e91cd383c571273100c3fb015b2eab8.m3u8', '黑衣人.mp4', NULL, './upload/video/', '4e91cd383c571273100c3fb015b2eab8.m3u8', NULL, '2024-03-08 20:38:19', '2024-03-08 20:38:19');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901621039', 'http://localhost:8888/image/1709901621039', NULL, '美国队长.avif', 'image/avif', './upload/image', '1709901621038.avif', 88752, '2024-03-08 20:40:21', '2024-03-08 20:40:21');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901597726', NULL, 'http://localhost:8888/video/7a9aa6b03ad10dfeb37f9b8a6e5c7f2f.m3u8', '美国队长.mp4', NULL, './upload/video/', '7a9aa6b03ad10dfeb37f9b8a6e5c7f2f.m3u8', NULL, '2024-03-08 20:41:19', '2024-03-08 20:41:19');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901694229', NULL, 'http://localhost:8888/video/e82203b83072d2e5038e0f223f906a08.m3u8', '汽车.mp4', NULL, './upload/video/', 'e82203b83072d2e5038e0f223f906a08.m3u8', NULL, '2024-03-08 20:41:57', '2024-03-08 20:41:57');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901717925', 'http://localhost:8888/image/1709901717925', NULL, '汽车.avif', 'image/avif', './upload/image', '1709901717924.avif', 38717, '2024-03-08 20:41:57', '2024-03-08 20:41:57');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901874613', 'http://localhost:8888/image/1709901874613', NULL, '龙珠.avif', 'image/avif', './upload/image', '1709901874611.avif', 87248, '2024-03-08 20:44:34', '2024-03-08 20:44:34');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709901864049', NULL, 'http://localhost:8888/video/80730665c2180bdfed8cfbe7125c2fd5.m3u8', '龙珠.mp4', NULL, './upload/video/', '80730665c2180bdfed8cfbe7125c2fd5.m3u8', NULL, '2024-03-08 20:48:09', '2024-03-08 20:48:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902199399', 'http://localhost:8888/image/1709902199399', NULL, '柯南.avif', 'image/avif', './upload/image', '1709902199398.avif', 103029, '2024-03-08 20:49:59', '2024-03-08 20:49:59');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902186689', NULL, 'http://localhost:8888/video/2de328053fb57af6fa7ab9250ddec0b7.m3u8', '柯南.mp4', NULL, './upload/video/', '2de328053fb57af6fa7ab9250ddec0b7.m3u8', NULL, '2024-03-08 20:50:11', '2024-03-08 20:50:11');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902329503', 'http://localhost:8888/image/1709902329503', NULL, '我们.avif', 'image/avif', './upload/image', '1709902329493.avif', 65426, '2024-03-08 20:52:09', '2024-03-08 20:52:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902316251', NULL, 'http://localhost:8888/video/82265eee8d7ff5102393aa4686f37c21.m3u8', '我们.mp4', NULL, './upload/video/', '82265eee8d7ff5102393aa4686f37c21.m3u8', NULL, '2024-03-08 20:54:48', '2024-03-08 20:54:48');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902720187', 'http://localhost:8888/image/1709902720187', NULL, '迪迦1.avif', 'image/avif', './upload/image', '1709902720186.avif', 82416, '2024-03-08 20:58:40', '2024-03-08 20:58:40');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902711051', NULL, 'http://localhost:8888/video/18a4296ba3162c38430e4f8d560da060.m3u8', '迪迦1.mp4', NULL, './upload/video/', '18a4296ba3162c38430e4f8d560da060.m3u8', NULL, '2024-03-08 21:00:13', '2024-03-08 21:00:13');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902877013', 'http://localhost:8888/image/1709902877013', NULL, '秦天柱.avif', 'image/avif', './upload/image', '1709902877012.avif', 96994, '2024-03-08 21:01:17', '2024-03-08 21:01:17');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709902860731', NULL, 'http://localhost:8888/video/1a0d36a8c6108c3f1d973550d3a65876.m3u8', '擎天柱.mp4', NULL, './upload/video/', '1a0d36a8c6108c3f1d973550d3a65876.m3u8', NULL, '2024-03-08 21:04:18', '2024-03-08 21:04:18');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903409319', 'http://localhost:8888/image/1709903409319', NULL, '2018.avif', 'image/avif', './upload/image', '1709903409315.avif', 74622, '2024-03-08 21:10:09', '2024-03-08 21:10:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903400705', NULL, 'http://localhost:8888/video/2269986bebae7c5bd504ab00b3f5d364.m3u8', '2018.mp4', NULL, './upload/video/', '2269986bebae7c5bd504ab00b3f5d364.m3u8', NULL, '2024-03-08 21:10:45', '2024-03-08 21:10:45');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903582676', 'http://localhost:8888/image/1709903582676', NULL, '火火的姑娘.avif', 'image/avif', './upload/image', '1709903582675.avif', 77377, '2024-03-08 21:13:02', '2024-03-08 21:13:02');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903571441', NULL, 'http://localhost:8888/video/0b6c69ef6b81c2d275f378ebb54ec65a.m3u8', '火火的姑娘.mp4', NULL, './upload/video/', '0b6c69ef6b81c2d275f378ebb54ec65a.m3u8', NULL, '2024-03-08 21:16:54', '2024-03-08 21:16:54');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903859422', 'http://localhost:8888/image/1709903859422', NULL, '林丹.avif', 'image/avif', './upload/image', '1709903859421.avif', 85546, '2024-03-08 21:17:39', '2024-03-08 21:17:39');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709903845360', NULL, 'http://localhost:8888/video/9c0953e710d04757ef1af5abfa588491.m3u8', '林丹.mp4', NULL, './upload/video/', '9c0953e710d04757ef1af5abfa588491.m3u8', NULL, '2024-03-08 21:17:56', '2024-03-08 21:17:56');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904130007', 'http://localhost:8888/image/1709904130007', NULL, '恶搞.avif', 'image/avif', './upload/image', '1709904130006.avif', 67579, '2024-03-08 21:22:10', '2024-03-08 21:22:10');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904116411', NULL, 'http://localhost:8888/video/2f390be63e1661f20aebd44382fab1e4.m3u8', '恶搞.mp4', NULL, './upload/video/', '2f390be63e1661f20aebd44382fab1e4.m3u8', NULL, '2024-03-08 21:22:14', '2024-03-08 21:22:14');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904349290', 'http://localhost:8888/image/1709904349290', NULL, '一路生花.avif', 'image/avif', './upload/image', '1709904349286.avif', 58767, '2024-03-08 21:25:49', '2024-03-08 21:25:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904390416', NULL, 'http://localhost:8888/video/d597329a7942cd000e027790474d49fd.m3u8', 'yilu.mp4', NULL, './upload/video/', 'd597329a7942cd000e027790474d49fd.m3u8', NULL, '2024-03-08 21:29:50', '2024-03-08 21:29:50');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904672334', 'http://localhost:8888/image/1709904672334', NULL, 'call me baby.avif', 'image/avif', './upload/image', '1709904672333.avif', 99973, '2024-03-08 21:31:12', '2024-03-08 21:31:12');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709904658586', NULL, 'http://localhost:8888/video/9132cf8d5cb7806a1475eecd3e681a8f.m3u8', 'call me baby.mp4', NULL, './upload/video/', '9132cf8d5cb7806a1475eecd3e681a8f.m3u8', NULL, '2024-03-08 21:33:19', '2024-03-08 21:33:19');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709905941572', 'http://localhost:8888/image/1709905941572', NULL, '我的心上人.avif', 'image/avif', './upload/image', '1709905941571.avif', 39546, '2024-03-08 21:52:21', '2024-03-08 21:52:21');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709905926999', NULL, 'http://localhost:8888/video/34196216ae10c12b72b53bdaef7fcc96.m3u8', '我的星赏人.mp4', NULL, './upload/video/', '34196216ae10c12b72b53bdaef7fcc96.m3u8', NULL, '2024-03-08 21:52:35', '2024-03-08 21:52:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906026386', 'http://localhost:8888/image/1709906026386', NULL, '白月光.avif', 'image/avif', './upload/image', '1709906026384.avif', 30323, '2024-03-08 21:53:46', '2024-03-08 21:53:46');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906016645', NULL, 'http://localhost:8888/video/135aac65c0b41e9489cecbb148e87efd.m3u8', '白月光.mp4', NULL, './upload/video/', '135aac65c0b41e9489cecbb148e87efd.m3u8', NULL, '2024-03-08 21:53:54', '2024-03-08 21:53:54');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906136471', 'http://localhost:8888/image/1709906136471', NULL, '家属起.avif', 'image/avif', './upload/image', '1709906136467.avif', 78286, '2024-03-08 21:55:36', '2024-03-08 21:55:36');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906123304', NULL, 'http://localhost:8888/video/227f16808c477a0e3bde4a40f2d7b0d2.m3u8', '家属起.mp4', NULL, './upload/video/', '227f16808c477a0e3bde4a40f2d7b0d2.m3u8', NULL, '2024-03-08 21:56:23', '2024-03-08 21:56:23');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906509235', 'http://localhost:8888/image/1709906509235', NULL, '我的秘密.avif', 'image/avif', './upload/image', '1709906509229.avif', 91568, '2024-03-08 22:01:49', '2024-03-08 22:01:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906493458', NULL, 'http://localhost:8888/video/f026263dee43de6bb89b78f0951ac8f8.m3u8', '邓紫棋.mp4', NULL, './upload/video/', 'f026263dee43de6bb89b78f0951ac8f8.m3u8', NULL, '2024-03-08 22:02:39', '2024-03-08 22:02:39');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709906619735', 'http://localhost:8888/image/1709906619735', NULL, '邓紫棋.avif', 'image/avif', './upload/image', '1709906619733.avif', 258882, '2024-03-08 22:03:39', '2024-03-08 22:03:39');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709962669128', 'http://localhost:8888/image/1709962669128', NULL, 'tim.avif', 'image/avif', './upload/image', '1709962669125.avif', 84131, '2024-03-09 13:37:49', '2024-03-09 13:37:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709962651189', NULL, 'http://localhost:8888/video/9f040da5b2596a316617920f22edd665.m3u8', 'time.mp4', NULL, './upload/video/', '9f040da5b2596a316617920f22edd665.m3u8', NULL, '2024-03-09 13:38:19', '2024-03-09 13:38:19');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709962803884', 'http://localhost:8888/image/1709962803884', NULL, '在你的身边.avif', 'image/avif', './upload/image', '1709962803882.avif', 80394, '2024-03-09 13:40:03', '2024-03-09 13:40:03');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709962790409', NULL, 'http://localhost:8888/video/0dd596e3df5b5a2093490d96353c9484.m3u8', '在你的身边.mp4', NULL, './upload/video/', '0dd596e3df5b5a2093490d96353c9484.m3u8', NULL, '2024-03-09 13:44:47', '2024-03-09 13:44:47');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709963855253', 'http://localhost:8888/image/1709963855253', NULL, '萧亚轩.avif', 'image/avif', './upload/image', '1709963855251.avif', 69510, '2024-03-09 13:57:35', '2024-03-09 13:57:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709963873700', NULL, 'http://localhost:8888/video/21a92559aeae40487e1188c79e66478e.m3u8', '萧亚轩.mp4', NULL, './upload/video/', '21a92559aeae40487e1188c79e66478e.m3u8', NULL, '2024-03-09 13:58:05', '2024-03-09 13:58:05');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709964385850', 'http://localhost:8888/image/1709964385850', NULL, '我终于失去了你.avif', 'image/avif', './upload/image', '1709964385847.avif', 50537, '2024-03-09 14:06:25', '2024-03-09 14:06:25');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709964393314', NULL, 'http://localhost:8888/video/1e09e33464321d0dcf0d36200438f7c7.m3u8', '我终于失去了你.mp4', NULL, './upload/video/', '1e09e33464321d0dcf0d36200438f7c7.m3u8', NULL, '2024-03-09 14:06:51', '2024-03-09 14:06:51');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709964733533', 'http://localhost:8888/image/1709964733533', NULL, '年少的你啊.avif', 'image/avif', './upload/image', '1709964733525.avif', 15141, '2024-03-09 14:12:13', '2024-03-09 14:12:13');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709964744875', NULL, 'http://localhost:8888/video/7523c9da0e9a8891b5bb914f7e1e6a53.m3u8', '年少的你.mp4', NULL, './upload/video/', '7523c9da0e9a8891b5bb914f7e1e6a53.m3u8', NULL, '2024-03-09 14:12:35', '2024-03-09 14:12:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709965811151', 'http://localhost:8888/image/1709965811151', NULL, '学习.avif', 'image/avif', './upload/image', '1709965811149.avif', 223118, '2024-03-09 14:30:11', '2024-03-09 14:30:11');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709965903836', 'http://localhost:8888/image/1709965903836', NULL, '新闻.avif', 'image/avif', './upload/image', '1709965903834.avif', 179375, '2024-03-09 14:31:43', '2024-03-09 14:31:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709965974961', 'http://localhost:8888/image/1709965974961', NULL, '游戏.avif', 'image/avif', './upload/image', '1709965974960.avif', 256534, '2024-03-09 14:32:54', '2024-03-09 14:32:54');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966089068', 'http://localhost:8888/image/1709966089068', NULL, '酷我.jpeg', 'image/jpeg', './upload/image', '1709966089066.jpeg', 115981, '2024-03-09 14:34:49', '2024-03-09 14:34:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966685249', 'http://localhost:8888/image/1709966685249', NULL, '体面.avif', 'image/avif', './upload/image', '1709966685247.avif', 43082, '2024-03-09 14:44:45', '2024-03-09 14:44:45');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966671691', NULL, 'http://localhost:8888/video/04fa11aafa3faccf978b7af0e4025333.m3u8', '体面.mp4', NULL, './upload/video/', '04fa11aafa3faccf978b7af0e4025333.m3u8', NULL, '2024-03-09 14:45:50', '2024-03-09 14:45:50');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966823244', 'http://localhost:8888/image/1709966823244', NULL, '于文文·.jpeg', 'image/jpeg', './upload/image', '1709966823240.jpeg', 351370, '2024-03-09 14:47:03', '2024-03-09 14:47:03');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966978526', 'http://localhost:8888/image/1709966978526', NULL, 'let.avif', 'image/avif', './upload/image', '1709966978524.avif', 105735, '2024-03-09 14:49:38', '2024-03-09 14:49:38');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709966959733', NULL, 'http://localhost:8888/video/9497c600ec11abb8af7d3164f36aeff8.m3u8', 'let.mp4', NULL, './upload/video/', '9497c600ec11abb8af7d3164f36aeff8.m3u8', NULL, '2024-03-09 14:49:40', '2024-03-09 14:49:40');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709967041866', 'http://localhost:8888/image/1709967041866', NULL, '心愿.webp', 'image/webp', './upload/image', '1709967041864.webp', 485247, '2024-03-09 14:50:41', '2024-03-09 14:50:41');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709967248841', 'http://localhost:8888/image/1709967248841', NULL, '亲亲.webp', 'image/webp', './upload/image', '1709967248839.webp', 197986, '2024-03-09 14:54:08', '2024-03-09 14:54:08');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709967662621', 'http://localhost:8888/image/1709967662621', NULL, '7.avif', 'image/avif', './upload/image', '1709967662619.avif', 106122, '2024-03-09 15:01:02', '2024-03-09 15:01:02');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709968792774', 'http://localhost:8888/image/1709968792774', NULL, '恶作剧.avif', 'image/avif', './upload/image', '1709968792765.avif', 42547, '2024-03-09 15:19:52', '2024-03-09 15:19:52');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709968780915', NULL, 'http://localhost:8888/video/ccd9a428f2060669cd0bcffbca6c2f9d.m3u8', '恶作剧.mp4', NULL, './upload/video/', 'ccd9a428f2060669cd0bcffbca6c2f9d.m3u8', NULL, '2024-03-09 15:22:23', '2024-03-09 15:22:23');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709968981131', 'http://localhost:8888/image/1709968981131', NULL, '遇见.avif', 'image/avif', './upload/image', '1709968981128.avif', 50724, '2024-03-09 15:23:01', '2024-03-09 15:23:01');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709968965087', NULL, 'http://localhost:8888/video/2720ea2130ecbfc1e232b997570425ef.m3u8', '遇见.mp4', NULL, './upload/video/', '2720ea2130ecbfc1e232b997570425ef.m3u8', NULL, '2024-03-09 15:23:08', '2024-03-09 15:23:08');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709970701192', 'http://localhost:8888/image/1709970701192', NULL, '00后.avif', 'image/avif', './upload/image', '1709970701191.avif', 87924, '2024-03-09 15:51:41', '2024-03-09 15:51:41');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709970691100', NULL, 'http://localhost:8888/video/fd1e84b6db22f41f36f48766168fc5c2.m3u8', '00后.mp4', NULL, './upload/video/', 'fd1e84b6db22f41f36f48766168fc5c2.m3u8', NULL, '2024-03-09 15:53:11', '2024-03-09 15:53:11');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1709972006626', 'http://localhost:8888/image/1709972006626', NULL, '11.avif', 'image/avif', './upload/image', '1709972006622.avif', 190107, '2024-03-09 16:13:26', '2024-03-09 16:13:26');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710049013107', 'http://localhost:8888/image/1710049013107', NULL, 'iu.avif', 'image/avif', './upload/image', '1710049013105.avif', 92623, '2024-03-10 13:36:53', '2024-03-10 13:36:53');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710049004062', NULL, 'http://localhost:8888/video/6457af4bfccec4b5adf527ddc6ae8015.m3u8', 'iu.mp4', NULL, './upload/video/', '6457af4bfccec4b5adf527ddc6ae8015.m3u8', NULL, '2024-03-10 13:37:07', '2024-03-10 13:37:07');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710053952071', 'http://localhost:8888/image/1710053952071', NULL, '龙珠.avif', 'image/avif', './upload/image', '1710053952067.avif', 85809, '2024-03-10 14:59:12', '2024-03-10 14:59:12');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710053959001', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-10 15:00:09', '2024-03-10 15:00:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710054243291', 'http://localhost:8888/image/1710054243291', NULL, '2.avif', 'image/avif', './upload/image', '1710054243289.avif', 131264, '2024-03-10 15:04:03', '2024-03-10 15:04:03');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710247541234', 'http://localhost:8888/image/1710247541234', NULL, 'anni.jpeg', 'image/jpeg', './upload/image', '1710247541231.jpeg', 147138, '2024-03-12 20:45:41', '2024-03-12 20:45:41');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710330124861', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-13 19:42:26', '2024-03-13 19:42:26');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710330277832', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 19:49:47', '2024-03-13 19:49:47');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710332315815', 'http://localhost:8888/image/1710332315815', NULL, '龙珠.avif', 'image/avif', './upload/image', '1710332315813.avif', 99779, '2024-03-13 20:18:35', '2024-03-13 20:18:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710332128046', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:20:13', '2024-03-13 20:20:13');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710333071103', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:48:57', '2024-03-13 20:48:57');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710333127662', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:54:22', '2024-03-13 20:54:22');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710333242298', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:57:50', '2024-03-13 20:57:50');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710333345674', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:59:10', '2024-03-13 20:59:10');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710333471874', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 20:59:46', '2024-03-13 20:59:46');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710335838893', 'http://localhost:8888/image/1710335838893', NULL, '2.avif', 'image/avif', './upload/image', '1710335838889.avif', 98653, '2024-03-13 21:17:18', '2024-03-13 21:17:18');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336222468', 'http://localhost:8888/image/1710336222468', NULL, '2.avif', 'image/avif', './upload/image', '1710336222468.avif', 98653, '2024-03-13 21:23:42', '2024-03-13 21:23:42');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336424353', 'http://localhost:8888/image/1710336424353', NULL, 'yui.avif', 'image/avif', './upload/image', '1710336424352.avif', 60628, '2024-03-13 21:27:04', '2024-03-13 21:27:04');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336181768', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 21:30:22', '2024-03-13 21:30:22');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336637468', 'http://localhost:8888/image/1710336637468', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710336637467.jpeg', 82221, '2024-03-13 21:30:37', '2024-03-13 21:30:37');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336418217', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 21:37:19', '2024-03-13 21:37:19');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710336631816', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 21:38:59', '2024-03-13 21:38:59');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710337455500', 'http://localhost:8888/image/1710337455500', NULL, 'yui.avif', 'image/avif', './upload/image', '1710337455499.avif', 60628, '2024-03-13 21:44:15', '2024-03-13 21:44:15');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710337669295', 'http://localhost:8888/image/1710337669295', NULL, '龙珠.avif', 'image/avif', './upload/image', '1710337669293.avif', 99779, '2024-03-13 21:47:49', '2024-03-13 21:47:49');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710337446933', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 21:51:17', '2024-03-13 21:51:17');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710337648353', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 21:54:26', '2024-03-13 21:54:26');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710338602032', 'http://localhost:8888/image/1710338602032', NULL, '龙珠.avif', 'image/avif', './upload/image', '1710338602031.avif', 99779, '2024-03-13 22:03:22', '2024-03-13 22:03:22');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710338587635', NULL, 'http://localhost:8888/video/1ed15e31e12171b571fff8ad20df5ebe.m3u8', 'blank pink.mp4', NULL, './upload/video/', '1ed15e31e12171b571fff8ad20df5ebe.m3u8', NULL, '2024-03-13 22:07:47', '2024-03-13 22:07:47');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710338949219', 'http://localhost:8888/image/1710338949219', NULL, '2.avif', 'image/avif', './upload/image', '1710338949216.avif', 98653, '2024-03-13 22:09:09', '2024-03-13 22:09:09');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710338942716', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-13 22:09:27', '2024-03-13 22:09:27');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415011327', NULL, 'http://localhost:8888/video/00af74f02993a2d0f359024a2f15a642.m3u8', 'yui.mp4', NULL, './upload/video/', '00af74f02993a2d0f359024a2f15a642.m3u8', NULL, '2024-03-14 19:16:54', '2024-03-14 19:16:54');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415423831', 'http://localhost:8888/image/1710415423831', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710415423830.jpeg', 82221, '2024-03-14 19:23:43', '2024-03-14 19:23:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415418134', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 19:24:01', '2024-03-14 19:24:01');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415482394', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 19:25:05', '2024-03-14 19:25:05');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415566033', 'http://localhost:8888/image/1710415566033', NULL, 'yui.avif', 'image/avif', './upload/image', '1710415566031.avif', 60628, '2024-03-14 19:26:06', '2024-03-14 19:26:06');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415587587', 'http://localhost:8888/image/1710415587587', NULL, '龙珠.avif', 'image/avif', './upload/image', '1710415587585.avif', 99779, '2024-03-14 19:26:27', '2024-03-14 19:26:27');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415559923', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 19:26:28', '2024-03-14 19:26:28');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415627360', NULL, 'http://localhost:8888/video/00af74f02993a2d0f359024a2f15a642.m3u8', 'yui.mp4', NULL, './upload/video/', '00af74f02993a2d0f359024a2f15a642.m3u8', NULL, '2024-03-14 19:27:18', '2024-03-14 19:27:18');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710415786731', 'http://localhost:8888/image/1710415786731', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710415786729.jpeg', 82221, '2024-03-14 19:29:46', '2024-03-14 19:29:46');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710416352911', NULL, 'http://localhost:8888/video/00af74f02993a2d0f359024a2f15a642.m3u8', 'yui.mp4', NULL, './upload/video/', '00af74f02993a2d0f359024a2f15a642.m3u8', NULL, '2024-03-14 19:39:22', '2024-03-14 19:39:22');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710416377964', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 19:40:52', '2024-03-14 19:40:52');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710416901481', 'http://localhost:8888/image/1710416901481', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710416901480.jpeg', 82221, '2024-03-14 19:48:21', '2024-03-14 19:48:21');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710416901481', 'http://localhost:8888/image/1710416901481', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710416901479.jpeg', 82221, '2024-03-14 19:48:21', '2024-03-14 19:48:21');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710416887899', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 19:49:20', '2024-03-14 19:49:20');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710417868765', 'http://localhost:8888/image/1710417868765', NULL, '头像.jpeg', 'image/jpeg', './upload/image', '1710417868764.jpeg', 82221, '2024-03-14 20:04:28', '2024-03-14 20:04:28');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710417857051', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 20:04:43', '2024-03-14 20:04:43');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1710418459414', NULL, 'http://localhost:8888/video/40dbe763ad30dab8c9deafbb6b9a2327.m3u8', '龙珠.mp4', NULL, './upload/video/', '40dbe763ad30dab8c9deafbb6b9a2327.m3u8', NULL, '2024-03-14 20:14:40', '2024-03-14 20:14:40');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714545324643', 'http://localhost:8888/image/1714545324643', NULL, '1.avif', 'image/avif', './upload/image', '1714545324639.avif', 159362, '2024-05-01 14:35:24', '2024-05-01 14:35:24');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714545487933', 'http://localhost:8888/image/1714545487933', NULL, '对你爱不完.avif', 'image/avif', './upload/image', '1714545487931.avif', 100829, '2024-05-01 14:38:07', '2024-05-01 14:38:07');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714545476149', NULL, 'http://localhost:8888/video/69fd0ad363d5eb6de6c2b8ec299d2d6c.m3u8', '对你爱不完.mp4', NULL, './upload/video/', '69fd0ad363d5eb6de6c2b8ec299d2d6c.m3u8', NULL, '2024-05-01 14:42:39', '2024-05-01 14:42:39');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714546215389', 'http://localhost:8888/image/1714546215389', NULL, '爱转角.avif', 'image/avif', './upload/image', '1714546215361.avif', 99316, '2024-05-01 14:50:15', '2024-05-01 14:50:15');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714546206164', NULL, 'http://localhost:8888/video/8fec6dd1e26c9b1203e2b23eaee60a94.m3u8', '爱转角.mp4', NULL, './upload/video/', '8fec6dd1e26c9b1203e2b23eaee60a94.m3u8', NULL, '2024-05-01 14:54:35', '2024-05-01 14:54:35');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714549499518', NULL, 'http://localhost:8888/video/cc7c229e616d4d5714935d32c11a8e02.m3u8', '程艾影.mp4', NULL, './upload/video/', 'cc7c229e616d4d5714935d32c11a8e02.m3u8', NULL, '2024-05-01 15:45:25', '2024-05-01 15:45:25');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714549529565', 'http://localhost:8888/image/1714549529565', NULL, '程艾影.avif', 'image/avif', './upload/image', '1714549529563.avif', 98006, '2024-05-01 15:45:29', '2024-05-01 15:45:29');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1714549686360', 'http://localhost:8888/image/1714549686360', NULL, 'banner.jpeg', 'image/jpeg', './upload/image', '1714549686357.jpeg', 91324, '2024-05-01 15:48:06', '2024-05-01 15:48:06');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1735304262431', 'http://localhost:8888/image/1735304262431', NULL, '江语晨.jpg', 'image/jpeg', './upload/image', '1735304262429.jpg', 37257, '2024-12-27 20:57:42', '2024-12-27 20:57:42');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1735304829928', NULL, 'http://localhost:8888/video/07358e0f8ab3d64f409d7b7a0ed008c0.m3u8', '回忆里的那个人.mp4', NULL, './upload/video/', '07358e0f8ab3d64f409d7b7a0ed008c0.m3u8', NULL, '2024-12-27 21:07:27', '2024-12-27 21:07:27');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1735304859109', 'http://localhost:8888/image/1735304859109', NULL, '6.avif', 'image/avif', './upload/image', '1735304859108.avif', 52829, '2024-12-27 21:07:39', '2024-12-27 21:07:39');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1735306673843', 'http://localhost:8888/image/1735306673843', NULL, '最后一夜.avif', 'image/avif', './upload/image', '1735306673842.avif', 52999, '2024-12-27 21:37:53', '2024-12-27 21:37:53');
INSERT INTO `file` (`id`, `picUrl`, `vioUrl`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `createTime`, `updateTime`) VALUES ('1735306652108', NULL, 'http://localhost:8888/video/070703e29f28fd52b34c65221b110827.m3u8', '111.mp4', NULL, './upload/video/', '070703e29f28fd52b34c65221b110827.m3u8', NULL, '2024-12-27 21:38:09', '2024-12-27 21:38:09');
COMMIT;

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `count` int DEFAULT '0',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  KEY `history_ibfk_2` (`userId`) USING BTREE,
  CONSTRAINT `history_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `history_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of history
-- ----------------------------
BEGIN;
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729161442', '1709728788586', '1709728495272', 1, '2024-03-06 20:46:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729167421', '1709727694829', '1709728495272', 3, '2024-03-10 14:34:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729170390', '1709727225326', '1709728495272', 3, '2024-03-10 14:34:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729173988', '1709727158279', '1709728495272', 3, '2024-03-06 21:51:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729173989', '1709727158279', '1709728495272', 3, '2024-03-06 21:51:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729588839', '1709729476568', '1709729533921', 2, '2024-03-06 21:27:47');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709729829773', '1709729818524', '1709729533921', 3, '2024-03-06 21:28:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709730070607', '1709728442684', '1709729533921', 2, '2024-03-06 21:27:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709730789191', '1709730689098', '1709729533921', 0, '2024-03-06 21:13:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709730789192', '1709730689098', '1709729533921', 0, '2024-03-06 21:13:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709730792880', '1709728788586', '1709729533921', 1, '2024-03-06 21:27:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731243017', '1709727158279', '1709729533921', 3, '2024-03-06 21:26:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731634722', '1709731471688', '1709729533921', 0, '2024-03-06 21:27:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731638182', '1709728097869', '1709729533921', 0, '2024-03-06 21:27:18');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731647470', '1709728917857', '1709729533921', 0, '2024-03-06 21:27:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731692317', '1709727360760', '1709729533921', 0, '2024-03-06 21:28:12');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731700901', '1709729514660', '1709729533921', 1, '2024-03-06 21:28:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731719279', '1709727225326', '1709729533921', 0, '2024-03-06 21:28:39');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731737566', '1709731599134', '1709726632137', 19, '2025-01-03 21:35:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731744944', '1709731471688', '1709726632137', 17, '2024-12-28 12:59:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731744945', '1709731471688', '1709726632137', 17, '2024-12-28 12:59:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731750993', '1709730689098', '1709726632137', 7, '2025-01-03 22:12:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731756968', '1709730058428', '1709726632137', 7, '2024-03-14 20:16:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731765763', '1709729818524', '1709726632137', 42, '2025-01-03 21:41:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731771926', '1709729514660', '1709726632137', 30, '2025-01-03 21:41:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731777411', '1709729476568', '1709726632137', 16, '2025-01-03 21:40:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731782580', '1709728917857', '1709726632137', 41, '2025-01-03 19:55:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731789574', '1709728442684', '1709726632137', 63, '2025-01-03 21:39:03');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731797077', '1709728788586', '1709726632137', 5, '2025-01-03 22:12:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731825990', '1709731599134', '1709728495272', 2, '2024-03-06 21:51:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731833789', '1709731471688', '1709728495272', 1, '2024-03-06 21:30:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731840478', '1709730689098', '1709728495272', 1, '2024-03-06 21:30:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731845907', '1709730058428', '1709728495272', 3, '2024-03-06 21:55:00');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731850940', '1709729818524', '1709728495272', 2, '2024-03-06 21:33:12');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731858225', '1709729514660', '1709728495272', 2, '2024-03-06 21:33:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731863240', '1709729476568', '1709728495272', 1, '2024-03-06 21:31:03');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731869877', '1709728442684', '1709728495272', 1, '2024-03-06 21:31:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731875777', '1709728097869', '1709728495272', 0, '2024-03-06 21:31:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709731888480', '1709727360760', '1709728495272', 1, '2024-03-06 21:31:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733049026', '1709733037458', '1709728495272', 3, '2024-03-06 21:52:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733135192', '1709728917857', '1709728495272', 1, '2024-03-06 21:55:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733196024', '1709732612806', '1709728495272', 1, '2024-03-06 21:53:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733391445', '1709733037458', '1709733343047', 0, '2024-03-06 21:56:31');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733391446', '1709733037458', '1709733343047', 0, '2024-03-06 21:56:31');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733398619', '1709732612806', '1709733343047', 3, '2024-03-08 21:46:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733408065', '1709727694829', '1709733343047', 2, '2024-03-06 22:00:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733421455', '1709727225326', '1709733343047', 2, '2024-03-06 21:59:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733435327', '1709732368308', '1709733343047', 1, '2024-03-06 21:57:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733447277', '1709731599134', '1709733343047', 1, '2024-03-06 21:57:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733462299', '1709727158279', '1709733343047', 1, '2024-03-06 21:57:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733471972', '1709731471688', '1709733343047', 0, '2024-03-06 21:57:51');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733490377', '1709730058428', '1709733343047', 0, '2024-03-06 21:58:10');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733509091', '1709728097869', '1709733343047', 0, '2024-03-06 21:58:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733522916', '1709728442684', '1709733343047', 0, '2024-03-06 21:58:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733535672', '1709729476568', '1709733343047', 0, '2024-03-06 21:58:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733549624', '1709729514660', '1709733343047', 1, '2024-03-06 21:59:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733559934', '1709729818524', '1709733343047', 1, '2024-03-08 21:46:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733584743', '1709728788586', '1709733343047', 1, '2024-03-06 21:59:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733595368', '1709730689098', '1709733343047', 0, '2024-03-06 21:59:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709733622449', '1709727360760', '1709733343047', 1, '2024-03-06 22:00:22');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709734141677', '1709734139055', '1709733343047', 1, '2024-03-06 22:09:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709734757319', '1709727158279', '1709726632137', 45, '2025-01-03 19:50:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709734771868', '1709728097869', '1709726632137', 18, '2025-01-03 19:54:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820321466', '1709732612806', '1709726632137', 7, '2025-01-03 22:11:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820348936', '1709727694829', '1709726632137', 58, '2025-01-03 22:11:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820394240', '1709727225326', '1709726632137', 7, '2024-12-27 22:21:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820456863', '1709732368308', '1709726632137', 1, '2024-03-07 22:07:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820702558', '1709734139055', '1709820642242', 9, '2024-03-08 21:42:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820710593', '1709733037458', '1709820642242', 7, '2024-03-08 21:43:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820722686', '1709732612806', '1709820642242', 2, '2024-03-07 22:18:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820734135', '1709727225326', '1709820642242', 1, '2024-03-07 22:18:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820753037', '1709727360760', '1709820642242', 3, '2024-03-08 21:42:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820782671', '1709731599134', '1709820642242', 11, '2024-03-09 13:31:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820905207', '1709731471688', '1709820642242', 2, '2024-03-07 22:17:00');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709820907438', '1709727158279', '1709820642242', 4, '2024-03-10 13:56:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821016268', '1709728097869', '1709820642242', 4, '2024-03-07 22:20:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821017945', '1709728917857', '1709820642242', 0, '2024-03-07 22:16:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821029195', '1709729514660', '1709820642242', 1, '2024-03-07 22:17:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821029196', '1709729514660', '1709820642242', 1, '2024-03-07 22:17:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821032432', '1709729818524', '1709820642242', 2, '2024-03-07 22:20:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821077236', '1709728442684', '1709820642242', 1, '2024-03-08 21:42:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821077238', '1709728442684', '1709820642242', 1, '2024-03-08 21:42:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821090217', '1709729476568', '1709820642242', 0, '2024-03-07 22:18:10');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821114647', '1709730689098', '1709820642242', 2, '2024-03-08 22:06:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821114650', '1709730689098', '1709820642242', 2, '2024-03-08 22:06:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821120679', '1709728788586', '1709820642242', 0, '2024-03-07 22:18:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821134274', '1709730058428', '1709820642242', 3, '2024-03-08 22:07:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821164944', '1709727694829', '1709820642242', 1, '2024-03-07 22:19:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709821301510', '1709733037458', '1709726632137', 4, '2025-01-03 21:38:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709902221832', '1709901343387', '1709820642242', 4, '2024-03-10 13:57:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903129282', '1709902167810', '1709902530670', 2, '2024-03-08 21:39:37');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903129283', '1709902167810', '1709902530670', 2, '2024-03-08 21:39:37');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903181144', '1709729476568', '1709902530670', 1, '2024-03-08 21:06:21');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903329348', '1709727694829', '1709902530670', 0, '2024-03-08 21:08:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903329351', '1709727694829', '1709902530670', 0, '2024-03-08 21:08:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903883671', '1709903824403', '1709902530670', 2, '2024-03-08 21:40:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903886056', '1709903474181', '1709902530670', 0, '2024-03-08 21:18:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903907549', '1709727360760', '1709902530670', 1, '2024-03-08 21:18:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903913581', '1709901227938', '1709902530670', 1, '2024-03-08 21:39:45');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709903918508', '1709903103144', '1709902530670', 0, '2024-03-08 21:18:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709904152844', '1709904147909', '1709902530670', 1, '2024-03-08 21:39:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709904152845', '1709904147909', '1709902530670', 1, '2024-03-08 21:39:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709904625986', '1709904597222', '1709902530670', 3, '2024-03-08 21:38:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905061998', '1709904846470', '1709902530670', 1, '2024-03-08 21:37:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905096971', '1709733037458', '1709902530670', 0, '2024-03-08 21:38:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905107081', '1709901189845', '1709902530670', 0, '2024-03-08 21:38:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905115621', '1709731599134', '1709902530670', 0, '2024-03-08 21:38:35');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905129737', '1709731471688', '1709902530670', 0, '2024-03-08 21:38:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905151971', '1709902846546', '1709902530670', 0, '2024-03-08 21:39:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905160853', '1709901682371', '1709902530670', 0, '2024-03-08 21:39:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905168589', '1709902212933', '1709902530670', 0, '2024-03-08 21:39:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905196174', '1709734139055', '1709902530670', 0, '2024-03-08 21:39:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905206828', '1709902491136', '1709902530670', 0, '2024-03-08 21:40:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905206829', '1709902491136', '1709902530670', 0, '2024-03-08 21:40:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905214905', '1709728917857', '1709902530670', 0, '2024-03-08 21:40:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905222508', '1709727158279', '1709902530670', 0, '2024-03-08 21:40:22');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905259025', '1709901343387', '1709902530670', 2, '2024-03-08 21:41:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905267850', '1709901732306', '1709902530670', 0, '2024-03-08 21:41:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905275073', '1709901525538', '1709902530670', 0, '2024-03-08 21:41:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905320054', '1709904846470', '1709820642242', 1, '2024-03-08 21:42:00');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905329467', '1709904597222', '1709820642242', 0, '2024-03-08 21:42:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905336035', '1709904147909', '1709820642242', 2, '2024-03-08 21:42:26');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905339584', '1709902846546', '1709820642242', 0, '2024-03-08 21:42:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905347266', '1709902167810', '1709820642242', 2, '2024-03-09 16:14:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905351320', '1709902212933', '1709820642242', 1, '2024-03-09 13:20:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905362763', '1709903474181', '1709820642242', 9, '2024-03-09 13:30:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905367368', '1709903824403', '1709820642242', 1, '2024-03-09 13:28:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905372868', '1709903878483', '1709820642242', 0, '2024-03-08 21:42:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905372869', '1709903878483', '1709820642242', 0, '2024-03-08 21:42:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905381833', '1709903103144', '1709820642242', 0, '2024-03-08 21:43:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905387803', '1709901227938', '1709820642242', 0, '2024-03-08 21:43:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905396608', '1709902491136', '1709820642242', 1, '2024-03-08 21:43:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905405917', '1709901189845', '1709820642242', 2, '2024-03-08 21:58:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905427592', '1709904846470', '1709726632137', 11, '2025-01-03 21:49:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905432637', '1709904597222', '1709726632137', 23, '2025-01-03 21:50:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905438257', '1709904147909', '1709726632137', 4, '2024-07-15 21:46:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905438259', '1709904147909', '1709726632137', 4, '2024-07-15 21:46:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905441386', '1709727360760', '1709726632137', 6, '2024-12-27 22:39:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905449232', '1709903878483', '1709726632137', 4, '2024-12-28 13:09:58');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905454084', '1709903824403', '1709726632137', 11, '2025-01-03 22:07:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905454085', '1709903824403', '1709726632137', 11, '2025-01-03 22:07:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905459652', '1709903474181', '1709726632137', 27, '2025-01-03 21:51:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905459656', '1709903474181', '1709726632137', 27, '2025-01-03 21:51:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905464516', '1709903103144', '1709726632137', 3, '2024-12-28 12:57:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905464517', '1709903103144', '1709726632137', 3, '2024-12-28 12:57:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905469131', '1709902846546', '1709726632137', 8, '2025-01-03 21:49:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905476460', '1709902491136', '1709726632137', 13, '2025-01-03 19:56:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905489401', '1709902167810', '1709726632137', 12, '2025-01-03 21:43:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905495457', '1709901525538', '1709726632137', 10, '2024-12-28 13:04:37');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905500219', '1709901343387', '1709726632137', 4, '2024-12-27 22:45:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905518493', '1709904846470', '1709733343047', 1, '2024-03-08 21:45:18');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905525227', '1709904597222', '1709733343047', 1, '2024-03-08 21:45:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905532251', '1709904147909', '1709733343047', 0, '2024-03-08 21:45:32');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905538498', '1709903878483', '1709733343047', 1, '2024-03-08 21:45:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905544117', '1709903824403', '1709733343047', 1, '2024-03-08 21:45:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905549758', '1709903103144', '1709733343047', 1, '2024-03-08 21:45:49');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905554305', '1709902846546', '1709733343047', 1, '2024-03-08 21:46:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905557137', '1709901227938', '1709733343047', 0, '2024-03-08 21:45:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905562403', '1709902167810', '1709733343047', 1, '2024-03-08 21:46:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905567668', '1709901682371', '1709733343047', 0, '2024-03-08 21:46:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905592751', '1709902212933', '1709733343047', 1, '2024-03-08 21:46:32');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709905601200', '1709901189845', '1709733343047', 1, '2024-03-08 21:46:41');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709906190984', '1709728442684', '1709905648920', 1, '2024-03-08 21:56:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709906299618', '1709906040181', '1709820642242', 0, '2024-03-08 21:58:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709906299619', '1709906040181', '1709820642242', 0, '2024-03-08 21:58:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709906316472', '1709905956013', '1709820642242', 0, '2024-03-08 21:58:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709906326831', '1709906184558', '1709820642242', 1, '2024-03-08 21:58:46');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709961682224', '1709906560937', '1709820642242', 1, '2024-03-09 13:21:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709961682225', '1709906560937', '1709820642242', 1, '2024-03-09 13:21:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709962503726', '1709904846470', '1709962443377', 1, '2024-03-09 13:35:03');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709964514370', '1709964424184', '1709962443377', 0, '2024-03-09 14:08:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709964514371', '1709964424184', '1709962443377', 0, '2024-03-09 14:08:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709964618182', '1709727158279', '1709962443377', 2, '2024-03-09 15:05:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709964787209', '1709728097869', '1709962443377', 1, '2024-03-09 15:05:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709965275036', '1709902846546', '1709730380639', 1, '2024-03-09 14:21:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709965345908', '1709901189845', '1709730380639', 3, '2024-03-09 14:24:35');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709965649269', '1709903878483', '1709730372557', 1, '2024-03-09 14:27:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709966549198', '1709964765739', '1709730357380', 1, '2024-03-09 14:42:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709966843214', '1709906560937', '1709964349418', 2, '2024-03-09 14:47:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709966994712', '1709966991829', '1709964349418', 2, '2024-03-09 14:51:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709966994713', '1709966991829', '1709964349418', 2, '2024-03-09 14:51:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967204447', '1709964424184', '1709964349418', 4, '2024-03-09 14:56:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967304282', '1709727158279', '1709964349418', 1, '2024-03-09 14:55:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967404295', '1709903103144', '1709964349418', 1, '2024-03-09 14:56:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967433692', '1709966991829', '1709963638248', 2, '2024-03-09 15:03:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967463518', '1709902212933', '1709963638248', 0, '2024-03-09 14:57:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967467386', '1709901682371', '1709963638248', 0, '2024-03-09 14:57:47');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967470920', '1709727360760', '1709963638248', 0, '2024-03-09 14:57:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967476468', '1709734139055', '1709963638248', 0, '2024-03-09 14:57:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967481388', '1709901227938', '1709963638248', 0, '2024-03-09 14:58:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967488527', '1709904147909', '1709963638248', 1, '2024-03-09 15:03:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967494129', '1709964765739', '1709963638248', 1, '2024-03-09 14:58:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967498464', '1709962703249', '1709963638248', 1, '2024-03-09 14:59:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967503317', '1709729514660', '1709963638248', 0, '2024-03-09 14:58:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967511016', '1709964424184', '1709963638248', 1, '2024-03-09 14:58:31');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967514336', '1709963889528', '1709963638248', 2, '2024-03-09 15:03:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967523428', '1709906560937', '1709963638248', 1, '2024-03-09 14:58:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967528035', '1709903474181', '1709963638248', 0, '2024-03-09 14:58:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967533297', '1709903824403', '1709963638248', 0, '2024-03-09 14:58:53');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967539836', '1709963106823', '1709963638248', 0, '2024-03-09 14:58:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967549825', '1709901343387', '1709963638248', 0, '2024-03-09 14:59:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967554429', '1709906184558', '1709963638248', 0, '2024-03-09 14:59:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967559195', '1709901525538', '1709963638248', 0, '2024-03-09 14:59:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967565475', '1709728442684', '1709963638248', 0, '2024-03-09 14:59:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967565476', '1709728442684', '1709963638248', 0, '2024-03-09 14:59:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967570907', '1709903878483', '1709963638248', 0, '2024-03-09 14:59:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967575472', '1709729476568', '1709963638248', 0, '2024-03-09 14:59:35');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967583249', '1709904597222', '1709963638248', 0, '2024-03-09 14:59:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967588483', '1709904846470', '1709963638248', 0, '2024-03-09 14:59:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967791096', '1709902167810', '1709963638248', 1, '2024-03-09 15:03:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967821638', '1709727694829', '1709963638248', 2, '2024-03-09 15:03:51');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967828822', '1709732612806', '1709963638248', 0, '2024-03-09 15:03:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967838299', '1709906040181', '1709963638248', 0, '2024-03-09 15:03:58');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967839975', '1709731599134', '1709963638248', 0, '2024-03-09 15:03:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967901675', '1709966991829', '1709962443377', 1, '2024-03-09 15:05:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967906124', '1709901227938', '1709962443377', 1, '2024-03-09 15:06:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967909540', '1709901682371', '1709962443377', 0, '2024-03-09 15:05:09');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967912371', '1709734139055', '1709962443377', 0, '2024-03-09 15:05:12');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967915953', '1709902167810', '1709962443377', 0, '2024-03-09 15:05:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967924488', '1709904147909', '1709962443377', 0, '2024-03-09 15:05:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967933365', '1709966796036', '1709962443377', 0, '2024-03-09 15:05:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967937682', '1709728917857', '1709962443377', 0, '2024-03-09 15:05:37');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967941933', '1709730058428', '1709962443377', 0, '2024-03-09 15:05:41');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967946102', '1709731471688', '1709962443377', 0, '2024-03-09 15:05:46');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967965076', '1709902491136', '1709962443377', 0, '2024-03-09 15:06:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967983735', '1709906560937', '1709962443377', 0, '2024-03-09 15:06:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967987887', '1709903474181', '1709962443377', 0, '2024-03-09 15:06:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967993284', '1709963106823', '1709962443377', 0, '2024-03-09 15:06:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709967998139', '1709962703249', '1709962443377', 0, '2024-03-09 15:06:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968006651', '1709902212933', '1709962443377', 1, '2024-03-09 15:06:46');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968011390', '1709902846546', '1709962443377', 0, '2024-03-09 15:06:51');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968022801', '1709728442684', '1709962443377', 1, '2024-03-09 15:07:02');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968028368', '1709729476568', '1709962443377', 0, '2024-03-09 15:07:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968037026', '1709901525538', '1709962443377', 1, '2024-03-09 15:07:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968041726', '1709901732306', '1709962443377', 0, '2024-03-09 15:07:21');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968045907', '1709906184558', '1709962443377', 0, '2024-03-09 15:07:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968051072', '1709906040181', '1709962443377', 0, '2024-03-09 15:07:31');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968056217', '1709733037458', '1709962443377', 0, '2024-03-09 15:07:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709968065532', '1709905956013', '1709962443377', 3, '2024-03-09 15:13:54');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969013131', '1709968946947', '1709968338867', 6, '2024-03-09 15:46:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969028040', '1709964424184', '1709968338867', 2, '2024-03-09 15:55:46');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969032232', '1709963889528', '1709968338867', 0, '2024-03-09 15:23:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969041667', '1709966991829', '1709968338867', 0, '2024-03-09 15:24:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969041668', '1709966991829', '1709968338867', 0, '2024-03-09 15:24:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969045361', '1709902167810', '1709968338867', 0, '2024-03-09 15:24:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969051396', '1709901227938', '1709968338867', 0, '2024-03-09 15:24:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969060776', '1709964765739', '1709968338867', 0, '2024-03-09 15:24:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969060777', '1709964765739', '1709968338867', 0, '2024-03-09 15:24:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969067227', '1709729818524', '1709968338867', 1, '2024-03-09 15:24:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969073782', '1709962703249', '1709968338867', 0, '2024-03-09 15:24:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969082643', '1709966796036', '1709968338867', 0, '2024-03-09 15:24:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969086159', '1709968992295', '1709968338867', 2, '2024-03-09 15:47:21');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969090160', '1709731471688', '1709968338867', 0, '2024-03-09 15:24:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969095916', '1709727158279', '1709968338867', 0, '2024-03-09 15:24:55');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969103108', '1709905956013', '1709968338867', 3, '2024-03-09 15:55:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969103109', '1709905956013', '1709968338867', 3, '2024-03-09 15:55:57');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969111661', '1709906040181', '1709968338867', 0, '2024-03-09 15:25:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969115941', '1709731599134', '1709968338867', 0, '2024-03-09 15:25:15');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969124717', '1709906560937', '1709968338867', 1, '2024-03-09 15:25:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969128129', '1709903474181', '1709968338867', 0, '2024-03-09 15:25:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969136357', '1709732612806', '1709968338867', 1, '2024-03-09 15:25:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709969143378', '1709727694829', '1709968338867', 0, '2024-03-09 15:25:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709970487095', '1709901189845', '1709968338867', 0, '2024-03-09 15:48:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709970487099', '1709901189845', '1709968338867', 0, '2024-03-09 15:48:07');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972060596', '1709964424184', '1709820642242', 2, '2024-03-09 16:15:00');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972103942', '1709963889528', '1709820642242', 0, '2024-03-09 16:15:03');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972105841', '1709968946947', '1709820642242', 0, '2024-03-09 16:15:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972113735', '1709970879644', '1709820642242', 1, '2024-03-09 16:15:13');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972161375', '1709901682371', '1709820642242', 0, '2024-03-09 16:16:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972161377', '1709901682371', '1709820642242', 0, '2024-03-09 16:16:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972253109', '1709970879644', '1709968523870', 1, '2024-03-09 16:17:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972256254', '1709729818524', '1709968523870', 0, '2024-03-09 16:17:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972259583', '1709962703249', '1709968523870', 0, '2024-03-09 16:17:39');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972263526', '1709729514660', '1709968523870', 0, '2024-03-09 16:17:43');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972268168', '1709964765739', '1709968523870', 0, '2024-03-09 16:17:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972273762', '1709968992295', '1709968523870', 1, '2024-03-09 16:17:53');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972276523', '1709731471688', '1709968523870', 0, '2024-03-09 16:17:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972279149', '1709728917857', '1709968523870', 0, '2024-03-09 16:17:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972281878', '1709730058428', '1709968523870', 0, '2024-03-09 16:18:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972285221', '1709966796036', '1709968523870', 0, '2024-03-09 16:18:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972288458', '1709727158279', '1709968523870', 0, '2024-03-09 16:18:08');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972292708', '1709728097869', '1709968523870', 1, '2024-03-09 16:18:24');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972297055', '1709902491136', '1709968523870', 0, '2024-03-09 16:18:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972308587', '1709968946947', '1709968523870', 1, '2024-03-09 16:18:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972313034', '1709731599134', '1709968523870', 0, '2024-03-09 16:18:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972318148', '1709963889528', '1709968523870', 0, '2024-03-09 16:18:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972322031', '1709901189845', '1709968523870', 0, '2024-03-09 16:18:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972328809', '1709906560937', '1709968523870', 0, '2024-03-09 16:18:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972332258', '1709903474181', '1709968523870', 0, '2024-03-09 16:18:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972341352', '1709903824403', '1709968523870', 0, '2024-03-09 16:19:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972350273', '1709904846470', '1709968523870', 0, '2024-03-09 16:19:10');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972354281', '1709904597222', '1709968523870', 0, '2024-03-09 16:19:14');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972401338', '1709966991829', '1709968523870', 1, '2024-03-09 16:20:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972405003', '1709902167810', '1709968523870', 0, '2024-03-09 16:20:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972410468', '1709963106823', '1709968523870', 0, '2024-03-09 16:20:10');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972410470', '1709963106823', '1709968523870', 0, '2024-03-09 16:20:10');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972420047', '1709905956013', '1709968523870', 3, '2024-03-09 16:21:45');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972427246', '1709904147909', '1709968523870', 1, '2024-03-09 16:20:27');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972432572', '1709727360760', '1709968523870', 0, '2024-03-09 16:20:32');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972459902', '1709902846546', '1709968523870', 0, '2024-03-09 16:20:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972464366', '1709902212933', '1709968523870', 0, '2024-03-09 16:21:04');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972472551', '1709729476568', '1709968523870', 1, '2024-03-09 16:21:12');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972479418', '1709728442684', '1709968523870', 0, '2024-03-09 16:21:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972548901', '1709964424184', '1709968523870', 1, '2024-03-09 16:22:28');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972692818', '1709905956013', '1709726632137', 40, '2024-12-28 13:08:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972695794', '1709966796036', '1709726632137', 17, '2024-12-27 22:21:13');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972711834', '1709964424184', '1709726632137', 56, '2025-01-03 21:28:11');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972737687', '1709901189845', '1709726632137', 8, '2024-07-11 20:29:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972741947', '1709906040181', '1709726632137', 6, '2025-01-03 21:42:48');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972868456', '1709964765739', '1709726632137', 36, '2025-01-03 21:40:58');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709972877270', '1709970879644', '1709726632137', 49, '2025-01-03 21:42:35');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709973147100', '1709963889528', '1709726632137', 5, '2024-12-27 22:47:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1709973151309', '1709963106823', '1709726632137', 34, '2025-01-03 21:56:54');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710047038394', '1709962703249', '1709726632137', 11, '2025-01-03 21:27:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710049036337', '1710049033545', '1709968523870', 0, '2024-03-10 13:37:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710049203181', '1709968992295', '1709726632137', 23, '2024-12-27 22:44:29');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710050135273', '1709906560937', '1709726632137', 12, '2025-01-03 21:51:12');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710050240328', '1710049033545', '1709820642242', 2, '2024-03-10 13:57:26');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710050270682', '1710049033545', '1709968338867', 0, '2024-03-10 13:57:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710050270683', '1710049033545', '1709968338867', 0, '2024-03-10 13:57:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710051377181', '1709901682371', '1709726632137', 2, '2024-12-27 22:37:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710052100068', '1709968946947', '1709726632137', 41, '2025-01-03 21:37:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710052600633', '1709970879644', '1709968099989', 1, '2024-03-10 14:36:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710052606878', '1709963889528', '1709968099989', 1, '2024-03-10 14:36:46');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710052613396', '1709968946947', '1709968099989', 0, '2024-03-10 14:36:53');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710052736944', '1710049033545', '1709726632137', 49, '2024-12-27 21:55:03');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710053821695', '1709727694829', '1709968099989', 0, '2024-03-10 14:57:01');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710056297403', '1709727158279', '1709968099989', 1, '2024-03-10 15:38:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710161093031', '1710054012961', '1709726632137', 39, '2025-01-03 21:42:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1710161093034', '1710054012961', '1709726632137', 39, '2025-01-03 21:42:44');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1711180894829', '1709968946947', '1709726637539', 1, '2024-03-23 16:01:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1711181314939', '1709905956013', '1709726637539', 1, '2024-03-23 16:08:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1711181327458', '1709904846470', '1709726637539', 1, '2024-03-23 16:08:47');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714543187686', '1709966991829', '1709726632137', 50, '2024-12-27 22:21:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714544760375', '1709968946947', '1714543289857', 7, '2024-05-01 14:27:35');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714544999013', '1710054012961', '1714543289857', 3, '2024-05-01 14:48:04');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714545590497', '1709970879644', '1714543289857', 1, '2024-05-01 14:39:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714545764174', '1714545759293', '1714543289857', 5, '2024-05-01 15:00:58');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546096947', '1709966991829', '1714543289857', 1, '2024-05-01 14:48:16');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546105746', '1709966796036', '1714543289857', 1, '2024-05-01 14:48:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546114965', '1709729476568', '1714543289857', 1, '2024-05-01 14:48:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546525728', '1714546475533', '1714543289857', 1, '2024-05-01 14:55:25');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546592642', '1709903474181', '1714543289857', 0, '2024-05-01 14:56:32');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546602411', '1709903824403', '1714543289857', 0, '2024-05-01 14:56:42');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714546910521', '1709902212933', '1714543289857', 0, '2024-05-01 15:01:50');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714547183322', '1709902167810', '1714543289857', 0, '2024-05-01 15:06:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714547297423', '1709905956013', '1714543289857', 0, '2024-05-01 15:08:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714547297426', '1709905956013', '1714543289857', 0, '2024-05-01 15:08:17');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549238788', '1709904846470', '1714543289857', 0, '2024-05-01 15:40:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549238790', '1709904846470', '1714543289857', 0, '2024-05-01 15:40:38');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549548051', '1714549541546', '1714549381813', 6, '2024-05-01 16:25:33');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549792613', '1714546475533', '1714549381813', 1, '2024-05-01 15:49:52');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549796054', '1709903474181', '1714549381813', 2, '2024-05-01 15:55:56');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549819375', '1709962703249', '1714549381813', 0, '2024-05-01 15:50:19');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549940726', '1709964765739', '1714549381813', 0, '2024-05-01 15:52:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549940729', '1709964765739', '1714549381813', 0, '2024-05-01 15:52:20');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714549960060', '1709964424184', '1714549381813', 0, '2024-05-01 15:52:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714550002974', '1709730689098', '1714549381813', 0, '2024-05-01 15:53:22');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714550002975', '1709730689098', '1714549381813', 0, '2024-05-01 15:53:22');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714550006822', '1709728788586', '1714549381813', 0, '2024-05-01 15:53:26');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714550019437', '1709906040181', '1714549381813', 3, '2024-05-01 15:55:23');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714550134297', '1709905956013', '1714549381813', 1, '2024-05-01 15:55:34');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714552564751', '1709734139055', '1709726632137', 4, '2025-01-03 21:49:05');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714632142200', '1714546475533', '1709726632137', 66, '2025-01-03 22:05:13');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714632239225', '1709733037458', '1714543289857', 1, '2024-05-02 14:43:59');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714632253391', '1709727694829', '1714543289857', 0, '2024-05-02 14:44:13');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714632321424', '1714545759293', '1709726632137', 25, '2024-12-27 22:46:06');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1714639768182', '1714549541546', '1709726632137', 157, '2024-12-28 13:07:36');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1735304881818', '1735304876456', '1709726632137', 45, '2025-01-03 19:59:40');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1735306705810', '1735306697868', '1709726632137', 20, '2025-01-03 21:38:30');
INSERT INTO `history` (`id`, `vId`, `userId`, `count`, `createTime`) VALUES ('1735310379061', '1709902212933', '1709726632137', 1, '2025-01-03 21:43:00');
COMMIT;

-- ----------------------------
-- Table structure for later
-- ----------------------------
DROP TABLE IF EXISTS `later`;
CREATE TABLE `later` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`vId`,`userId`) USING BTREE,
  KEY `later_ibfk_2` (`userId`) USING BTREE,
  CONSTRAINT `later_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `later_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of later
-- ----------------------------
BEGIN;
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970482797', '1709728442684', '1709968338867', '2024-03-09 15:48:02', '2024-03-09 15:48:02');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709903290780', '1709730689098', '1709902530670', '2024-03-08 21:08:10', '2024-03-08 21:08:10');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970477481', '1709901189845', '1709968338867', '2024-03-09 15:47:57', '2024-03-09 15:47:57');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709903286764', '1709901682371', '1709902530670', '2024-03-08 21:08:06', '2024-03-08 21:08:06');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970474796', '1709902491136', '1709968338867', '2024-03-09 15:47:54', '2024-03-09 15:47:54');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709903284731', '1709902846546', '1709902530670', '2024-03-08 21:08:04', '2024-03-08 21:08:04');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709903282714', '1709903103144', '1709902530670', '2024-03-08 21:08:02', '2024-03-08 21:08:02');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970472397', '1709903824403', '1709968338867', '2024-03-09 15:47:52', '2024-03-09 15:47:52');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970470514', '1709903878483', '1709968338867', '2024-03-09 15:47:50', '2024-03-09 15:47:50');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970458480', '1709904597222', '1709968338867', '2024-03-09 15:47:38', '2024-03-09 15:47:38');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710052208413', '1709962703249', '1709726632137', '2024-03-10 14:30:08', '2024-03-10 14:30:08');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710052205960', '1709963106823', '1709726632137', '2024-03-10 14:30:05', '2024-03-10 14:30:05');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970454763', '1709963889528', '1709968338867', '2024-03-09 15:47:34', '2024-03-09 15:47:34');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970452715', '1709964424184', '1709968338867', '2024-03-09 15:47:32', '2024-03-09 15:47:32');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710053616745', '1709964765739', '1709726632137', '2024-03-10 14:53:36', '2024-03-10 14:53:36');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710053614082', '1709966991829', '1709726632137', '2024-03-10 14:53:34', '2024-03-10 14:53:34');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970449731', '1709966991829', '1709968338867', '2024-03-09 15:47:29', '2024-03-09 15:47:29');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710053732504', '1709968946947', '1709726632137', '2024-03-10 14:55:32', '2024-03-10 14:55:32');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970447249', '1709968946947', '1709968338867', '2024-03-09 15:47:27', '2024-03-09 15:47:27');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709972090943', '1709968992295', '1709820642242', '2024-03-09 16:14:50', '2024-03-09 16:14:50');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709970445514', '1709968992295', '1709968338867', '2024-03-09 15:47:25', '2024-03-09 15:47:25');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1709972088878', '1709970879644', '1709820642242', '2024-03-09 16:14:48', '2024-03-09 16:14:48');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710052599817', '1709970879644', '1709968099989', '2024-03-10 14:36:39', '2024-03-10 14:36:39');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710052598215', '1710049033545', '1709968099989', '2024-03-10 14:36:38', '2024-03-10 14:36:38');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1710054362863', '1710054012961', '1710054197921', '2024-03-10 15:06:02', '2024-03-10 15:06:02');
INSERT INTO `later` (`id`, `vId`, `userId`, `createTime`, `updateTime`) VALUES ('1714552252579', '1714545759293', '1714549381813', '2024-05-01 16:30:52', '2024-05-01 16:30:52');
COMMIT;

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` char(50) NOT NULL,
  `userId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `log_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of log
-- ----------------------------
BEGIN;
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709726644188', '1709726632137', '2024-03-06 20:04:04', '2024-03-06 20:04:04');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709726723145', '1709726637539', '2024-03-06 20:05:23', '2024-03-06 20:05:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709728505411', '1709728495272', '2024-03-06 20:35:05', '2024-03-06 20:35:05');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709729539043', '1709729533921', '2024-03-06 20:52:19', '2024-03-06 20:52:19');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709730205182', '1709730195053', '2024-03-06 21:03:25', '2024-03-06 21:03:25');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709731732921', '1709726632137', '2024-03-06 21:28:52', '2024-03-06 21:28:52');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709731819688', '1709728495272', '2024-03-06 21:30:19', '2024-03-06 21:30:19');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709733347788', '1709733343047', '2024-03-06 21:55:47', '2024-03-06 21:55:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709734566201', '1709726632137', '2024-03-06 22:16:06', '2024-03-06 22:16:06');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709735046662', '1709730195053', '2024-03-06 22:24:06', '2024-03-06 22:24:06');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709819764534', '1709726632137', '2024-03-07 21:56:04', '2024-03-07 21:56:04');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709820025507', '1709726632137', '2024-03-07 22:00:25', '2024-03-07 22:00:25');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709820647817', '1709820642242', '2024-03-07 22:10:47', '2024-03-07 22:10:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709821281636', '1709726632137', '2024-03-07 22:21:21', '2024-03-07 22:21:21');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709900967200', '1709820642242', '2024-03-08 20:29:27', '2024-03-08 20:29:27');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709901989868', '1709733343047', '2024-03-08 20:46:29', '2024-03-08 20:46:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709902094582', '1709820642242', '2024-03-08 20:48:14', '2024-03-08 20:48:14');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709902535721', '1709902530670', '2024-03-08 20:55:35', '2024-03-08 20:55:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709902988563', '1709729533921', '2024-03-08 21:03:08', '2024-03-08 21:03:08');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709903796006', '1709726632137', '2024-03-08 21:16:36', '2024-03-08 21:16:36');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709904303154', '1709728495272', '2024-03-08 21:25:03', '2024-03-08 21:25:03');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709905315433', '1709820642242', '2024-03-08 21:41:55', '2024-03-08 21:41:55');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709905422393', '1709726632137', '2024-03-08 21:43:42', '2024-03-08 21:43:42');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709905513825', '1709733343047', '2024-03-08 21:45:13', '2024-03-08 21:45:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709905651792', '1709905648920', '2024-03-08 21:47:31', '2024-03-08 21:47:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709906297831', '1709820642242', '2024-03-08 21:58:17', '2024-03-08 21:58:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709962450491', '1709962443377', '2024-03-09 13:34:10', '2024-03-09 13:34:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709963691130', '1709963638248', '2024-03-09 13:54:51', '2024-03-09 13:54:51');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709964353997', '1709964349418', '2024-03-09 14:05:53', '2024-03-09 14:05:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965038266', '1709730380639', '2024-03-09 14:17:18', '2024-03-09 14:17:18');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965188008', '1709730380639', '2024-03-09 14:19:48', '2024-03-09 14:19:48');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965488949', '1709730372557', '2024-03-09 14:24:48', '2024-03-09 14:24:48');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965500255', '1709730372557', '2024-03-09 14:25:00', '2024-03-09 14:25:00');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965758546', '1709730367418', '2024-03-09 14:29:18', '2024-03-09 14:29:18');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965827871', '1709730362355', '2024-03-09 14:30:27', '2024-03-09 14:30:27');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965949867', '1709730357380', '2024-03-09 14:32:29', '2024-03-09 14:32:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709965991321', '1709730195053', '2024-03-09 14:33:11', '2024-03-09 14:33:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709966657632', '1709964349418', '2024-03-09 14:44:17', '2024-03-09 14:44:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709967311466', '1709726632137', '2024-03-09 14:55:11', '2024-03-09 14:55:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709967337968', '1709964349418', '2024-03-09 14:55:37', '2024-03-09 14:55:37');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709967431417', '1709963638248', '2024-03-09 14:57:11', '2024-03-09 14:57:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709967896453', '1709962443377', '2024-03-09 15:04:56', '2024-03-09 15:04:56');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709968104637', '1709968099989', '2024-03-09 15:08:24', '2024-03-09 15:08:24');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709968343832', '1709968338867', '2024-03-09 15:12:23', '2024-03-09 15:12:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709968529647', '1709968523870', '2024-03-09 15:15:29', '2024-03-09 15:15:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709968598401', '1709968099989', '2024-03-09 15:16:38', '2024-03-09 15:16:38');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709969009261', '1709968338867', '2024-03-09 15:23:29', '2024-03-09 15:23:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709969657322', '1709968338867', '2024-03-09 15:34:17', '2024-03-09 15:34:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709970506848', '1709726637539', '2024-03-09 15:48:26', '2024-03-09 15:48:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709970735184', '1709964349418', '2024-03-09 15:52:15', '2024-03-09 15:52:15');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709970849867', '1709963638248', '2024-03-09 15:54:09', '2024-03-09 15:54:09');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709971016915', '1709726632137', '2024-03-09 15:56:56', '2024-03-09 15:56:56');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709971138313', '1709728495272', '2024-03-09 15:58:58', '2024-03-09 15:58:58');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709971202020', '1709820642242', '2024-03-09 16:00:02', '2024-03-09 16:00:02');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709971902431', '1709820642242', '2024-03-09 16:11:42', '2024-03-09 16:11:42');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709972242536', '1709968523870', '2024-03-09 16:17:22', '2024-03-09 16:17:22');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1709972688485', '1709726632137', '2024-03-09 16:24:48', '2024-03-09 16:24:48');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047027032', '1709726637539', '2024-03-10 13:03:47', '2024-03-10 13:03:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047240263', '1709726632137', '2024-03-10 13:07:20', '2024-03-10 13:07:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047483331', '1709728495272', '2024-03-10 13:11:23', '2024-03-10 13:11:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047514060', '1709726632137', '2024-03-10 13:11:54', '2024-03-10 13:11:54');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047555336', '1709726632137', '2024-03-10 13:12:35', '2024-03-10 13:12:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710047891658', '1709726632137', '2024-03-10 13:18:11', '2024-03-10 13:18:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710048713786', '1709968523870', '2024-03-10 13:31:53', '2024-03-10 13:31:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710049046525', '1709726632137', '2024-03-10 13:37:26', '2024-03-10 13:37:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050156358', '1709820642242', '2024-03-10 13:55:56', '2024-03-10 13:55:56');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050268745', '1709968338867', '2024-03-10 13:57:48', '2024-03-10 13:57:48');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050429263', '1709726637539', '2024-03-10 14:00:29', '2024-03-10 14:00:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050446334', '1709726632137', '2024-03-10 14:00:46', '2024-03-10 14:00:46');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050591517', '1709726632137', '2024-03-10 14:03:11', '2024-03-10 14:03:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050620422', '1709726632137', '2024-03-10 14:03:40', '2024-03-10 14:03:40');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050657194', '1709726632137', '2024-03-10 14:04:17', '2024-03-10 14:04:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050666558', '1709726632137', '2024-03-10 14:04:26', '2024-03-10 14:04:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050674826', '1709726632137', '2024-03-10 14:04:34', '2024-03-10 14:04:34');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050699200', '1709726632137', '2024-03-10 14:04:59', '2024-03-10 14:04:59');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050708208', '1709726632137', '2024-03-10 14:05:08', '2024-03-10 14:05:08');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050709941', '1709726632137', '2024-03-10 14:05:09', '2024-03-10 14:05:09');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050710637', '1709726632137', '2024-03-10 14:05:10', '2024-03-10 14:05:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050711203', '1709726632137', '2024-03-10 14:05:11', '2024-03-10 14:05:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050711525', '1709726632137', '2024-03-10 14:05:11', '2024-03-10 14:05:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050711751', '1709726632137', '2024-03-10 14:05:11', '2024-03-10 14:05:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050711955', '1709726632137', '2024-03-10 14:05:11', '2024-03-10 14:05:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050745438', '1709726637539', '2024-03-10 14:05:45', '2024-03-10 14:05:45');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710050765605', '1709726632137', '2024-03-10 14:06:05', '2024-03-10 14:06:05');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710051354598', '1709726632137', '2024-03-10 14:15:54', '2024-03-10 14:15:54');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710051527803', '1709726637539', '2024-03-10 14:18:47', '2024-03-10 14:18:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710052096768', '1709726632137', '2024-03-10 14:28:16', '2024-03-10 14:28:16');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710052430355', '1709728495272', '2024-03-10 14:33:50', '2024-03-10 14:33:50');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710052536105', '1709968099989', '2024-03-10 14:35:36', '2024-03-10 14:35:36');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710053537345', '1709726632137', '2024-03-10 14:52:17', '2024-03-10 14:52:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710053818063', '1709968099989', '2024-03-10 14:56:58', '2024-03-10 14:56:58');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710053894310', '1709726632137', '2024-03-10 14:58:14', '2024-03-10 14:58:14');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710053898176', '1709726637539', '2024-03-10 14:58:18', '2024-03-10 14:58:18');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710054204882', '1710054197921', '2024-03-10 15:03:24', '2024-03-10 15:03:24');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710054370566', '1709726632137', '2024-03-10 15:06:10', '2024-03-10 15:06:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710057375374', '1709726632137', '2024-03-10 15:56:15', '2024-03-10 15:56:15');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710057420634', '1709726637539', '2024-03-10 15:57:00', '2024-03-10 15:57:00');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710058684910', '1709726637539', '2024-03-10 16:18:04', '2024-03-10 16:18:04');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710058731831', '1709726632137', '2024-03-10 16:18:51', '2024-03-10 16:18:51');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710159533522', '1709726632137', '2024-03-11 20:18:53', '2024-03-11 20:18:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710159551652', '1709726637539', '2024-03-11 20:19:11', '2024-03-11 20:19:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710247247927', '1709726632137', '2024-03-12 20:40:47', '2024-03-12 20:40:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710247470350', '1709726637539', '2024-03-12 20:44:30', '2024-03-12 20:44:30');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710329913878', '1709726632137', '2024-03-13 19:38:33', '2024-03-13 19:38:33');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710331813523', '1709726632137', '2024-03-13 20:10:13', '2024-03-13 20:10:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710414674041', '1709726632137', '2024-03-14 19:11:14', '2024-03-14 19:11:14');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710513140529', '1709726632137', '2024-03-15 22:32:20', '2024-03-15 22:32:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710514126476', '1709726637539', '2024-03-15 22:48:46', '2024-03-15 22:48:46');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710514310568', '1709726632137', '2024-03-15 22:51:50', '2024-03-15 22:51:50');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710578666882', '1709726632137', '2024-03-16 16:44:26', '2024-03-16 16:44:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710761906194', '1709726632137', '2024-03-18 19:38:26', '2024-03-18 19:38:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710854952942', '1709726637539', '2024-03-19 21:29:12', '2024-03-19 21:29:12');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1710941212176', '1709726632137', '2024-03-20 21:26:52', '2024-03-20 21:26:52');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027144332', '1709726632137', '2024-03-21 21:19:04', '2024-03-21 21:19:04');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027197544', '1709726632137', '2024-03-21 21:19:57', '2024-03-21 21:19:57');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027224394', '1709726632137', '2024-03-21 21:20:24', '2024-03-21 21:20:24');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027253022', '1709726632137', '2024-03-21 21:20:53', '2024-03-21 21:20:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027273689', '1709726632137', '2024-03-21 21:21:13', '2024-03-21 21:21:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711027298820', '1709726632137', '2024-03-21 21:21:38', '2024-03-21 21:21:38');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711174494375', '1709726632137', '2024-03-23 14:14:54', '2024-03-23 14:14:54');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711175015640', '1709726632137', '2024-03-23 14:23:35', '2024-03-23 14:23:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180069467', '1709726632137', '2024-03-23 15:47:49', '2024-03-23 15:47:49');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180097858', '1709726632137', '2024-03-23 15:48:17', '2024-03-23 15:48:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180621557', '1709726632137', '2024-03-23 15:57:01', '2024-03-23 15:57:01');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180640999', '1709726632137', '2024-03-23 15:57:20', '2024-03-23 15:57:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180669512', '1709726632137', '2024-03-23 15:57:49', '2024-03-23 15:57:49');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180872503', '1710054197921', '2024-03-23 16:01:12', '2024-03-23 16:01:12');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711180891053', '1709726637539', '2024-03-23 16:01:31', '2024-03-23 16:01:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711181413931', '1709726632137', '2024-03-23 16:10:13', '2024-03-23 16:10:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711181556425', '1709726632137', '2024-03-23 16:12:36', '2024-03-23 16:12:36');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711260747080', '1709726632137', '2024-03-24 14:12:27', '2024-03-24 14:12:27');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711260814141', '1709726632137', '2024-03-24 14:13:34', '2024-03-24 14:13:34');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711261493865', '1709726632137', '2024-03-24 14:24:53', '2024-03-24 14:24:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711261732998', '1709726632137', '2024-03-24 14:28:52', '2024-03-24 14:28:52');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711261836314', '1709726632137', '2024-03-24 14:30:36', '2024-03-24 14:30:36');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711261887712', '1709726632137', '2024-03-24 14:31:27', '2024-03-24 14:31:27');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711264038292', '1709726632137', '2024-03-24 15:07:18', '2024-03-24 15:07:18');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711264090225', '1709726632137', '2024-03-24 15:08:10', '2024-03-24 15:08:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711264296960', '1709726632137', '2024-03-24 15:11:36', '2024-03-24 15:11:36');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711264833388', '1709726632137', '2024-03-24 15:20:33', '2024-03-24 15:20:33');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711264957785', '1709726632137', '2024-03-24 15:22:37', '2024-03-24 15:22:37');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711265071276', '1709726632137', '2024-03-24 15:24:31', '2024-03-24 15:24:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711266360857', '1709726632137', '2024-03-24 15:46:00', '2024-03-24 15:46:00');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711266640322', '1709726632137', '2024-03-24 15:50:40', '2024-03-24 15:50:40');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711625015396', '1709726632137', '2024-03-28 19:23:35', '2024-03-28 19:23:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711629662911', '1709726632137', '2024-03-28 20:41:02', '2024-03-28 20:41:02');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711629753806', '1709726632137', '2024-03-28 20:42:33', '2024-03-28 20:42:33');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711630095123', '1709726632137', '2024-03-28 20:48:15', '2024-03-28 20:48:15');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711630522345', '1709726632137', '2024-03-28 20:55:22', '2024-03-28 20:55:22');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1711630894336', '1709726637539', '2024-03-28 21:01:34', '2024-03-28 21:01:34');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712059806933', '1709726632137', '2024-04-02 20:10:06', '2024-04-02 20:10:06');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712059820871', '1709726632137', '2024-04-02 20:10:20', '2024-04-02 20:10:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712060011024', '1709729533921', '2024-04-02 20:13:31', '2024-04-02 20:13:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712060477079', '1709728495272', '2024-04-02 20:21:17', '2024-04-02 20:21:17');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712060619837', '1709726632137', '2024-04-02 20:23:39', '2024-04-02 20:23:39');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712061599635', '1709726632137', '2024-04-02 20:39:59', '2024-04-02 20:39:59');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712061845672', '1709726632137', '2024-04-02 20:44:05', '2024-04-02 20:44:05');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712061909318', '1709726632137', '2024-04-02 20:45:09', '2024-04-02 20:45:09');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712061954826', '1709726632137', '2024-04-02 20:45:54', '2024-04-02 20:45:54');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712061991534', '1709726632137', '2024-04-02 20:46:31', '2024-04-02 20:46:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712062156493', '1709726632137', '2024-04-02 20:49:16', '2024-04-02 20:49:16');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712062293611', '1709726632137', '2024-04-02 20:51:33', '2024-04-02 20:51:33');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712062604226', '1709726632137', '2024-04-02 20:56:44', '2024-04-02 20:56:44');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1712062756935', '1709726632137', '2024-04-02 20:59:16', '2024-04-02 20:59:16');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1713270125275', '1709726632137', '2024-04-16 20:22:05', '2024-04-16 20:22:05');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714305441472', '1709726637539', '2024-04-28 19:57:21', '2024-04-28 19:57:21');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714305481904', '1709726637539', '2024-04-28 19:58:01', '2024-04-28 19:58:01');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714479637649', '1709726637539', '2024-04-30 20:20:37', '2024-04-30 20:20:37');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714481495201', '1709726632137', '2024-04-30 20:51:35', '2024-04-30 20:51:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714482733035', '1709726632137', '2024-04-30 21:12:13', '2024-04-30 21:12:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714485531630', '1709726637539', '2024-04-30 21:58:51', '2024-04-30 21:58:51');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714486883927', '1709726632137', '2024-04-30 22:21:23', '2024-04-30 22:21:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714487328517', '1709726632137', '2024-04-30 22:28:48', '2024-04-30 22:28:48');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714487521132', '1709726632137', '2024-04-30 22:32:01', '2024-04-30 22:32:01');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714487664908', '1709726632137', '2024-04-30 22:34:24', '2024-04-30 22:34:24');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714487723708', '1709726632137', '2024-04-30 22:35:23', '2024-04-30 22:35:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714487854726', '1709726632137', '2024-04-30 22:37:34', '2024-04-30 22:37:34');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714488271239', '1709726632137', '2024-04-30 22:44:31', '2024-04-30 22:44:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714543079875', '1709726632137', '2024-05-01 13:57:59', '2024-05-01 13:57:59');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714543127356', '1709726637539', '2024-05-01 13:58:47', '2024-05-01 13:58:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714543298059', '1714543289857', '2024-05-01 14:01:38', '2024-05-01 14:01:38');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714545055332', '1709726632137', '2024-05-01 14:30:55', '2024-05-01 14:30:55');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714545066896', '1714543289857', '2024-05-01 14:31:06', '2024-05-01 14:31:06');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714549393364', '1714549381813', '2024-05-01 15:43:13', '2024-05-01 15:43:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714552292836', '1709726632137', '2024-05-01 16:31:32', '2024-05-01 16:31:32');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714552322751', '1709726632137', '2024-05-01 16:32:02', '2024-05-01 16:32:02');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714552751477', '1709726632137', '2024-05-01 16:39:11', '2024-05-01 16:39:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714632140266', '1709726632137', '2024-05-02 14:42:20', '2024-05-02 14:42:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714632229021', '1714543289857', '2024-05-02 14:43:49', '2024-05-02 14:43:49');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714632447276', '1709726637539', '2024-05-02 14:47:27', '2024-05-02 14:47:27');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714632664166', '1709726632137', '2024-05-02 14:51:04', '2024-05-02 14:51:04');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714717136583', '1709726637539', '2024-05-03 14:18:56', '2024-05-03 14:18:56');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1714717951683', '1709726632137', '2024-05-03 14:32:31', '2024-05-03 14:32:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1716017768390', '1709726632137', '2024-05-18 15:36:08', '2024-05-18 15:36:08');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1716017795611', '1709726637539', '2024-05-18 15:36:35', '2024-05-18 15:36:35');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1719406073536', '1709726632137', '2024-06-26 20:47:53', '2024-06-26 20:47:53');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1720700757651', '1709726637539', '2024-07-11 20:25:57', '2024-07-11 20:25:57');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1720700835833', '1709726632137', '2024-07-11 20:27:15', '2024-07-11 20:27:15');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721049196847', '1709726632137', '2024-07-15 21:13:16', '2024-07-15 21:13:16');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721049261702', '1709726632137', '2024-07-15 21:14:21', '2024-07-15 21:14:21');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721049430003', '1709726632137', '2024-07-15 21:17:10', '2024-07-15 21:17:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721050135417', '1709726632137', '2024-07-15 21:28:55', '2024-07-15 21:28:55');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721050495625', '1709726632137', '2024-07-15 21:34:55', '2024-07-15 21:34:55');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721050514174', '1709726632137', '2024-07-15 21:35:14', '2024-07-15 21:35:14');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1721051131516', '1709726632137', '2024-07-15 21:45:31', '2024-07-15 21:45:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1726056511456', '1709726637539', '2024-09-11 20:08:31', '2024-09-11 20:08:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1726056527579', '1709726632137', '2024-09-11 20:08:47', '2024-09-11 20:08:47');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1726059428411', '1709726632137', '2024-09-11 20:57:08', '2024-09-11 20:57:08');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1726062199807', '1709726632137', '2024-09-11 21:43:19', '2024-09-11 21:43:19');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1731143647352', '1709726632137', '2024-11-09 17:14:07', '2024-11-09 17:14:07');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1731144550443', '1709726632137', '2024-11-09 17:29:10', '2024-11-09 17:29:10');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345043708', '1709726637539', '2024-11-23 14:57:23', '2024-11-23 14:57:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345051649', '1709726637539', '2024-11-23 14:57:31', '2024-11-23 14:57:31');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345121903', '1709726632137', '2024-11-23 14:58:41', '2024-11-23 14:58:41');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345319109', '1709726632137', '2024-11-23 15:01:59', '2024-11-23 15:01:59');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345349580', '1709726632137', '2024-11-23 15:02:29', '2024-11-23 15:02:29');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1732345379188', '1709726632137', '2024-11-23 15:02:59', '2024-11-23 15:02:59');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735043623669', '1709726637539', '2024-12-24 20:33:43', '2024-12-24 20:33:43');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735043662688', '1709726632137', '2024-12-24 20:34:22', '2024-12-24 20:34:22');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735044052659', '1709726632137', '2024-12-24 20:40:52', '2024-12-24 20:40:52');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735044694388', '1709726632137', '2024-12-24 20:51:34', '2024-12-24 20:51:34');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735299803103', '1709726632137', '2024-12-27 19:43:23', '2024-12-27 19:43:23');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735361817942', '1709726632137', '2024-12-28 12:56:57', '2024-12-28 12:56:57');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735904732728', '1709726637539', '2025-01-03 19:45:32', '2025-01-03 19:45:32');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735904771423', '1709726632137', '2025-01-03 19:46:11', '2025-01-03 19:46:11');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735906580778', '1709726632137', '2025-01-03 20:16:20', '2025-01-03 20:16:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735906588192', '1709726637539', '2025-01-03 20:16:28', '2025-01-03 20:16:28');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735909280990', '1709726632137', '2025-01-03 21:01:20', '2025-01-03 21:01:20');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735909286484', '1709726637539', '2025-01-03 21:01:26', '2025-01-03 21:01:26');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735909556978', '1709726637539', '2025-01-03 21:05:56', '2025-01-03 21:05:56');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735910382174', '1735910367763', '2025-01-03 21:19:42', '2025-01-03 21:19:42');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735910386771', '1709726637539', '2025-01-03 21:19:46', '2025-01-03 21:19:46');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735910446185', '1709726632137', '2025-01-03 21:20:46', '2025-01-03 21:20:46');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735910709523', '1709726637539', '2025-01-03 21:25:09', '2025-01-03 21:25:09');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735910803163', '1709726637539', '2025-01-03 21:26:43', '2025-01-03 21:26:43');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735911673220', '1709726637539', '2025-01-03 21:41:13', '2025-01-03 21:41:13');
INSERT INTO `log` (`id`, `userId`, `createTime`, `updateTime`) VALUES ('1735911900323', '1709726637539', '2025-01-03 21:45:00', '2025-01-03 21:45:00');
COMMIT;

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `vid` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `title` (`title`) USING BTREE,
  KEY `vid` (`vid`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  KEY `cId` (`cId`) USING BTREE,
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`vid`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_ibfk_3` FOREIGN KEY (`cId`) REFERENCES `channel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of moment
-- ----------------------------
BEGIN;
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709967156435', '慢慢人生路', '豫章故郡，洪都新府。星分翼轸(zhěn)，地接衡庐。襟三江而带五湖，控蛮荆而引瓯(ōu)越。物华天宝，龙光射牛斗之墟;人杰地灵，徐孺下陈蕃(fān)之榻。雄州雾列，俊采星驰。台隍(huáng)枕夷夏之交，宾主尽东南之美。都督阎公之雅望', '1709963106823', '1709964349418', '1709964349422', '2024-03-09 14:52:36', '2024-03-09 14:52:36');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970780158', '学家王勃创作的一篇骈文', '眺望的广远，扣紧秋日，景色鲜明；再从宴会娱游写到人生遇合，抒发身世之感；接着写作者的遭遇并表白要自励志节，最后以应命赋诗和自谦之辞作结', '1709966991829', '1709964349418', '1709964349422', '2024-03-09 15:53:00', '2024-03-09 15:53:00');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970801046', '洪都新府。星分翼轸(zhěn)，地接衡庐', '主尽东南之美。都督阎公之雅望，棨(qǐ )戟(j ǐ)遥临;宇文新州之懿(yì)范，襜(chān)帷(wéi)暂驻。十旬休假，胜友如云；千里逢迎', '1709963106823', '1709964349418', '1709964349422', '2024-03-09 15:53:21', '2024-03-09 15:53:21');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970824150', '川泽纡(yū)其骇瞩。闾(lǘ)阎(yán) 扑地', '怀投笔，慕宗悫(què)之长风。舍簪(zān)笏(hù)于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨(tāo)陪鲤对', '1709964424184', '1709964349418', '1709964349422', '2024-03-09 15:53:44', '2024-03-09 15:53:44');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970837130', '极娱游于暇日。天高地迥', '一介书生。无路请缨，等终军之弱冠;有怀投笔，慕宗悫(què)之长风。舍簪(zān)笏(hù)于百龄，奉晨昏于万里', '1709903474181', '1709964349418', '1709964349422', '2024-03-09 15:53:57', '2024-03-09 15:53:57');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970875677', '穷岛屿之萦(yíng)回；桂殿兰宫，即冈峦之体势', '原旷其盈视，川泽纡(yū)其骇瞩。闾(lǘ)阎(yán) 扑地，钟鸣鼎食之家；舸(gě)舰弥津，青雀黄龙之舳(zhú)。云销雨霁(jì)，彩彻区明', '1709962703249', '1709963638248', '1709963638255', '2024-03-09 15:54:35', '2024-03-09 15:54:35');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970919010', '气凌彭泽之樽(zūn)；邺(yè)水朱华', '九月，序属三秋。潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长洲，', '1709906040181', '1709963638248', '1709963638255', '2024-03-09 15:55:19', '2024-03-09 15:55:19');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970937610', '钟鸣鼎食之家；舸(gě)舰弥津', '。潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄;飞阁流丹，下临无地。鹤汀(tīng)凫(fú )渚(zhǔ)，穷岛屿之萦(yíng)回', '1709728097869', '1709963638248', '1709963638255', '2024-03-09 15:55:37', '2024-03-09 15:55:37');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709970978994', '极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷', '(fú )渚(zhǔ)，穷岛屿之萦(yíng)回；桂殿兰宫，即冈峦之体势。披绣闼(tà)，俯雕甍(méng )，山原旷其盈视，川泽纡(yū)其骇瞩。闾(lǘ)阎(yán) 扑地，钟鸣鼎食之家；舸(gě)舰弥津，青雀黄龙之舳(zhú)。云销雨霁', '1709901189845', '1709963638248', '1709963638255', '2024-03-09 15:56:18', '2024-03-09 15:56:18');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971002647', '潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长', '穷睇眄(dì miǎn)于中天，极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会(kuài)于云间。地势极而南溟(míng)深，天柱高而北辰远。关山难越，谁悲失路之人;萍水', '1709901682371', '1709963638248', '1709963638255', '2024-03-09 15:56:42', '2024-03-09 15:56:42');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971042064', '豫章故郡，洪都新府', '襟三江而带五湖，控蛮荆而引瓯(ōu)越。物华天宝，龙光射牛斗之墟;人杰地灵，徐孺下陈蕃(fān)之榻。雄州雾列，俊采星驰。台隍(huáng)枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨(qǐ )戟', '1709968946947', '1709726632137', '1709726632143', '2024-03-09 15:57:22', '2024-03-09 15:57:22');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971065080', '时维九月，序属三秋。潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长洲', '地接衡庐。襟三江而带五湖，控蛮荆而引瓯(ōu)越。物华天宝，龙光射牛斗之墟;人杰地灵，徐孺下陈蕃(fān)之榻。雄州雾列，俊采星驰。台隍(huáng)枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨(qǐ )戟(j ǐ)遥临;宇文新州之懿(yì)范，襜(chān)帷(wéi)暂驻。十旬休假，胜友如云；千里逢迎', '1709729514660', '1709726632137', '1709726632143', '2024-03-09 15:57:45', '2024-03-09 15:57:45');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971086960', '云销雨霁(jì)，彩彻区明。落霞与孤鹜(wù)齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡(lǐ)之滨；雁阵惊寒', '穷睇眄(dì miǎn)于中天，极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会(kuài)于云间。地势极而南溟(míng)深，天柱高而北辰远。关山难越，谁悲失路之人;萍水相逢', '1709902491136', '1709726632137', '1709726632143', '2024-03-09 15:58:06', '2024-03-09 15:58:06');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971113876', '路出名区;童子何知，躬逢胜饯', '序属三秋。潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄;飞阁流丹，下临无地。鹤汀(tīng)凫(fú )渚(zhǔ)，穷岛屿之', '1709903474181', '1709726632137', '1709726632143', '2024-03-09 15:58:33', '2024-03-09 15:58:33');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971164244', '云销雨霁(jì)，彩彻区明。落霞与孤鹜(wù)齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡(lǐ)之滨；雁阵惊寒，声断衡阳之浦。遥襟俯畅，逸兴遄(chuán)飞。爽籁发而清风生，纤歌凝而白云遏(è)。睢(suī)园绿竹', '穷睇眄(dì miǎn)于中天，极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会(kuài)于云间。地势极而南溟(míng)深，天柱高而北辰远。关山难越，谁悲失路之人', '1709731599134', '1709728495272', '1709728495275', '2024-03-09 15:59:24', '2024-03-09 15:59:24');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971184129', '岂乏明时?所赖君子见机', '，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名', '1709901525538', '1709728495272', '1709728495275', '2024-03-09 15:59:44', '2024-03-09 15:59:44');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971790372', '岂乏明时?所赖君子见机的我i饿哦的女王范 ', '穷睇眄(dì miǎn)于中天，极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会(kuài)于云间。地势极而南溟(míng)深，天柱高而北辰远。关山难越，谁悲失路之人;萍水相逢', '1709905956013', '1709820642242', '1709820642244', '2024-03-09 16:09:50', '2024-03-09 16:09:50');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971810544', '路出名区;童子何知，躬逢胜', '时维九月，序属三秋。潦(lǎo)水尽而寒潭清，烟光凝而暮山紫。俨(yǎn)骖騑(cān fēi)于上路，访风景于崇阿(ē)；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄;飞阁流丹，下临无地。鹤汀(tīng)凫(fú )渚(zhǔ)，穷岛屿之萦(yíng)回', '1709902167810', '1709820642242', '1709820642244', '2024-03-09 16:10:10', '2024-03-09 16:10:10');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971838958', '十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗', '山原旷其盈视，川泽纡(yū)其骇瞩。闾(lǘ)阎(yán) 扑地，钟鸣鼎食之家；舸(gě)舰弥津，青雀黄龙之舳(zhú)。云销雨霁(jì)，彩彻区明。落霞与孤鹜(wù)齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡(lǐ)之滨；雁阵惊寒', '1709963106823', '1709820642242', '1709820642244', '2024-03-09 16:10:38', '2024-03-09 16:10:38');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971865825', '岂乏明时?所赖君子见机，达人知命。老当益壮，宁移白首之心;穷且益坚，不坠青云之志', '声断衡阳之浦。遥襟俯畅，逸兴遄(chuán)飞。爽籁发而清风生，纤歌凝而白云遏(è)。睢(suī)园绿竹，气凌彭泽之樽(zūn)；邺(yè)水朱华，光照临川之笔。四美具，二难并。穷睇眄(dì miǎn)于中天，极娱游于暇日。天高地迥(jiǒng)，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会(kuài)于云间', '1709902212933', '1709820642242', '1709820642244', '2024-03-09 16:11:05', '2024-03-09 16:11:05');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1709971885974', '冯唐易老，李广难封。屈贾谊于长沙，非无圣主;窜梁鸿于海曲，岂乏明时?所赖君子见机，达人知命', '岂效穷途之哭!勃，三尺微命，一介书生。无路请缨，等终军之弱冠;有怀投笔，慕宗悫(què)之长风。舍簪(zān)笏(hù)于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨(tāo)陪鲤对；今兹(苏教版为“晨”)捧袂(mèi)，喜托龙门。杨意不逢，抚凌云而自惜;钟期既(苏教版为“相”)遇', '1709730058428', '1709820642242', '1709820642244', '2024-03-09 16:11:25', '2024-03-09 16:11:25');
INSERT INTO `moment` (`id`, `title`, `content`, `vid`, `userId`, `cId`, `createTime`, `updateTime`) VALUES ('1714552606427', '大爱孙燕姿', '大爱孙燕姿', '1709968992295', '1709726632137', '1709726632143', '2024-05-01 16:36:46', '2024-05-01 16:36:46');
COMMIT;

-- ----------------------------
-- Table structure for notify
-- ----------------------------
DROP TABLE IF EXISTS `notify`;
CREATE TABLE `notify` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `operation` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `isRead` int DEFAULT '0',
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(50) DEFAULT NULL,
  `aliaId` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of notify
-- ----------------------------
BEGIN;
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709731686625', '点赞了', NULL, '1709729533921', 0, '2024-03-06 21:28:06', '2024-03-06 21:28:06', 'thumb-vId', '1709728442684');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709731742289', '点赞了', NULL, '1709726632137', 0, '2024-03-06 21:29:02', '2024-03-06 21:29:02', 'thumb-vId', '1709731599134');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709731898419', '点赞了', NULL, '1709728495272', 0, '2024-03-06 21:31:38', '2024-03-06 21:31:38', 'thumb-vId', '1709727158279');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709733106869', '点赞了', NULL, '1709728495272', 0, '2024-03-06 21:51:46', '2024-03-06 21:51:46', 'thumb-commentId', '1709731633317');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709733632020', '点赞了', NULL, '1709733343047', 0, '2024-03-06 22:00:32', '2024-03-06 22:00:32', 'thumb-vId', '1709727360760');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734172395', '点赞了', NULL, '1709733343047', 0, '2024-03-06 22:09:32', '2024-03-06 22:09:32', 'thumb-vId', '1709734139055');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734784525', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:19:44', '2024-03-06 22:19:44', 'thumb-vId', '1709728097869');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734836944', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:20:36', '2024-03-06 22:20:36', 'thumb-vId', '1709728917857');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734842137', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:20:42', '2024-03-06 22:20:42', 'thumb-commentId', '1709731656397');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734843326', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:20:43', '2024-03-06 22:20:43', 'thumb-commentId', '1709731785881');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709734844361', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:20:44', '2024-03-06 22:20:44', 'thumb-commentId', '1709733145297');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709735139770', '点赞了', NULL, '1709726632137', 0, '2024-03-06 22:25:39', '2024-03-06 22:25:39', 'thumb-vId', '1709729514660');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709820341170', '点赞了', NULL, '1709726632137', 0, '2024-03-07 22:05:41', '2024-03-07 22:05:41', 'thumb-vId', '1709732612806');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709820373722', '点赞了', NULL, '1709726632137', 0, '2024-03-07 22:06:13', '2024-03-07 22:06:13', 'thumb-commentId', '1709731885398');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709820374970', '点赞了', NULL, '1709726632137', 0, '2024-03-07 22:06:14', '2024-03-07 22:06:14', 'thumb-commentId', '1709733416895');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709820376334', '点赞了', NULL, '1709726632137', 0, '2024-03-07 22:06:16', '2024-03-07 22:06:16', 'thumb-commentId', '1709733617413');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821138877', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:18:58', '2024-03-07 22:18:58', 'thumb-vId', '1709730058428');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821241300', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:20:41', '2024-03-07 22:20:41', 'thumb-commentId', '1709731644064');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821242263', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:20:42', '2024-03-07 22:20:42', 'thumb-commentId', '1709731878212');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821243247', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:20:43', '2024-03-07 22:20:43', 'thumb-commentId', '1709733517550');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821244309', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:20:44', '2024-03-07 22:20:44', 'thumb-commentId', '1709820137548');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709821245292', '点赞了', NULL, '1709820642242', 0, '2024-03-07 22:20:45', '2024-03-07 22:20:45', 'thumb-commentId', '1709821132342');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709904165709', '点赞了', NULL, '1709902530670', 0, '2024-03-08 21:22:45', '2024-03-08 21:22:45', 'thumb-vId', '1709902167810');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709904890030', '点赞了', NULL, '1709902530670', 0, '2024-03-08 21:34:50', '2024-03-08 21:34:50', 'thumb-vId', '1709904597222');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905253444', '点赞了', NULL, '1709902530670', 0, '2024-03-08 21:40:53', '2024-03-08 21:40:53', 'thumb-vId', '1709903824403');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905393358', '点赞了', NULL, '1709820642242', 0, '2024-03-08 21:43:13', '2024-03-08 21:43:13', 'thumb-vId', '1709901227938');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905528976', '点赞了', NULL, '1709733343047', 0, '2024-03-08 21:45:28', '2024-03-08 21:45:28', 'thumb-vId', '1709904597222');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905536275', '点赞了', NULL, '1709733343047', 0, '2024-03-08 21:45:36', '2024-03-08 21:45:36', 'thumb-vId', '1709904147909');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905547391', '点赞了', NULL, '1709733343047', 0, '2024-03-08 21:45:47', '2024-03-08 21:45:47', 'thumb-vId', '1709903824403');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709905565840', '点赞了', NULL, '1709733343047', 0, '2024-03-08 21:46:05', '2024-03-08 21:46:05', 'thumb-vId', '1709902167810');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709906320711', '点赞了', NULL, '1709820642242', 0, '2024-03-08 21:58:40', '2024-03-08 21:58:40', 'thumb-vId', '1709905956013');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709906763685', '点赞了', NULL, '1709820642242', 0, '2024-03-08 22:06:03', '2024-03-08 22:06:03', 'thumb-vId', '1709731599134');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967409794', '点赞了', NULL, '1709964349418', 0, '2024-03-09 14:56:49', '2024-03-09 14:56:49', 'thumb-vId', '1709903103144');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967795451', '点赞了', NULL, '1709963638248', 0, '2024-03-09 15:03:15', '2024-03-09 15:03:15', 'thumb-vId', '1709902167810');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967827279', '点赞了', NULL, '1709963638248', 0, '2024-03-09 15:03:47', '2024-03-09 15:03:47', 'thumb-vId', '1709727694829');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967830802', '点赞了', NULL, '1709963638248', 0, '2024-03-09 15:03:50', '2024-03-09 15:03:50', 'thumb-vId', '1709732612806');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967837576', '点赞了', NULL, '1709963638248', 0, '2024-03-09 15:03:57', '2024-03-09 15:03:57', 'thumb-vId', '1709963889528');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967839232', '点赞了', NULL, '1709963638248', 0, '2024-03-09 15:03:59', '2024-03-09 15:03:59', 'thumb-vId', '1709906040181');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967922128', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:05:22', '2024-03-09 15:05:22', 'thumb-vId', '1709902167810');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967929628', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:05:29', '2024-03-09 15:05:29', 'thumb-vId', '1709904147909');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967954515', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:05:54', '2024-03-09 15:05:54', 'thumb-vId', '1709728097869');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967962343', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:02', '2024-03-09 15:06:02', 'thumb-vId', '1709727158279');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967970423', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:10', '2024-03-09 15:06:10', 'thumb-vId', '1709902491136');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967977160', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:17', '2024-03-09 15:06:17', 'thumb-commentId', '1709905214138');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967978058', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:18', '2024-03-09 15:06:18', 'thumb-commentId', '1709905399454');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967978891', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:18', '2024-03-09 15:06:18', 'thumb-commentId', '1709905478985');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709967979842', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:19', '2024-03-09 15:06:19', 'thumb-commentId', '1709967968385');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709968002875', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:42', '2024-03-09 15:06:42', 'thumb-vId', '1709962703249');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709968016225', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:06:56', '2024-03-09 15:06:56', 'thumb-vId', '1709902846546');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709968055145', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:07:35', '2024-03-09 15:07:35', 'thumb-vId', '1709906040181');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709968069271', '点赞了', NULL, '1709962443377', 0, '2024-03-09 15:07:49', '2024-03-09 15:07:49', 'thumb-vId', '1709905956013');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709969056851', '点赞了', NULL, '1709968338867', 0, '2024-03-09 15:24:16', '2024-03-09 15:24:16', 'thumb-vId', '1709901227938');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709969066133', '点赞了', NULL, '1709968338867', 0, '2024-03-09 15:24:26', '2024-03-09 15:24:26', 'thumb-vId', '1709964765739');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709969141582', '点赞了', NULL, '1709968338867', 0, '2024-03-09 15:25:41', '2024-03-09 15:25:41', 'thumb-vId', '1709732612806');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709969147913', '点赞了', NULL, '1709968338867', 0, '2024-03-09 15:25:47', '2024-03-09 15:25:47', 'thumb-vId', '1709727694829');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709970367203', '点赞了', NULL, '1709968338867', 0, '2024-03-09 15:46:07', '2024-03-09 15:46:07', 'thumb-commentId', '1709967513448');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709970368132', '点赞了', NULL, '1709968338867', 1, '2024-03-09 15:46:08', '2024-03-09 15:49:46', 'thumb-commentId', '1709969031329');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972057266', '关注了', '1709968099989', '1709820642242', 0, '2024-03-09 16:14:17', '2024-03-09 16:14:17', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972061544', '关注了', '1709964349418', '1709820642242', 0, '2024-03-09 16:14:21', '2024-03-09 16:14:21', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972077531', '关注了', '1709728495272', '1709820642242', 0, '2024-03-09 16:14:37', '2024-03-09 16:14:37', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972101645', '点赞了', NULL, '1709820642242', 0, '2024-03-09 16:15:01', '2024-03-09 16:15:01', 'thumb-vId', '1709964424184');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972104912', '点赞了', NULL, '1709820642242', 0, '2024-03-09 16:15:04', '2024-03-09 16:15:04', 'thumb-vId', '1709963889528');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972106993', '点赞了', NULL, '1709820642242', 0, '2024-03-09 16:15:06', '2024-03-09 16:15:06', 'thumb-vId', '1709968946947');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972312269', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:18:32', '2024-03-09 16:18:32', 'thumb-vId', '1709968946947');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972338406', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:18:58', '2024-03-09 16:18:58', 'thumb-vId', '1709903474181');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972346827', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:19:06', '2024-03-09 16:19:06', 'thumb-vId', '1709903824403');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972362100', '关注了', '1709728495272', '1709968523870', 0, '2024-03-09 16:19:22', '2024-03-09 16:19:22', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972415246', '关注了', '1709962443377', '1709968523870', 0, '2024-03-09 16:20:15', '2024-03-09 16:20:15', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972423253', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:20:23', '2024-03-09 16:20:23', 'thumb-vId', '1709905956013');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972437253', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:20:37', '2024-03-09 16:20:37', 'thumb-vId', '1709727360760');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972477772', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:21:17', '2024-03-09 16:21:17', 'thumb-vId', '1709729476568');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972483387', '点赞了', NULL, '1709968523870', 0, '2024-03-09 16:21:23', '2024-03-09 16:21:23', 'thumb-vId', '1709728442684');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1709972511304', '关注了', '1709905648920', '1709968523870', 0, '2024-03-09 16:21:51', '2024-03-09 16:21:51', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710049162508', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:39:22', '2024-03-10 13:39:22', 'thumb-vId', '1709964424184');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710049169741', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:39:29', '2024-03-10 13:39:29', 'thumb-commentId', '1709905124454');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710049170687', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:39:30', '2024-03-10 13:39:30', 'thumb-commentId', '1709821059790');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710049172476', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:39:32', '2024-03-10 13:39:32', 'thumb-commentId', '1709733455964');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710049998413', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:53:18', '2024-03-10 13:53:18', 'thumb-vId', '1709966796036');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050120676', '关注了', '1709730380639', '1709726632137', 0, '2024-03-10 13:55:20', '2024-03-10 13:55:20', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050124392', '关注了', '1709730367418', '1709726632137', 0, '2024-03-10 13:55:24', '2024-03-10 13:55:24', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050141218', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:55:41', '2024-03-10 13:55:41', 'thumb-commentId', '1709967526679');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050143058', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:55:43', '2024-03-10 13:55:43', 'thumb-commentId', '1709969127061');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050143822', '点赞了', NULL, '1709726632137', 0, '2024-03-10 13:55:43', '2024-03-10 13:55:43', 'thumb-commentId', '1709967986940');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050145170', '关注了', '1709820642242', '1709726632137', 1, '2024-03-10 13:55:45', '2024-03-10 13:56:52', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050255827', '点赞了', NULL, '1709820642242', 0, '2024-03-10 13:57:35', '2024-03-10 13:57:35', 'thumb-vId', '1710049033545');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710050278435', '点赞了', NULL, '1709968338867', 0, '2024-03-10 13:57:58', '2024-03-10 13:57:58', 'thumb-vId', '1710049033545');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710051364558', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:16:04', '2024-03-10 14:16:04', 'thumb-vId', '1709903103144');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710051374250', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:16:14', '2024-03-10 14:16:14', 'thumb-commentId', '1709905553636');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710051381132', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:16:21', '2024-03-10 14:16:21', 'thumb-vId', '1709901682371');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710051411963', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:16:51', '2024-03-10 14:16:51', 'thumb-vId', '1709970879644');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052103225', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:28:23', '2024-03-10 14:28:23', 'thumb-vId', '1709968946947');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052112181', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:28:32', '2024-03-10 14:28:32', 'thumb-commentId', '1709972310847');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052113339', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:28:33', '2024-03-10 14:28:33', 'thumb-commentId', '1709969025214');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052115118', '关注了', '1709968099989', '1709726632137', 0, '2024-03-10 14:28:35', '2024-03-10 14:28:35', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052150118', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:29:10', '2024-03-10 14:29:10', 'thumb-vId', '1709728442684');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052187081', '点赞了', NULL, '1709726632137', 1, '2024-03-10 14:29:47', '2024-03-10 14:55:51', 'thumb-vId', '1709727694829');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710052383048', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:33:03', '2024-03-10 14:33:03', 'thumb-vId', '1710052373171');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053589856', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:53:09', '2024-03-10 14:53:09', 'thumb-commentId', '1709972317017');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053590818', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:53:10', '2024-03-10 14:53:10', 'thumb-commentId', '1709969119612');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053598971', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:53:18', '2024-03-10 14:53:18', 'thumb-vId', '1709731471688');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053673562', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:54:33', '2024-03-10 14:54:33', 'thumb-vId', '1709727158279');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053691943', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:54:51', '2024-03-10 14:54:51', 'thumb-commentId', '1710049161552');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053860885', '关注了', '1709968523870', '1709726632137', 0, '2024-03-10 14:57:40', '2024-03-10 14:57:40', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710053869445', '点赞了', NULL, '1709726632137', 0, '2024-03-10 14:57:49', '2024-03-10 14:57:49', 'thumb-mId', '1709971885974');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710054331303', '点赞了', NULL, '1710054197921', 0, '2024-03-10 15:05:31', '2024-03-10 15:05:31', 'thumb-vId', '1710054284377');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710054341246', '关注了', '1709728495272', '1710054197921', 0, '2024-03-10 15:05:41', '2024-03-10 15:05:41', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710056298770', '关注了', '1709726632137', '1709968099989', 0, '2024-03-10 15:38:18', '2024-03-10 15:38:18', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710160977959', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:42:57', '2024-03-11 20:42:57', 'thumb-vId', '1709906040181');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161038667', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:43:58', '2024-03-11 20:43:58', 'thumb-commentId', '1709731830601');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161039592', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:43:59', '2024-03-11 20:43:59', 'thumb-commentId', '1709731741300');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161068500', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:44:28', '2024-03-11 20:44:28', 'thumb-commentId', '1709972345598');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161069459', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:44:29', '2024-03-11 20:44:29', 'thumb-commentId', '1709967537164');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161070815', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:44:30', '2024-03-11 20:44:30', 'thumb-commentId', '1709905546572');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710161072192', '点赞了', NULL, '1709726632137', 0, '2024-03-11 20:44:32', '2024-03-11 20:44:32', 'thumb-commentId', '1709905457039');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710247328141', '点赞了', NULL, '1709726632137', 0, '2024-03-12 20:42:08', '2024-03-12 20:42:08', 'thumb-commentId', '1709972422299');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710247600515', '点赞了', NULL, '1709726632137', 1, '2024-03-12 20:46:40', '2024-05-01 16:32:47', 'thumb-commentId', '1710051371979');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710248028312', '点赞了', NULL, '1709726632137', 0, '2024-03-12 20:53:48', '2024-03-12 20:53:48', 'thumb-mId', '1709971865825');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710248029977', '点赞了', NULL, '1709726632137', 0, '2024-03-12 20:53:49', '2024-03-12 20:53:49', 'thumb-mId', '1709971838958');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710330058272', '点赞了', NULL, '1709726632137', 0, '2024-03-13 19:40:58', '2024-03-13 19:40:58', 'thumb-vId', '1709964765739');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710335362257', '发布了', '1709968099989', '1709726632137', 0, '2024-03-13 21:09:22', '2024-03-13 21:09:22', 'upload', '1710335362240');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710339073808', '发布了', '1709968099989', '1709726632137', 0, '2024-03-13 22:11:13', '2024-03-13 22:11:13', 'upload', '1710339073800');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710339392687', '发布了', '1709968099989', '1709726632137', 0, '2024-03-13 22:16:32', '2024-03-13 22:16:32', 'upload', '1710339392680');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710415303778', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 19:21:43', '2024-03-14 19:21:43', 'upload', '1710415303769');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710415388390', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 19:23:08', '2024-03-14 19:23:08', 'upload', '1710415388383');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710415498625', '点赞了', NULL, '1709726632137', 0, '2024-03-14 19:24:58', '2024-03-14 19:24:58', 'thumb-vId', '1709962703249');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710417566465', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 19:59:26', '2024-03-14 19:59:26', 'upload', '1710417566454');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418213702', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 20:10:13', '2024-03-14 20:10:13', 'upload', '1710418213693');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418496081', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:14:56', '2024-03-14 20:14:56', 'thumb-commentId', '1710053566801');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418554051', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:15:54', '2024-03-14 20:15:54', 'thumb-vId', '1709902491136');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418606810', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:16:46', '2024-03-14 20:16:46', 'thumb-commentId', '1709733499596');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418607814', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:16:47', '2024-03-14 20:16:47', 'thumb-commentId', '1709731848530');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418608833', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:16:48', '2024-03-14 20:16:48', 'thumb-commentId', '1709821137425');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418610294', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:16:50', '2024-03-14 20:16:50', 'thumb-commentId', '1709967944137');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418611157', '点赞了', NULL, '1709726632137', 0, '2024-03-14 20:16:51', '2024-03-14 20:16:51', 'thumb-commentId', '1709972284263');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710418799406', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 20:19:59', '2024-03-14 20:19:59', 'upload', '1710418799400');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710419141208', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 20:25:41', '2024-03-14 20:25:41', 'upload', '1710419141202');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710419420413', '发布了', '1709968099989', '1709726632137', 0, '2024-03-14 20:30:20', '2024-03-14 20:30:20', 'upload', '1710419420407');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1710578948832', '发布了', '1709968099989', '1709726632137', 0, '2024-03-16 16:49:08', '2024-03-16 16:49:08', 'upload', '1710578948826');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1711181331940', '关注了', '1709902530670', '1709726637539', 0, '2024-03-23 16:08:51', '2024-03-23 16:08:51', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714486544116', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:15:44', '2024-04-30 22:15:44', 'thumb-commentId', '1709972320697');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714486545710', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:15:45', '2024-04-30 22:15:45', 'thumb-commentId', '1709969034980');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714486573429', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:16:13', '2024-04-30 22:16:13', 'thumb-vId', '1709963889528');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714486862387', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:21:02', '2024-04-30 22:21:02', 'thumb-commentId', '1709967513448');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714486892617', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:21:32', '2024-04-30 22:21:32', 'thumb-commentId', '1714486787235');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714487863999', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:37:43', '2024-04-30 22:37:43', 'thumb-commentId', '1714487544128');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714488286552', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:44:46', '2024-04-30 22:44:46', 'thumb-commentId', '1714488283501');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714488290919', '点赞了', NULL, '1709726632137', 0, '2024-04-30 22:44:50', '2024-04-30 22:44:50', 'thumb-vId', '1710054012961');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714544792954', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:26:32', '2024-05-01 14:26:32', 'thumb-vId', '1709968946947');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714545003114', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:30:03', '2024-05-01 14:30:03', 'thumb-vId', '1710054012961');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714545604606', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:40:04', '2024-05-01 14:40:04', 'thumb-vId', '1709970879644');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714545795942', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:43:15', '2024-05-01 14:43:15', 'thumb-vId', '1714545759293');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714545805300', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:43:25', '2024-05-01 14:43:25', 'thumb-commentId', '1714545804057');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714546108743', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:48:28', '2024-05-01 14:48:28', 'thumb-vId', '1709966796036');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714546611568', '点赞了', NULL, '1714543289857', 0, '2024-05-01 14:56:51', '2024-05-01 14:56:51', 'thumb-vId', '1709903824403');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714549243799', '点赞了', NULL, '1714543289857', 0, '2024-05-01 15:40:43', '2024-05-01 15:40:43', 'thumb-commentId', '1709905521470');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714549245903', '点赞了', NULL, '1714543289857', 0, '2024-05-01 15:40:45', '2024-05-01 15:40:45', 'thumb-commentId', '1709967591632');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714549246822', '点赞了', NULL, '1714543289857', 0, '2024-05-01 15:40:46', '2024-05-01 15:40:46', 'thumb-commentId', '1709972352966');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714549951913', '关注了', '1709964349418', '1714549381813', 0, '2024-05-01 15:52:31', '2024-05-01 15:52:31', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714550024002', '关注了', '1709905648920', '1714549381813', 0, '2024-05-01 15:53:44', '2024-05-01 15:53:44', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714550026775', '点赞了', NULL, '1714549381813', 0, '2024-05-01 15:53:46', '2024-05-01 15:53:46', 'thumb-commentId', '1709969114511');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714550028372', '点赞了', NULL, '1714549381813', 0, '2024-05-01 15:53:48', '2024-05-01 15:53:48', 'thumb-commentId', '1709968054084');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714550029245', '点赞了', NULL, '1714549381813', 0, '2024-05-01 15:53:49', '2024-05-01 15:53:49', 'thumb-commentId', '1709906307789');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714551935507', '点赞了', NULL, '1714549381813', 0, '2024-05-01 16:25:35', '2024-05-01 16:25:35', 'thumb-vId', '1714549541546');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552303548', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:31:43', '2024-05-01 16:31:43', 'thumb-commentId', '1709967568000');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552304463', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:31:44', '2024-05-01 16:31:44', 'thumb-commentId', '1709968025838');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552307147', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:31:47', '2024-05-01 16:31:47', 'thumb-commentId', '1709821080239');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552375336', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:32:55', '2024-05-01 16:32:55', 'thumb-mId', '1709971113876');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552377134', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:32:57', '2024-05-01 16:32:57', 'thumb-mId', '1709971086960');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552397733', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:17', '2024-05-01 16:33:17', 'thumb-commentId', '1709972271066');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552398816', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:18', '2024-05-01 16:33:18', 'thumb-commentId', '1709969064198');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552402944', '关注了', '1709968338867', '1709726632137', 0, '2024-05-01 16:33:22', '2024-05-01 16:33:22', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552425815', '关注了', '1709729533921', '1709726632137', 0, '2024-05-01 16:33:45', '2024-05-01 16:33:45', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552426950', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:46', '2024-05-01 16:33:46', 'thumb-commentId', '1709972258478');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552428082', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:48', '2024-05-01 16:33:48', 'thumb-commentId', '1709969070580');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552430732', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:50', '2024-05-01 16:33:50', 'thumb-commentId', '1709731709931');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552431932', '点赞了', NULL, '1709726632137', 1, '2024-05-01 16:33:51', '2024-05-01 16:34:04', 'thumb-commentId', '1709731768884');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552432802', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:52', '2024-05-01 16:33:52', 'thumb-commentId', '1709731854915');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552433764', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:53', '2024-05-01 16:33:53', 'thumb-commentId', '1709733567745');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552435764', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:33:55', '2024-05-01 16:33:55', 'thumb-commentId', '1709821067094');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552460919', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:34:20', '2024-05-01 16:34:20', 'thumb-commentId', '1709967960639');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552461949', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:34:21', '2024-05-01 16:34:21', 'thumb-commentId', '1709905229639');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552463050', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:34:23', '2024-05-01 16:34:23', 'thumb-commentId', '1709733469763');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552465120', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:34:25', '2024-05-01 16:34:25', 'thumb-commentId', '1709731897014');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552511284', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:35:11', '2024-05-01 16:35:11', 'thumb-commentId', '1709731878212');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552512615', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:35:12', '2024-05-01 16:35:12', 'thumb-commentId', '1709731644064');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552568572', '关注了', '1709733343047', '1709726632137', 0, '2024-05-01 16:36:08', '2024-05-01 16:36:08', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552570454', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:36:10', '2024-05-01 16:36:10', 'thumb-vId', '1709734139055');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714552619154', '点赞了', NULL, '1709726632137', 0, '2024-05-01 16:36:59', '2024-05-01 16:36:59', 'thumb-commentId', '1714552617185');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714632325345', '点赞了', NULL, '1709726632137', 0, '2024-05-02 14:45:25', '2024-05-02 14:45:25', 'thumb-vId', '1714545759293');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714632353702', '点赞了', NULL, '1709726632137', 0, '2024-05-02 14:45:53', '2024-05-02 14:45:53', 'thumb-commentId', '1714632351581');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714632574449', '点赞了', NULL, '1709726632137', 0, '2024-05-02 14:49:34', '2024-05-02 14:49:34', 'thumb-commentId', '1709967530400');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714632576365', '点赞了', NULL, '1709726632137', 0, '2024-05-02 14:49:36', '2024-05-02 14:49:36', 'thumb-commentId', '1709969130964');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714632577261', '点赞了', NULL, '1709726632137', 0, '2024-05-02 14:49:37', '2024-05-02 14:49:37', 'thumb-commentId', '1709967991054');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714633256117', '点赞了', NULL, '1709726632137', 0, '2024-05-02 15:00:56', '2024-05-02 15:00:56', 'thumb-commentId', '1709905541021');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714639795788', '点赞了', NULL, '1709726632137', 0, '2024-05-02 16:49:55', '2024-05-02 16:49:55', 'thumb-vId', '1709729818524');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714639815031', '点赞了', NULL, '1709726632137', 0, '2024-05-02 16:50:15', '2024-05-02 16:50:15', 'thumb-commentId', '1709733542965');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714639817196', '点赞了', NULL, '1709726632137', 0, '2024-05-02 16:50:17', '2024-05-02 16:50:17', 'thumb-commentId', '1709821093556');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1714639968027', '点赞了', NULL, '1709726632137', 0, '2024-05-02 16:52:48', '2024-05-02 16:52:48', 'thumb-commentId', '1709820087432');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735304876463', '发布了', '1709968099989', '1709726632137', 0, '2024-12-27 21:07:56', '2024-12-27 21:07:56', 'upload', '1735304876456');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735306697876', '发布了', '1709968099989', '1709726632137', 0, '2024-12-27 21:38:17', '2024-12-27 21:38:17', 'upload', '1735306697868');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735310664268', '点赞了', NULL, '1709726632137', 0, '2024-12-27 22:44:24', '2024-12-27 22:44:24', 'thumb-mId', '1714552606427');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735310684793', '点赞了', NULL, '1709726632137', 0, '2024-12-27 22:44:44', '2024-12-27 22:44:44', 'thumb-commentId', '1710056216849');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735361881775', '点赞了', NULL, '1709726632137', 0, '2024-12-28 12:58:01', '2024-12-28 12:58:01', 'thumb-commentId', '1709972406968');
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735362117757', '关注了', '1709902530670', '1709726632137', 0, '2024-12-28 13:01:57', '2024-12-28 13:01:57', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735362398596', '关注了', '1709962443377', '1709726632137', 0, '2024-12-28 13:06:38', '2024-12-28 13:06:38', 'sub', NULL);
INSERT INTO `notify` (`id`, `content`, `userId`, `operation`, `isRead`, `createTime`, `updateTime`, `type`, `aliaId`) VALUES ('1735910898944', '点赞了', NULL, '1709726632137', 0, '2025-01-03 21:28:18', '2025-01-03 21:28:18', 'thumb-commentId', '1709969031329');
COMMIT;

-- ----------------------------
-- Table structure for playlist
-- ----------------------------
DROP TABLE IF EXISTS `playlist`;
CREATE TABLE `playlist` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `isPublic` int DEFAULT '1',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of playlist
-- ----------------------------
BEGIN;
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709728580882', '我的最爱', 1, '我的最爱', '1709728495272', '2024-03-06 20:36:20', '2024-03-06 20:36:20');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709728589231', '今天你看了么', 1, '今天你看了么', '1709728495272', '2024-03-06 20:36:29', '2024-03-06 20:36:29');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709730099503', '那些你熟悉却又不知道名字', 1, '那些你熟悉却又不知道名字', '1709729533921', '2024-03-06 21:01:39', '2024-03-06 21:01:39');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709731494204', '怀旧年华', 1, '怀旧年华', '1709729533921', '2024-03-06 21:24:54', '2024-03-06 21:24:54');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709732015765', '夜生活', 1, '夜生活', '1709728495272', '2024-03-06 21:33:35', '2024-03-06 21:33:35');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709733236711', '外国人雷鬼', 1, '外国人雷鬼', '1709728495272', '2024-03-06 21:53:56', '2024-03-06 21:53:56');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709733246094', '探索不拘一格的玩性洒脱', 1, '探索不拘一格的玩性洒脱', '1709728495272', '2024-03-06 21:54:06', '2024-03-06 21:54:06');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709733271462', '50种浓情蜜意', 1, '50种浓情蜜意', '1709728495272', '2024-03-06 21:54:31', '2024-03-06 21:54:31');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709734186011', '那时的你啊', 1, '那时的你啊', '1709733343047', '2024-03-06 22:09:46', '2024-03-06 22:09:46');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709821295905', '夜夜笙歌', 1, '夜夜笙歌', '1709726632137', '2024-03-07 22:21:35', '2024-03-07 22:21:35');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902011445', '和她回忆', 1, '所有的回忆', '1709733343047', '2024-03-08 20:46:51', '2024-03-08 20:46:51');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902054453', '4k经典', 1, '高清视频在这里', '1709733343047', '2024-03-08 20:47:34', '2024-03-08 20:47:34');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902074834', '大爱blankpink', 1, '最厉害的韩国女爱豆', '1709733343047', '2024-03-08 20:47:54', '2024-03-08 20:47:54');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902115753', '影视剪辑', 1, '高燃片段', '1709820642242', '2024-03-08 20:48:35', '2024-03-08 20:48:35');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902127184', '有趣的知识', 1, '科学小知识', '1709820642242', '2024-03-08 20:48:47', '2024-03-08 20:48:47');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902138566', '动漫回忆', 1, '童年动漫一起看', '1709820642242', '2024-03-08 20:48:58', '2024-03-08 20:48:58');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709902163205', '星空下的你我', 1, '唯美视频主义', '1709820642242', '2024-03-08 20:49:23', '2024-03-08 20:49:23');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903004907', '你真的在乎吗', 1, '心动视频', '1709729533921', '2024-03-08 21:03:24', '2024-03-08 21:03:24');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903018506', '地外文明', 1, '科学的尽头', '1709729533921', '2024-03-08 21:03:38', '2024-03-08 21:03:38');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903098493', '柔情似水', 1, '感动的视频', '1709729533921', '2024-03-08 21:04:58', '2024-03-08 21:04:58');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903242727', '真男人看的视频', 1, '真男人看的视频', '1709902530670', '2024-03-08 21:07:22', '2024-03-08 21:07:22');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903252679', '漫威精彩', 1, '漫威精彩', '1709902530670', '2024-03-08 21:07:32', '2024-03-08 21:07:32');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903261928', '韩国明星', 1, '韩国明星', '1709902530670', '2024-03-08 21:07:41', '2024-03-08 21:07:41');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903758613', '温水煮青蛙', 1, '科学的力量', '1709729533921', '2024-03-08 21:15:58', '2024-03-08 21:15:58');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903780706', '精彩瞬间', 1, '哈哈哈哈哈，逗你的', '1709729533921', '2024-03-08 21:16:20', '2024-03-08 21:16:20');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903810468', '高效集中营', 1, '好搞笑', '1709726632137', '2024-03-08 21:16:50', '2024-03-08 21:16:50');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709903897965', '怀念吧', 0, '怀念吧', '1709902530670', '2024-03-08 21:18:17', '2024-03-08 21:18:17');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709962463388', '白月光', 1, '白月光', '1709962443377', '2024-03-09 13:34:23', '2024-03-09 13:34:23');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709962478085', '人生路', 0, '人生路', '1709962443377', '2024-03-09 13:34:38', '2024-03-09 13:34:38');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965069974', '科幻大作', 1, '让你眼花缭乱的视频', '1709730380639', '2024-03-09 14:17:49', '2024-03-09 14:17:49');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965082951', '乱世佳人', 1, '乱世佳人行', '1709730380639', '2024-03-09 14:18:02', '2024-03-09 14:18:02');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965119951', '你不知道的电影细节', 1, '发现电影中的小细节', '1709730380639', '2024-03-09 14:18:39', '2024-03-09 14:18:39');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965146133', '高燃剪辑', 1, '让你眼前一亮', '1709730380639', '2024-03-09 14:19:06', '2024-03-09 14:19:06');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965175714', '年少的爱情故事', 1, '唯美爱情', '1709730380639', '2024-03-09 14:19:35', '2024-03-09 14:19:35');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965527096', '足坛伪球迷', 1, '科普足坛知识', '1709730372557', '2024-03-09 14:25:27', '2024-03-09 14:25:27');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965582539', '林丹个人秀', 1, '羽毛球经典', '1709730372557', '2024-03-09 14:26:22', '2024-03-09 14:26:22');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709965610569', 'NBA精彩瞬间', 1, '篮球爱好者集群', '1709730372557', '2024-03-09 14:26:50', '2024-03-09 14:26:50');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709967283489', '今天是个好日子', 1, '今天是个好日子', '1709964349418', '2024-03-09 14:54:43', '2024-03-09 14:54:43');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709967729590', '柯南细节', 1, '柯南细节', '1709963638248', '2024-03-09 15:02:09', '2024-03-09 15:02:09');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709967742410', '动听的歌曲', 1, '动听的歌曲', '1709963638248', '2024-03-09 15:02:22', '2024-03-09 15:02:22');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709969196761', '大爱blankpink啊', 1, '大爱blankpink啊', '1709968338867', '2024-03-09 15:26:36', '2024-03-09 15:26:36');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709969712128', '美好生活', 1, '美好生活', '1709968338867', '2024-03-09 15:35:12', '2024-03-09 15:35:12');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709972501683', '夜晚下的星空', 1, '夜晚下的星空', '1709968523870', '2024-03-09 16:21:41', '2024-03-09 16:21:41');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1709972537650', '今天没遗憾', 1, '今天没遗憾', '1709968523870', '2024-03-09 16:22:17', '2024-03-09 16:22:17');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710048759365', '战歌起，以雷霆击碎黑暗', 0, '战歌起，以雷霆击碎黑暗', '1709968523870', '2024-03-10 13:32:39', '2024-03-10 13:32:39');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710048780994', '命运的齿轮开始转动', 1, '命运的齿轮开始转动', '1709968523870', '2024-03-10 13:33:00', '2024-03-10 13:33:00');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710048801145', '快乐余额不足，请尽快充值', 0, '快乐余额不足，请尽快充值', '1709968523870', '2024-03-10 13:33:21', '2024-03-10 13:33:21');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710049098808', '爱是单向告白后的回应', 1, '爱是单向告白后的回应', '1709726632137', '2024-03-10 13:38:18', '2024-03-10 13:38:18');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710049120968', '浅风微醺拉动氤氲氛围', 1, '浅风微醺拉动氤氲氛围', '1709726632137', '2024-03-10 13:38:40', '2024-03-10 13:38:40');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710051397192', '你好啊', 1, '你好啊', '1709726632137', '2024-03-10 14:16:37', '2024-03-10 14:16:37');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052233174', '昨天', 1, '昨天', '1709726632137', '2024-03-10 14:30:33', '2024-03-10 14:30:33');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052560049', '明日复明日', 1, '明日复明日', '1709968099989', '2024-03-10 14:36:00', '2024-03-10 14:36:00');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052566296', '遗憾', 1, '遗憾', '1709968099989', '2024-03-10 14:36:06', '2024-03-10 14:36:06');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052579646', '精彩瞬间捕捉', 1, '精彩瞬间捕捉', '1709968099989', '2024-03-10 14:36:19', '2024-03-10 14:36:19');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052587030', '太好了', 1, '太好了', '1709968099989', '2024-03-10 14:36:27', '2024-03-10 14:36:27');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710052593245', '我最喜欢的', 1, '我最喜欢的', '1709968099989', '2024-03-10 14:36:33', '2024-03-10 14:36:33');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1710054096161', '我爱', 1, '收集喜欢的视频', '1709726637539', '2024-03-10 15:01:36', '2024-03-10 15:01:36');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1714545619055', '爱情很美好', 0, '爱情很美好', '1714543289857', '2024-05-01 14:40:19', '2024-05-01 14:40:19');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1714549757444', '爱转角', 1, '爱转角', '1714549381813', '2024-05-01 15:49:17', '2024-05-01 15:49:17');
INSERT INTO `playlist` (`id`, `name`, `isPublic`, `description`, `userId`, `createTime`, `updateTime`) VALUES ('1714549767779', '程艾影', 1, '程艾影', '1714549381813', '2024-05-01 15:49:27', '2024-05-01 15:49:27');
COMMIT;

-- ----------------------------
-- Table structure for playlist_video
-- ----------------------------
DROP TABLE IF EXISTS `playlist_video`;
CREATE TABLE `playlist_video` (
  `pId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pId`,`vId`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  CONSTRAINT `playlist_video_ibfk_1` FOREIGN KEY (`pId`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `playlist_video_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of playlist_video
-- ----------------------------
BEGIN;
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728580882', '1709727158279', '2024-03-06 21:51:49', '2024-03-06 21:51:49');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728580882', '1709728917857', '2024-03-06 20:41:57', '2024-03-06 20:41:57');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728580882', '1709731599134', '2024-03-06 21:54:44', '2024-03-06 21:54:44');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728580882', '1709732612806', '2024-03-06 21:43:32', '2024-03-06 21:43:32');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709728788586', '2024-03-06 20:39:48', '2024-03-06 20:39:48');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709729476568', '2024-03-06 20:51:16', '2024-03-06 20:51:16');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709729514660', '2024-03-06 20:51:54', '2024-03-06 20:51:54');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709731599134', '2024-03-06 21:54:43', '2024-03-06 21:54:43');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709732368308', '2024-03-06 21:39:28', '2024-03-06 21:39:28');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709728589231', '1709733037458', '2024-03-06 21:50:37', '2024-03-06 21:50:37');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709730099503', '1709730689098', '2024-03-06 21:11:29', '2024-03-06 21:11:29');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709730099503', '1709731471688', '2024-03-06 21:24:31', '2024-03-06 21:24:31');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709731494204', '1709731599134', '2024-03-06 21:26:39', '2024-03-06 21:26:39');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709732015765', '1709731599134', '2024-03-06 21:54:41', '2024-03-06 21:54:41');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709733236711', '1709731599134', '2024-03-06 21:54:41', '2024-03-06 21:54:41');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709733246094', '1709731599134', '2024-03-06 21:54:40', '2024-03-06 21:54:40');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709733271462', '1709730058428', '2024-03-06 21:54:54', '2024-03-06 21:54:54');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709733271462', '1709731599134', '2024-03-06 21:54:39', '2024-03-06 21:54:39');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709734186011', '1709734139055', '2024-03-06 22:09:47', '2024-03-06 22:09:47');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709821295905', '1709731599134', '2024-03-10 14:53:01', '2024-03-10 14:53:01');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709821295905', '1709733037458', '2024-03-07 22:21:37', '2024-03-07 22:21:37');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902127184', '1709732612806', '2024-03-08 20:55:13', '2024-03-08 20:55:13');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902127184', '1709901189845', '2024-03-08 20:55:05', '2024-03-08 20:55:05');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902127184', '1709902491136', '2024-03-08 20:54:51', '2024-03-08 20:54:51');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902138566', '1709732612806', '2024-03-08 20:55:12', '2024-03-08 20:55:12');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902138566', '1709901189845', '2024-03-08 20:55:04', '2024-03-08 20:55:04');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902138566', '1709902212933', '2024-03-08 20:50:12', '2024-03-08 20:50:12');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902163205', '1709901189845', '2024-03-08 20:55:04', '2024-03-08 20:55:04');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709902163205', '1709906560937', '2024-03-08 22:02:40', '2024-03-08 22:02:40');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709902846546', '2024-03-08 21:07:56', '2024-03-08 21:07:56');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709903103144', '2024-03-08 21:07:50', '2024-03-08 21:07:50');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709903474181', '2024-03-08 21:11:14', '2024-03-08 21:11:14');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709903824403', '2024-03-08 21:17:04', '2024-03-08 21:17:04');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709903878483', '2024-03-08 21:17:58', '2024-03-08 21:17:58');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903242727', '1709904147909', '2024-03-08 21:22:27', '2024-03-08 21:22:27');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903252679', '1709902846546', '2024-03-08 21:07:55', '2024-03-08 21:07:55');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903252679', '1709903103144', '2024-03-08 21:07:49', '2024-03-08 21:07:49');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903261928', '1709902846546', '2024-03-08 21:07:55', '2024-03-08 21:07:55');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903261928', '1709903103144', '2024-03-08 21:07:48', '2024-03-08 21:07:48');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903261928', '1709904846470', '2024-03-08 21:34:06', '2024-03-08 21:34:06');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903810468', '1709963889528', '2024-03-09 13:58:09', '2024-03-09 13:58:09');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903810468', '1709964424184', '2024-03-09 14:07:04', '2024-03-09 14:07:04');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903810468', '1710049033545', '2024-03-10 13:38:48', '2024-03-10 13:38:48');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903810468', '1735306697868', '2024-12-28 13:04:58', '2024-12-28 13:04:58');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903897965', '1709727360760', '2024-03-08 21:18:31', '2024-03-08 21:18:31');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903897965', '1709903474181', '2024-03-08 21:18:19', '2024-03-08 21:18:19');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903897965', '1709904597222', '2024-03-08 21:29:57', '2024-03-08 21:29:57');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709903897965', '1709964765739', '2024-03-09 14:12:45', '2024-03-09 14:12:45');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709962463388', '1709902491136', '2024-03-09 15:06:13', '2024-03-09 15:06:13');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709962463388', '1709904846470', '2024-03-09 13:34:57', '2024-03-09 13:34:57');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709962463388', '1709962703249', '2024-03-09 13:38:23', '2024-03-09 13:38:23');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709962463388', '1709963106823', '2024-03-09 13:45:06', '2024-03-09 13:45:06');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709962478085', '1709906040181', '2024-03-09 13:34:51', '2024-03-09 13:34:51');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965069974', '1709902846546', '2024-03-09 14:21:18', '2024-03-09 14:21:18');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965069974', '1709903103144', '2024-03-09 14:20:09', '2024-03-09 14:20:09');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965082951', '1709727360760', '2024-03-09 14:20:43', '2024-03-09 14:20:43');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965082951', '1709901189845', '2024-03-09 14:20:24', '2024-03-09 14:20:24');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965082951', '1709902846546', '2024-03-09 14:21:18', '2024-03-09 14:21:18');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965082951', '1709906560937', '2024-03-09 14:21:10', '2024-03-09 14:21:10');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965119951', '1709901682371', '2024-03-09 14:20:16', '2024-03-09 14:20:16');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965119951', '1709902846546', '2024-03-09 14:21:19', '2024-03-09 14:21:19');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965119951', '1709903103144', '2024-03-09 14:20:10', '2024-03-09 14:20:10');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965119951', '1709964424184', '2024-03-09 14:19:59', '2024-03-09 14:19:59');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965146133', '1709901189845', '2024-03-09 14:20:23', '2024-03-09 14:20:23');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965146133', '1709901682371', '2024-03-09 14:20:15', '2024-03-09 14:20:15');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965146133', '1709964424184', '2024-03-09 14:19:58', '2024-03-09 14:19:58');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709727360760', '2024-03-09 14:20:42', '2024-03-09 14:20:42');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709728442684', '2024-03-09 14:21:57', '2024-03-09 14:21:57');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709728917857', '2024-03-09 14:21:51', '2024-03-09 14:21:51');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709729514660', '2024-03-09 14:20:35', '2024-03-09 14:20:35');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709729818524', '2024-03-09 14:20:30', '2024-03-09 14:20:30');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709962703249', '2024-03-09 14:21:06', '2024-03-09 14:21:06');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965175714', '1709964765739', '2024-03-09 14:19:53', '2024-03-09 14:19:53');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965527096', '1709728442684', '2024-03-09 14:27:01', '2024-03-09 14:27:01');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965527096', '1709729476568', '2024-03-09 14:27:06', '2024-03-09 14:27:06');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965527096', '1709902491136', '2024-03-09 14:28:14', '2024-03-09 14:28:14');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965582539', '1709903878483', '2024-03-09 14:27:34', '2024-03-09 14:27:34');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965610569', '1709901525538', '2024-03-09 14:28:21', '2024-03-09 14:28:21');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965610569', '1709902491136', '2024-03-09 14:28:13', '2024-03-09 14:28:13');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965610569', '1709904147909', '2024-03-09 14:27:56', '2024-03-09 14:27:56');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709965610569', '1709904597222', '2024-03-09 14:27:51', '2024-03-09 14:27:51');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967283489', '1709966991829', '2024-03-09 14:54:44', '2024-03-09 14:54:44');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967729590', '1709904147909', '2024-03-09 15:02:43', '2024-03-09 15:02:43');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967729590', '1709963106823', '2024-03-09 15:02:24', '2024-03-09 15:02:24');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967742410', '1709902167810', '2024-03-09 15:03:07', '2024-03-09 15:03:07');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967742410', '1709906040181', '2024-03-09 15:02:52', '2024-03-09 15:02:52');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709967742410', '1709963106823', '2024-03-09 15:02:23', '2024-03-09 15:02:23');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709969196761', '1709727694829', '2024-03-09 15:26:38', '2024-03-09 15:26:38');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709969712128', '1709966991829', '2024-03-09 15:35:13', '2024-03-09 15:35:13');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709969712128', '1709970879644', '2024-03-09 15:54:39', '2024-03-09 15:54:39');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709972501683', '1709902167810', '2024-03-09 16:22:00', '2024-03-09 16:22:00');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709972501683', '1709904846470', '2024-03-09 16:21:43', '2024-03-09 16:21:43');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709972501683', '1709905956013', '2024-03-09 16:21:48', '2024-03-09 16:21:48');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1709972537650', '1709964424184', '2024-03-09 16:22:19', '2024-03-09 16:22:19');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710048801145', '1710049033545', '2024-03-10 13:37:13', '2024-03-10 13:37:13');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710049098808', '1709903824403', '2025-01-03 22:07:56', '2025-01-03 22:07:56');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710049098808', '1710049033545', '2024-03-10 13:38:20', '2024-03-10 13:38:20');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710049120968', '1709731471688', '2024-03-10 14:53:20', '2024-03-10 14:53:20');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710049120968', '1709903824403', '2025-01-03 22:07:55', '2025-01-03 22:07:55');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710049120968', '1710049033545', '2024-03-10 14:16:29', '2024-03-10 14:16:29');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1709728442684', '2024-03-10 14:29:12', '2024-03-10 14:29:12');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1709731471688', '2024-12-27 20:38:55', '2024-12-27 20:38:55');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1709903824403', '2025-01-03 22:07:54', '2025-01-03 22:07:54');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1709963106823', '2024-03-10 14:53:41', '2024-03-10 14:53:41');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1709970879644', '2024-03-10 14:16:45', '2024-03-10 14:16:45');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710051397192', '1735306697868', '2024-12-27 21:38:17', '2024-12-27 21:38:17');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709901189845', '2024-03-15 22:40:35', '2024-03-15 22:40:35');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709903824403', '2024-04-30 21:39:07', '2024-04-30 21:39:07');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709904597222', '2024-03-10 14:30:34', '2024-03-10 14:30:34');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709904846470', '2024-03-15 22:40:23', '2024-03-15 22:40:23');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709906560937', '2024-03-15 22:40:17', '2024-03-15 22:40:17');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709962703249', '2024-03-15 22:40:12', '2024-03-15 22:40:12');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709963106823', '2024-03-10 14:53:40', '2024-03-10 14:53:40');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709964765739', '2024-04-30 21:38:49', '2024-04-30 21:38:49');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709968946947', '2024-04-30 21:38:44', '2024-04-30 21:38:44');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1709970879644', '2024-04-30 21:38:39', '2024-04-30 21:38:39');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1710049033545', '2024-04-30 21:38:34', '2024-04-30 21:38:34');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052233174', '1735304876456', '2024-12-27 21:07:56', '2024-12-27 21:07:56');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052579646', '1709968946947', '2024-03-10 14:36:55', '2024-03-10 14:36:55');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052593245', '1709963889528', '2024-03-10 14:36:51', '2024-03-10 14:36:51');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1710052593245', '1710054012961', '2024-03-10 15:00:12', '2024-03-10 15:00:12');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1714545619055', '1709970879644', '2024-05-01 14:40:20', '2024-05-01 14:40:20');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1714545619055', '1714546475533', '2024-05-01 14:54:35', '2024-05-01 14:54:35');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1714549757444', '1709964765739', '2024-05-01 15:52:28', '2024-05-01 15:52:28');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1714549767779', '1714546475533', '2024-05-01 15:49:28', '2024-05-01 15:49:28');
INSERT INTO `playlist_video` (`pId`, `vId`, `createTime`, `updateTime`) VALUES ('1714549767779', '1714549541546', '2024-05-01 15:49:36', '2024-05-01 15:49:36');
COMMIT;

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` char(50) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role
-- ----------------------------
BEGIN;
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718099978', '管理员', '2024-05-03 14:34:59', '2024-05-03 14:34:59');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718291714', '开发人员', '2024-05-03 14:38:11', '2024-05-03 14:38:11');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718297857', '运维人员', '2024-05-03 14:38:17', '2024-05-03 14:38:17');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718304408', '数据管理员', '2024-05-03 14:38:24', '2024-05-03 14:38:24');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718320371', '部门主管', '2024-05-03 14:38:40', '2024-05-03 14:38:40');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718406553', 'ui', '2024-05-03 14:40:06', '2024-05-03 14:40:06');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714718430224', '董事长', '2024-05-03 14:40:30', '2024-05-03 14:40:30');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714719602923', '普通用户', '2024-05-03 15:00:02', '2024-05-03 15:00:02');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714722291053', '游客', '2024-05-03 15:44:51', '2024-05-03 15:44:51');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714722310637', '系统总人员', '2024-05-03 15:45:10', '2024-05-03 15:45:10');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714722319799', '夫妻', '2024-05-03 15:45:19', '2024-05-03 15:45:19');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714722430960', '1111', '2024-05-03 15:47:10', '2024-05-03 15:47:10');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1714722433763', '222211', '2024-05-03 15:47:13', '2025-01-03 20:14:01');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1735905597105', '牛蛙222', '2025-01-03 19:59:57', '2025-01-03 20:14:14');
INSERT INTO `role` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1735906457868', 'ggg', '2025-01-03 20:14:17', '2025-01-03 20:14:17');
COMMIT;

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user` (
  `userId` char(50) DEFAULT NULL,
  `roleId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role_user
-- ----------------------------
BEGIN;
INSERT INTO `role_user` (`userId`, `roleId`, `createTime`, `updateTime`) VALUES ('1709726637539', '1714722310637', '2024-09-11 21:04:11', '2024-09-11 21:04:11');
INSERT INTO `role_user` (`userId`, `roleId`, `createTime`, `updateTime`) VALUES ('1714549381813', '1714722319799', '2024-09-11 21:29:47', '2024-09-11 21:29:47');
INSERT INTO `role_user` (`userId`, `roleId`, `createTime`, `updateTime`) VALUES ('1714549381813', '1714722310637', '2024-09-11 21:29:47', '2024-09-11 21:29:47');
INSERT INTO `role_user` (`userId`, `roleId`, `createTime`, `updateTime`) VALUES ('1714543289857', '1714722430960', '2024-09-11 21:32:22', '2024-09-11 21:32:22');
INSERT INTO `role_user` (`userId`, `roleId`, `createTime`, `updateTime`) VALUES ('1714543289857', '1714722433763', '2024-09-11 21:32:22', '2024-09-11 21:32:22');
COMMIT;

-- ----------------------------
-- Table structure for sub_playlist
-- ----------------------------
DROP TABLE IF EXISTS `sub_playlist`;
CREATE TABLE `sub_playlist` (
  `userId` char(50) DEFAULT NULL,
  `playlistId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `userId` (`userId`),
  KEY `playlistId` (`playlistId`),
  CONSTRAINT `sub_playlist_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sub_playlist_ibfk_2` FOREIGN KEY (`playlistId`) REFERENCES `playlist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of sub_playlist
-- ----------------------------
BEGIN;
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709964349418', '1709903810468', '2024-03-09 14:55:48', '2024-03-09 14:55:48');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709964349418', '1709821295905', '2024-03-09 14:55:51', '2024-03-09 14:55:51');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709726632137', '1709902138566', '2024-03-10 13:05:30', '2024-03-10 13:05:30');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709726632137', '1709733246094', '2024-03-10 13:12:01', '2024-03-10 13:12:01');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709726632137', '1709733236711', '2024-03-10 13:12:06', '2024-03-10 13:12:06');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709726632137', '1709733271462', '2024-03-10 13:30:51', '2024-03-10 13:30:51');
INSERT INTO `sub_playlist` (`userId`, `playlistId`, `createTime`, `updateTime`) VALUES ('1709726632137', '1709902163205', '2024-03-10 14:57:58', '2024-03-10 14:57:58');
COMMIT;

-- ----------------------------
-- Table structure for subscriber
-- ----------------------------
DROP TABLE IF EXISTS `subscriber`;
CREATE TABLE `subscriber` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `upId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  KEY `upId` (`upId`) USING BTREE,
  CONSTRAINT `subscriber_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `subscriber_ibfk_2` FOREIGN KEY (`upId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of subscriber
-- ----------------------------
BEGIN;
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972057262', '1709820642242', '1709968099989', '2024-03-09 16:14:17', '2024-03-09 16:14:17');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972061542', '1709820642242', '1709964349418', '2024-03-09 16:14:21', '2024-03-09 16:14:21');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972077529', '1709820642242', '1709728495272', '2024-03-09 16:14:37', '2024-03-09 16:14:37');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972362098', '1709968523870', '1709728495272', '2024-03-09 16:19:22', '2024-03-09 16:19:22');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972415240', '1709968523870', '1709962443377', '2024-03-09 16:20:15', '2024-03-09 16:20:15');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1709972511302', '1709968523870', '1709905648920', '2024-03-09 16:21:51', '2024-03-09 16:21:51');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710050120674', '1709726632137', '1709730380639', '2024-03-10 13:55:20', '2024-03-10 13:55:20');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710050124390', '1709726632137', '1709730367418', '2024-03-10 13:55:24', '2024-03-10 13:55:24');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710050145169', '1709726632137', '1709820642242', '2024-03-10 13:55:45', '2024-03-10 13:55:45');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710052115117', '1709726632137', '1709968099989', '2024-03-10 14:28:35', '2024-03-10 14:28:35');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710053860882', '1709726632137', '1709968523870', '2024-03-10 14:57:40', '2024-03-10 14:57:40');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710054341244', '1710054197921', '1709728495272', '2024-03-10 15:05:41', '2024-03-10 15:05:41');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1710056298768', '1709968099989', '1709726632137', '2024-03-10 15:38:18', '2024-03-10 15:38:18');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1711181331937', '1709726637539', '1709902530670', '2024-03-23 16:08:51', '2024-03-23 16:08:51');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1714549951911', '1714549381813', '1709964349418', '2024-05-01 15:52:31', '2024-05-01 15:52:31');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1714550024001', '1714549381813', '1709905648920', '2024-05-01 15:53:44', '2024-05-01 15:53:44');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1714552402943', '1709726632137', '1709968338867', '2024-05-01 16:33:22', '2024-05-01 16:33:22');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1714552425813', '1709726632137', '1709729533921', '2024-05-01 16:33:45', '2024-05-01 16:33:45');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1714552568569', '1709726632137', '1709733343047', '2024-05-01 16:36:08', '2024-05-01 16:36:08');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1735362117756', '1709726632137', '1709902530670', '2024-12-28 13:01:57', '2024-12-28 13:01:57');
INSERT INTO `subscriber` (`id`, `userId`, `upId`, `createTime`, `updateTime`) VALUES ('1735362398596', '1709726632137', '1709962443377', '2024-12-28 13:06:38', '2024-12-28 13:06:38');
COMMIT;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
BEGIN;
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726825594', 'gidle', '2024-03-06 20:07:05', '2024-03-06 20:07:05');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726836364', '韩国明星', '2024-03-06 20:07:16', '2024-03-06 20:07:16');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726843878', 'blankpink', '2024-03-06 20:07:23', '2024-03-06 20:07:23');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726852963', '短视频', '2024-03-06 20:07:32', '2024-03-06 20:07:32');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726860113', '搞笑', '2024-03-06 20:07:40', '2024-03-06 20:07:40');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726868096', '悦耳', '2024-03-06 20:07:48', '2024-03-06 20:07:48');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726874170', '野生动物', '2024-03-06 20:07:54', '2024-03-06 20:07:54');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726878629', '汽车', '2024-03-06 20:07:58', '2024-03-06 20:07:58');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726883613', '娱乐', '2024-03-06 20:08:03', '2024-03-06 20:08:03');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726903880', '音乐', '2024-03-06 20:08:23', '2024-03-06 20:08:23');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726910527', '励志', '2024-03-06 20:08:30', '2024-03-06 20:08:30');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726913961', '文案', '2024-03-06 20:08:33', '2024-03-06 20:08:33');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726917295', '足球', '2024-03-06 20:08:37', '2024-03-06 20:08:37');
INSERT INTO `tag` (`id`, `name`, `createTime`, `updateTime`) VALUES ('1709726928527', 'NBA', '2024-03-06 20:08:48', '2024-03-06 20:08:48');
COMMIT;

-- ----------------------------
-- Table structure for tag_video
-- ----------------------------
DROP TABLE IF EXISTS `tag_video`;
CREATE TABLE `tag_video` (
  `tId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`tId`,`vId`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  CONSTRAINT `tag_video_ibfk_1` FOREIGN KEY (`tId`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_video_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of tag_video
-- ----------------------------
BEGIN;
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726825594', '1709727225326', '2024-03-06 20:13:45', '2024-03-06 20:13:45');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726825594', '1710049033545', '2024-03-10 13:37:13', '2024-03-10 13:37:13');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726836364', '1709727225326', '2024-03-06 20:13:45', '2024-03-06 20:13:45');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726836364', '1709727694829', '2024-03-06 20:21:34', '2024-03-06 20:21:34');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726836364', '1709728097869', '2024-03-06 20:28:17', '2024-03-06 20:28:17');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726836364', '1709732612806', '2024-03-06 21:43:32', '2024-03-06 21:43:32');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726836364', '1710049033545', '2024-03-10 13:37:13', '2024-03-10 13:37:13');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726843878', '1709727694829', '2024-03-06 20:21:34', '2024-03-06 20:21:34');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726843878', '1709728097869', '2024-03-06 20:28:17', '2024-03-06 20:28:17');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726843878', '1714545759293', '2024-05-01 14:42:39', '2024-05-01 14:42:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709730689098', '2024-03-06 21:11:29', '2024-03-06 21:11:29');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709731471688', '2024-03-06 21:24:31', '2024-03-06 21:24:31');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709732368308', '2024-03-06 21:39:28', '2024-03-06 21:39:28');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709733037458', '2024-03-06 21:50:37', '2024-03-06 21:50:37');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709901189845', '2024-03-08 20:33:09', '2024-03-08 20:33:09');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709902167810', '2024-03-08 20:49:27', '2024-03-08 20:49:27');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709903474181', '2024-03-08 21:11:14', '2024-03-08 21:11:14');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709904147909', '2024-03-08 21:22:27', '2024-03-08 21:22:27');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709962703249', '2024-03-09 13:38:23', '2024-03-09 13:38:23');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1709966991829', '2024-03-09 14:49:51', '2024-03-09 14:49:51');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1714545759293', '2024-05-01 14:42:39', '2024-05-01 14:42:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726852963', '1735304876456', '2024-12-27 21:07:56', '2024-12-27 21:07:56');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1709727225326', '2024-03-06 20:13:45', '2024-03-06 20:13:45');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1709728788586', '2024-03-06 20:39:48', '2024-03-06 20:39:48');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1709731471688', '2024-03-06 21:24:31', '2024-03-06 21:24:31');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1709901227938', '2024-03-08 20:33:47', '2024-03-08 20:33:47');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1709904147909', '2024-03-08 21:22:27', '2024-03-08 21:22:27');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726860113', '1714545759293', '2024-05-01 14:42:39', '2024-05-01 14:42:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726868096', '1709731471688', '2024-03-06 21:24:31', '2024-03-06 21:24:31');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726868096', '1709732612806', '2024-03-06 21:43:32', '2024-03-06 21:43:32');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726868096', '1709902491136', '2024-03-08 20:54:51', '2024-03-08 20:54:51');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726868096', '1709962703249', '2024-03-09 13:38:23', '2024-03-09 13:38:23');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726868096', '1709966991829', '2024-03-09 14:49:51', '2024-03-09 14:49:51');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726874170', '1709728788586', '2024-03-06 20:39:48', '2024-03-06 20:39:48');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726874170', '1709730689098', '2024-03-06 21:11:29', '2024-03-06 21:11:29');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726878629', '1709901189845', '2024-03-08 20:33:09', '2024-03-08 20:33:09');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726878629', '1709901732306', '2024-03-08 20:42:12', '2024-03-08 20:42:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726878629', '1709903103144', '2024-03-08 21:05:03', '2024-03-08 21:05:03');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709727158279', '2024-03-06 20:12:38', '2024-03-06 20:12:38');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709727360760', '2024-03-06 20:16:00', '2024-03-06 20:16:00');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709728917857', '2024-03-06 20:41:57', '2024-03-06 20:41:57');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709731471688', '2024-03-06 21:24:31', '2024-03-06 21:24:31');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709733037458', '2024-03-06 21:50:37', '2024-03-06 21:50:37');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709901343387', '2024-03-08 20:35:43', '2024-03-08 20:35:43');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709901682371', '2024-03-08 20:41:22', '2024-03-08 20:41:22');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709903824403', '2024-03-08 21:17:04', '2024-03-08 21:17:04');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709903878483', '2024-03-08 21:17:58', '2024-03-08 21:17:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709904846470', '2024-03-08 21:34:06', '2024-03-08 21:34:06');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709906040181', '2024-03-08 21:54:00', '2024-03-08 21:54:00');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1709906184558', '2024-03-08 21:56:24', '2024-03-08 21:56:24');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1710054012961', '2024-03-10 15:00:12', '2024-03-10 15:00:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726883613', '1714546475533', '2024-05-01 14:54:35', '2024-05-01 14:54:35');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709727158279', '2024-03-06 20:12:38', '2024-03-06 20:12:38');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709727360760', '2024-03-06 20:16:00', '2024-03-06 20:16:00');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709728097869', '2024-03-06 20:28:17', '2024-03-06 20:28:17');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709728917857', '2024-03-06 20:41:57', '2024-03-06 20:41:57');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709729818524', '2024-03-06 20:56:58', '2024-03-06 20:56:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709730058428', '2024-03-06 21:00:58', '2024-03-06 21:00:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709731599134', '2024-03-06 21:26:39', '2024-03-06 21:26:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709732368308', '2024-03-06 21:39:28', '2024-03-06 21:39:28');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709732612806', '2024-03-06 21:43:32', '2024-03-06 21:43:32');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709901227938', '2024-03-08 20:33:47', '2024-03-08 20:33:47');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709902167810', '2024-03-08 20:49:27', '2024-03-08 20:49:27');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709902212933', '2024-03-08 20:50:12', '2024-03-08 20:50:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709902491136', '2024-03-08 20:54:51', '2024-03-08 20:54:51');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709902846546', '2024-03-08 21:00:46', '2024-03-08 21:00:46');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709903103144', '2024-03-08 21:05:03', '2024-03-08 21:05:03');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709903824403', '2024-03-08 21:17:04', '2024-03-08 21:17:04');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709903878483', '2024-03-08 21:17:58', '2024-03-08 21:17:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709904597222', '2024-03-08 21:29:57', '2024-03-08 21:29:57');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709904846470', '2024-03-08 21:34:06', '2024-03-08 21:34:06');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709905956013', '2024-03-08 21:52:36', '2024-03-08 21:52:36');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709906040181', '2024-03-08 21:54:00', '2024-03-08 21:54:00');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709906560937', '2024-03-08 22:02:40', '2024-03-08 22:02:40');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709963106823', '2024-03-09 13:45:06', '2024-03-09 13:45:06');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709963889528', '2024-03-09 13:58:09', '2024-03-09 13:58:09');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709964424184', '2024-03-09 14:07:04', '2024-03-09 14:07:04');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709964765739', '2024-03-09 14:15:48', '2024-03-09 14:15:48');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709966796036', '2024-03-09 14:46:36', '2024-03-09 14:46:36');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709968946947', '2024-03-09 15:22:26', '2024-03-09 15:22:26');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709968992295', '2024-03-09 15:23:12', '2024-03-09 15:23:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1709970879644', '2024-03-09 15:54:39', '2024-03-09 15:54:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1714546475533', '2024-05-01 14:54:35', '2024-05-01 14:54:35');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1714549541546', '2024-05-01 15:45:41', '2024-05-01 15:45:41');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726903880', '1735304876456', '2024-12-27 21:07:56', '2024-12-27 21:07:56');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709727158279', '2024-03-06 20:12:38', '2024-03-06 20:12:38');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709729514660', '2024-03-06 20:51:54', '2024-03-06 20:51:54');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709729818524', '2024-03-06 20:56:58', '2024-03-06 20:56:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709730058428', '2024-03-06 21:00:58', '2024-03-06 21:00:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709732368308', '2024-03-06 21:39:28', '2024-03-06 21:39:28');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709734139055', '2024-03-06 22:08:59', '2024-03-06 22:08:59');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709903474181', '2024-03-08 21:11:14', '2024-03-08 21:11:14');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709904597222', '2024-03-08 21:29:57', '2024-03-08 21:29:57');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709905956013', '2024-03-08 21:52:36', '2024-03-08 21:52:36');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709906184558', '2024-03-08 21:56:24', '2024-03-08 21:56:24');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709963106823', '2024-03-09 13:45:06', '2024-03-09 13:45:06');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709964424184', '2024-03-09 14:07:04', '2024-03-09 14:07:04');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709966796036', '2024-03-09 14:46:36', '2024-03-09 14:46:36');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709968946947', '2024-03-09 15:22:26', '2024-03-09 15:22:26');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1709968992295', '2024-03-09 15:23:12', '2024-03-09 15:23:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1710054012961', '2024-03-10 15:00:12', '2024-03-10 15:00:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1714549541546', '2024-05-01 15:45:41', '2024-05-01 15:45:41');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1735304876456', '2024-12-27 21:07:56', '2024-12-27 21:07:56');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726910527', '1735306697868', '2024-12-27 21:38:17', '2024-12-27 21:38:17');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709729476568', '2024-03-06 20:51:16', '2024-03-06 20:51:16');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709729818524', '2024-03-06 20:56:58', '2024-03-06 20:56:58');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709734139055', '2024-03-06 22:08:59', '2024-03-06 22:08:59');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709901525538', '2024-03-08 20:38:45', '2024-03-08 20:38:45');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709902846546', '2024-03-08 21:00:46', '2024-03-08 21:00:46');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709963106823', '2024-03-09 13:45:06', '2024-03-09 13:45:06');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709964424184', '2024-03-09 14:07:04', '2024-03-09 14:07:04');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709966796036', '2024-03-09 14:46:36', '2024-03-09 14:46:36');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1709970879644', '2024-03-09 15:54:39', '2024-03-09 15:54:39');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1710054012961', '2024-03-10 15:00:12', '2024-03-10 15:00:12');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726913961', '1735306697868', '2024-12-27 21:38:17', '2024-12-27 21:38:17');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726917295', '1709728442684', '2024-03-06 20:34:02', '2024-03-06 20:34:02');
INSERT INTO `tag_video` (`tId`, `vId`, `createTime`, `updateTime`) VALUES ('1709726917295', '1709729476568', '2024-03-06 20:51:16', '2024-03-06 20:51:16');
COMMIT;

-- ----------------------------
-- Table structure for thumb
-- ----------------------------
DROP TABLE IF EXISTS `thumb`;
CREATE TABLE `thumb` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `commentId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `vId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `tread` int DEFAULT NULL,
  `mId` char(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `userId` (`userId`) USING BTREE,
  KEY `vId` (`vId`) USING BTREE,
  KEY `commentId` (`commentId`) USING BTREE,
  CONSTRAINT `thumb_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thumb_ibfk_2` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `thumb_ibfk_3` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of thumb
-- ----------------------------
BEGIN;
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709731686623', '1709729533921', NULL, '1709728442684', '2024-03-06 21:28:06', '2024-03-06 21:28:06', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709731742286', '1709726632137', NULL, '1709731599134', '2024-03-06 21:29:02', '2024-03-06 21:29:02', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709731898418', '1709728495272', NULL, '1709727158279', '2024-03-06 21:31:38', '2024-03-06 21:31:38', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709733106867', '1709728495272', '1709731633317', NULL, '2024-03-06 21:51:46', '2024-03-06 21:51:46', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709733632018', '1709733343047', NULL, '1709727360760', '2024-03-06 22:00:32', '2024-03-06 22:00:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734172386', '1709733343047', NULL, '1709734139055', '2024-03-06 22:09:32', '2024-03-06 22:09:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734784521', '1709726632137', NULL, '1709728097869', '2024-03-06 22:19:44', '2024-03-06 22:19:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734836942', '1709726632137', NULL, '1709728917857', '2024-03-06 22:20:36', '2024-03-06 22:20:36', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734842136', '1709726632137', '1709731656397', NULL, '2024-03-06 22:20:42', '2024-03-06 22:20:42', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734843324', '1709726632137', '1709731785881', NULL, '2024-03-06 22:20:43', '2024-03-06 22:20:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709734844359', '1709726632137', '1709733145297', NULL, '2024-03-06 22:20:44', '2024-03-06 22:20:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709735139769', '1709726632137', NULL, '1709729514660', '2024-03-06 22:25:39', '2024-03-06 22:25:39', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709820341168', '1709726632137', NULL, '1709732612806', '2024-03-07 22:05:41', '2024-03-07 22:05:41', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709820373718', '1709726632137', '1709731885398', NULL, '2024-03-07 22:06:13', '2024-03-07 22:06:13', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709820374968', '1709726632137', '1709733416895', NULL, '2024-03-07 22:06:14', '2024-03-07 22:06:14', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709820376333', '1709726632137', '1709733617413', NULL, '2024-03-07 22:06:16', '2024-03-07 22:06:16', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821138868', '1709820642242', NULL, '1709730058428', '2024-03-07 22:18:58', '2024-03-07 22:18:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821241298', '1709820642242', '1709731644064', NULL, '2024-03-07 22:20:41', '2024-03-07 22:20:41', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821242261', '1709820642242', '1709731878212', NULL, '2024-03-07 22:20:42', '2024-03-07 22:20:42', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821243246', '1709820642242', '1709733517550', NULL, '2024-03-07 22:20:43', '2024-03-07 22:20:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821244308', '1709820642242', '1709820137548', NULL, '2024-03-07 22:20:44', '2024-03-07 22:20:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709821245291', '1709820642242', '1709821132342', NULL, '2024-03-07 22:20:45', '2024-03-07 22:20:45', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709904165708', '1709902530670', NULL, '1709902167810', '2024-03-08 21:22:45', '2024-03-08 21:22:45', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709904890028', '1709902530670', NULL, '1709904597222', '2024-03-08 21:34:50', '2024-03-08 21:34:50', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905253442', '1709902530670', NULL, '1709903824403', '2024-03-08 21:40:53', '2024-03-08 21:40:53', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905393357', '1709820642242', NULL, '1709901227938', '2024-03-08 21:43:13', '2024-03-08 21:43:13', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905528975', '1709733343047', NULL, '1709904597222', '2024-03-08 21:45:28', '2024-03-08 21:45:28', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905536272', '1709733343047', NULL, '1709904147909', '2024-03-08 21:45:36', '2024-03-08 21:45:36', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905547389', '1709733343047', NULL, '1709903824403', '2024-03-08 21:45:47', '2024-03-08 21:45:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709905565838', '1709733343047', NULL, '1709902167810', '2024-03-08 21:46:05', '2024-03-08 21:46:05', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709906320709', '1709820642242', NULL, '1709905956013', '2024-03-08 21:58:40', '2024-03-08 21:58:40', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709906763683', '1709820642242', NULL, '1709731599134', '2024-03-08 22:06:03', '2024-03-08 22:06:03', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967409792', '1709964349418', NULL, '1709903103144', '2024-03-09 14:56:49', '2024-03-09 14:56:49', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967795449', '1709963638248', NULL, '1709902167810', '2024-03-09 15:03:15', '2024-03-09 15:03:15', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967827277', '1709963638248', NULL, '1709727694829', '2024-03-09 15:03:47', '2024-03-09 15:03:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967830799', '1709963638248', NULL, '1709732612806', '2024-03-09 15:03:50', '2024-03-09 15:03:50', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967837574', '1709963638248', NULL, '1709963889528', '2024-03-09 15:03:57', '2024-03-09 15:03:57', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967839230', '1709963638248', NULL, '1709906040181', '2024-03-09 15:03:59', '2024-03-09 15:03:59', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967922127', '1709962443377', NULL, '1709902167810', '2024-03-09 15:05:22', '2024-03-09 15:05:22', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967929626', '1709962443377', NULL, '1709904147909', '2024-03-09 15:05:29', '2024-03-09 15:05:29', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967954489', '1709962443377', NULL, '1709728097869', '2024-03-09 15:05:54', '2024-03-09 15:05:54', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967962342', '1709962443377', NULL, '1709727158279', '2024-03-09 15:06:02', '2024-03-09 15:06:02', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967970422', '1709962443377', NULL, '1709902491136', '2024-03-09 15:06:10', '2024-03-09 15:06:10', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967977157', '1709962443377', '1709905214138', NULL, '2024-03-09 15:06:17', '2024-03-09 15:06:17', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967978057', '1709962443377', '1709905399454', NULL, '2024-03-09 15:06:18', '2024-03-09 15:06:18', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967978890', '1709962443377', '1709905478985', NULL, '2024-03-09 15:06:18', '2024-03-09 15:06:18', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709967979840', '1709962443377', '1709967968385', NULL, '2024-03-09 15:06:19', '2024-03-09 15:06:19', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709968002874', '1709962443377', NULL, '1709962703249', '2024-03-09 15:06:42', '2024-03-09 15:06:42', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709968016224', '1709962443377', NULL, '1709902846546', '2024-03-09 15:06:56', '2024-03-09 15:06:56', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709968055143', '1709962443377', NULL, '1709906040181', '2024-03-09 15:07:35', '2024-03-09 15:07:35', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709968069270', '1709962443377', NULL, '1709905956013', '2024-03-09 15:07:49', '2024-03-09 15:07:49', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709969056849', '1709968338867', NULL, '1709901227938', '2024-03-09 15:24:16', '2024-03-09 15:24:16', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709969066131', '1709968338867', NULL, '1709964765739', '2024-03-09 15:24:26', '2024-03-09 15:24:26', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709969141581', '1709968338867', NULL, '1709732612806', '2024-03-09 15:25:41', '2024-03-09 15:25:41', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709969147912', '1709968338867', NULL, '1709727694829', '2024-03-09 15:25:47', '2024-03-09 15:25:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709970367200', '1709968338867', '1709967513448', NULL, '2024-03-09 15:46:07', '2024-03-09 15:46:07', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709970368130', '1709968338867', '1709969031329', NULL, '2024-03-09 15:46:08', '2024-03-09 15:46:08', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972101643', '1709820642242', NULL, '1709964424184', '2024-03-09 16:15:01', '2024-03-09 16:15:01', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972104910', '1709820642242', NULL, '1709963889528', '2024-03-09 16:15:04', '2024-03-09 16:15:04', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972106991', '1709820642242', NULL, '1709968946947', '2024-03-09 16:15:06', '2024-03-09 16:15:06', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972312267', '1709968523870', NULL, '1709968946947', '2024-03-09 16:18:32', '2024-03-09 16:18:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972338404', '1709968523870', NULL, '1709903474181', '2024-03-09 16:18:58', '2024-03-09 16:18:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972346822', '1709968523870', NULL, '1709903824403', '2024-03-09 16:19:06', '2024-03-09 16:19:06', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972423251', '1709968523870', NULL, '1709905956013', '2024-03-09 16:20:23', '2024-03-09 16:20:23', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972437251', '1709968523870', NULL, '1709727360760', '2024-03-09 16:20:37', '2024-03-09 16:20:37', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972477770', '1709968523870', NULL, '1709729476568', '2024-03-09 16:21:17', '2024-03-09 16:21:17', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1709972483385', '1709968523870', NULL, '1709728442684', '2024-03-09 16:21:23', '2024-03-09 16:21:23', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710049162505', '1709726632137', NULL, '1709964424184', '2024-03-10 13:39:22', '2024-03-10 13:39:22', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710049169739', '1709726632137', '1709905124454', NULL, '2024-03-10 13:39:29', '2024-03-10 13:39:29', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710049170686', '1709726632137', '1709821059790', NULL, '2024-03-10 13:39:30', '2024-03-10 13:39:30', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710049172474', '1709726632137', '1709733455964', NULL, '2024-03-10 13:39:32', '2024-03-10 13:39:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710049998412', '1709726632137', NULL, '1709966796036', '2024-03-10 13:53:18', '2024-03-10 13:53:18', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710050141216', '1709726632137', '1709967526679', NULL, '2024-03-10 13:55:41', '2024-03-10 13:55:41', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710050143056', '1709726632137', '1709969127061', NULL, '2024-03-10 13:55:43', '2024-03-10 13:55:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710050143820', '1709726632137', '1709967986940', NULL, '2024-03-10 13:55:43', '2024-03-10 13:55:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710050255824', '1709820642242', NULL, '1710049033545', '2024-03-10 13:57:35', '2024-03-10 13:57:35', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710050278434', '1709968338867', NULL, '1710049033545', '2024-03-10 13:57:58', '2024-03-10 13:57:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710051364556', '1709726632137', NULL, '1709903103144', '2024-03-10 14:16:04', '2024-03-10 14:16:04', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710051374248', '1709726632137', '1709905553636', NULL, '2024-03-10 14:16:14', '2024-03-10 14:16:14', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710051381131', '1709726632137', NULL, '1709901682371', '2024-03-10 14:16:21', '2024-03-10 14:16:21', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710051411961', '1709726632137', NULL, '1709970879644', '2024-03-10 14:16:51', '2024-03-10 14:16:51', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710052103222', '1709726632137', NULL, '1709968946947', '2024-03-10 14:28:23', '2024-03-10 14:28:23', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710052112179', '1709726632137', '1709972310847', NULL, '2024-03-10 14:28:32', '2024-03-10 14:28:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710052113337', '1709726632137', '1709969025214', NULL, '2024-03-10 14:28:33', '2024-03-10 14:28:33', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710052150116', '1709726632137', NULL, '1709728442684', '2024-03-10 14:29:10', '2024-03-10 14:29:10', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710052187080', '1709726632137', NULL, '1709727694829', '2024-03-10 14:29:47', '2024-03-10 14:29:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710053589853', '1709726632137', '1709972317017', NULL, '2024-03-10 14:53:09', '2024-03-10 14:53:09', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710053590816', '1709726632137', '1709969119612', NULL, '2024-03-10 14:53:10', '2024-03-10 14:53:10', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710053598966', '1709726632137', NULL, '1709731471688', '2024-03-10 14:53:18', '2024-03-10 14:53:18', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710053673561', '1709726632137', NULL, '1709727158279', '2024-03-10 14:54:33', '2024-03-10 14:54:33', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710053869443', '1709726632137', NULL, NULL, '2024-03-10 14:57:49', '2024-03-10 14:57:49', 0, '1709971885974');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710160977957', '1709726632137', NULL, '1709906040181', '2024-03-11 20:42:57', '2024-03-11 20:42:57', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161038666', '1709726632137', '1709731830601', NULL, '2024-03-11 20:43:58', '2024-03-11 20:43:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161039590', '1709726632137', '1709731741300', NULL, '2024-03-11 20:43:59', '2024-03-11 20:43:59', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161068498', '1709726632137', '1709972345598', NULL, '2024-03-11 20:44:28', '2024-03-11 20:44:28', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161069457', '1709726632137', '1709967537164', NULL, '2024-03-11 20:44:29', '2024-03-11 20:44:29', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161070813', '1709726632137', '1709905546572', NULL, '2024-03-11 20:44:30', '2024-03-11 20:44:30', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710161072190', '1709726632137', '1709905457039', NULL, '2024-03-11 20:44:32', '2024-03-11 20:44:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710247328140', '1709726632137', '1709972422299', NULL, '2024-03-12 20:42:08', '2024-03-12 20:42:08', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710247600511', '1709726632137', '1710051371979', NULL, '2024-03-12 20:46:40', '2024-03-12 20:46:40', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710248028311', '1709726632137', NULL, NULL, '2024-03-12 20:53:48', '2024-03-12 20:53:48', 0, '1709971865825');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710248029974', '1709726632137', NULL, NULL, '2024-03-12 20:53:49', '2024-03-12 20:53:49', 0, '1709971838958');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710248038593', '1709726632137', '1709969105694', NULL, '2024-03-12 20:53:58', '2024-03-12 20:53:58', 1, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710248043459', '1709726632137', NULL, '1709905956013', '2024-03-12 20:54:03', '2024-03-12 20:54:03', 1, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710330058271', '1709726632137', NULL, '1709964765739', '2024-03-13 19:40:58', '2024-03-13 19:40:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710415498623', '1709726632137', NULL, '1709962703249', '2024-03-14 19:24:58', '2024-03-14 19:24:58', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418554050', '1709726632137', NULL, '1709902491136', '2024-03-14 20:15:54', '2024-03-14 20:15:54', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418606809', '1709726632137', '1709733499596', NULL, '2024-03-14 20:16:46', '2024-03-14 20:16:46', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418607811', '1709726632137', '1709731848530', NULL, '2024-03-14 20:16:47', '2024-03-14 20:16:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418608821', '1709726632137', '1709821137425', NULL, '2024-03-14 20:16:48', '2024-03-14 20:16:48', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418610293', '1709726632137', '1709967944137', NULL, '2024-03-14 20:16:50', '2024-03-14 20:16:50', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1710418611154', '1709726632137', '1709972284263', NULL, '2024-03-14 20:16:51', '2024-03-14 20:16:51', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714486544114', '1709726632137', '1709972320697', NULL, '2024-04-30 22:15:44', '2024-04-30 22:15:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714486545707', '1709726632137', '1709969034980', NULL, '2024-04-30 22:15:45', '2024-04-30 22:15:45', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714486573429', '1709726632137', NULL, '1709963889528', '2024-04-30 22:16:13', '2024-04-30 22:16:13', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714486862386', '1709726632137', '1709967513448', NULL, '2024-04-30 22:21:02', '2024-04-30 22:21:02', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714486892617', '1709726632137', '1714486787235', NULL, '2024-04-30 22:21:32', '2024-04-30 22:21:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714487459112', '1709726632137', '1710052108869', NULL, '2024-04-30 22:30:59', '2024-04-30 22:30:59', 1, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714488290918', '1709726632137', NULL, '1710054012961', '2024-04-30 22:44:50', '2024-04-30 22:44:50', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714544792953', '1714543289857', NULL, '1709968946947', '2024-05-01 14:26:32', '2024-05-01 14:26:32', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714545003113', '1714543289857', NULL, '1710054012961', '2024-05-01 14:30:03', '2024-05-01 14:30:03', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714545604599', '1714543289857', NULL, '1709970879644', '2024-05-01 14:40:04', '2024-05-01 14:40:04', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714545795936', '1714543289857', NULL, '1714545759293', '2024-05-01 14:43:15', '2024-05-01 14:43:15', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714545805299', '1714543289857', '1714545804057', NULL, '2024-05-01 14:43:25', '2024-05-01 14:43:25', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714545815674', '1714543289857', '1714545811745', NULL, '2024-05-01 14:43:35', '2024-05-01 14:43:35', 1, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714546108741', '1714543289857', NULL, '1709966796036', '2024-05-01 14:48:28', '2024-05-01 14:48:28', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714546611566', '1714543289857', NULL, '1709903824403', '2024-05-01 14:56:51', '2024-05-01 14:56:51', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714549243797', '1714543289857', '1709905521470', NULL, '2024-05-01 15:40:43', '2024-05-01 15:40:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714549245900', '1714543289857', '1709967591632', NULL, '2024-05-01 15:40:45', '2024-05-01 15:40:45', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714549246820', '1714543289857', '1709972352966', NULL, '2024-05-01 15:40:46', '2024-05-01 15:40:46', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714550026773', '1714549381813', '1709969114511', NULL, '2024-05-01 15:53:46', '2024-05-01 15:53:46', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714550028371', '1714549381813', '1709968054084', NULL, '2024-05-01 15:53:48', '2024-05-01 15:53:48', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714550029243', '1714549381813', '1709906307789', NULL, '2024-05-01 15:53:49', '2024-05-01 15:53:49', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552303543', '1709726632137', '1709967568000', NULL, '2024-05-01 16:31:43', '2024-05-01 16:31:43', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552304461', '1709726632137', '1709968025838', NULL, '2024-05-01 16:31:44', '2024-05-01 16:31:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552307146', '1709726632137', '1709821080239', NULL, '2024-05-01 16:31:47', '2024-05-01 16:31:47', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552375333', '1709726632137', NULL, NULL, '2024-05-01 16:32:55', '2024-05-01 16:32:55', 0, '1709971113876');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552377132', '1709726632137', NULL, NULL, '2024-05-01 16:32:57', '2024-05-01 16:32:57', 0, '1709971086960');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552397730', '1709726632137', '1709972271066', NULL, '2024-05-01 16:33:17', '2024-05-01 16:33:17', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552398814', '1709726632137', '1709969064198', NULL, '2024-05-01 16:33:18', '2024-05-01 16:33:18', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552426949', '1709726632137', '1709972258478', NULL, '2024-05-01 16:33:46', '2024-05-01 16:33:46', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552428081', '1709726632137', '1709969070580', NULL, '2024-05-01 16:33:48', '2024-05-01 16:33:48', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552430730', '1709726632137', '1709731709931', NULL, '2024-05-01 16:33:50', '2024-05-01 16:33:50', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552431930', '1709726632137', '1709731768884', NULL, '2024-05-01 16:33:51', '2024-05-01 16:33:51', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552432800', '1709726632137', '1709731854915', NULL, '2024-05-01 16:33:52', '2024-05-01 16:33:52', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552433762', '1709726632137', '1709733567745', NULL, '2024-05-01 16:33:53', '2024-05-01 16:33:53', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552435763', '1709726632137', '1709821067094', NULL, '2024-05-01 16:33:55', '2024-05-01 16:33:55', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552460918', '1709726632137', '1709967960639', NULL, '2024-05-01 16:34:20', '2024-05-01 16:34:20', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552461945', '1709726632137', '1709905229639', NULL, '2024-05-01 16:34:21', '2024-05-01 16:34:21', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552463049', '1709726632137', '1709733469763', NULL, '2024-05-01 16:34:23', '2024-05-01 16:34:23', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552465118', '1709726632137', '1709731897014', NULL, '2024-05-01 16:34:25', '2024-05-01 16:34:25', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552511283', '1709726632137', '1709731878212', NULL, '2024-05-01 16:35:11', '2024-05-01 16:35:11', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552512614', '1709726632137', '1709731644064', NULL, '2024-05-01 16:35:12', '2024-05-01 16:35:12', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552570453', '1709726632137', NULL, '1709734139055', '2024-05-01 16:36:10', '2024-05-01 16:36:10', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714552619153', '1709726632137', '1714552617185', NULL, '2024-05-01 16:36:59', '2024-05-01 16:36:59', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714632325338', '1709726632137', NULL, '1714545759293', '2024-05-02 14:45:25', '2024-05-02 14:45:25', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714632353700', '1709726632137', '1714632351581', NULL, '2024-05-02 14:45:53', '2024-05-02 14:45:53', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714632574446', '1709726632137', '1709967530400', NULL, '2024-05-02 14:49:34', '2024-05-02 14:49:34', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714632576364', '1709726632137', '1709969130964', NULL, '2024-05-02 14:49:36', '2024-05-02 14:49:36', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714632577260', '1709726632137', '1709967991054', NULL, '2024-05-02 14:49:37', '2024-05-02 14:49:37', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714633256114', '1709726632137', '1709905541021', NULL, '2024-05-02 15:00:56', '2024-05-02 15:00:56', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714639795781', '1709726632137', NULL, '1709729818524', '2024-05-02 16:49:55', '2024-05-02 16:49:55', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714639815029', '1709726632137', '1709733542965', NULL, '2024-05-02 16:50:15', '2024-05-02 16:50:15', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714639817193', '1709726632137', '1709821093556', NULL, '2024-05-02 16:50:17', '2024-05-02 16:50:17', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1714639968024', '1709726632137', '1709820087432', NULL, '2024-05-02 16:52:48', '2024-05-02 16:52:48', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1735310664266', '1709726632137', NULL, NULL, '2024-12-27 22:44:24', '2024-12-27 22:44:24', 0, '1714552606427');
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1735310684792', '1709726632137', '1710056216849', NULL, '2024-12-27 22:44:44', '2024-12-27 22:44:44', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1735361881774', '1709726632137', '1709972406968', NULL, '2024-12-28 12:58:01', '2024-12-28 12:58:01', 0, NULL);
INSERT INTO `thumb` (`id`, `userId`, `commentId`, `vId`, `createTime`, `updateTime`, `tread`, `mId`) VALUES ('1735910898942', '1709726632137', '1709969031329', NULL, '2025-01-03 21:28:18', '2025-01-03 21:28:18', 0, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '1',
  `userName` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `avatarUrl` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `originalname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mimetype` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dest` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `filename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `size` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `history` int DEFAULT '1',
  `isExplore` int DEFAULT '0',
  `manage` int DEFAULT '0',
  PRIMARY KEY (`userId`) USING BTREE,
  UNIQUE KEY `userName` (`userName`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709726632137', '叶子', '123', 'http://localhost:8888/user/avatar/1709726632137', '2024-03-06 20:03:52', '2024-03-06 20:04:21', '叶子.jpg', 'image/jpeg', './upload/user/avatar', '1709726661594.jpg', '63528', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709726637539', 'guobin', '123', 'http://localhost:8888/user/avatar/1709726637539', '2024-03-06 20:03:57', '2024-03-10 13:59:05', 'guobin.jpeg', 'image/jpeg', './upload/user/avatar', '1709734996197.jpeg', '55801', 1, 0, 1);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709728495272', 'BugMa', '123', 'http://localhost:8888/user/avatar/1709728495272', '2024-03-06 20:34:55', '2024-03-06 20:35:58', 'OIP-C.jpeg', 'image/jpeg', './upload/user/avatar', '1709728558771.jpeg', '52906', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709729533921', '小夜刀', '123', 'http://localhost:8888/user/avatar/1709729533921', '2024-03-06 20:52:13', '2024-03-06 20:52:48', '小夜刀.jpeg', 'image/jpeg', './upload/user/avatar', '1709729568351.jpeg', '53984', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730195053', '音乐', '123', 'http://localhost:8888/user/avatar/1709730195053', '2024-03-06 21:03:15', '2024-03-06 21:12:52', '1701443515639.jpeg', 'image/jpeg', './upload/user/avatar', '1709730656490.jpeg', '14629', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730357380', '游戏', '123', 'http://localhost:8888/user/avatar/1709730357380', '2024-03-06 21:05:57', '2024-03-06 21:12:48', '1702110485207.png', 'image/png', './upload/user/avatar', '1709730641208.png', '7063', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730362355', '新闻', '123', 'http://localhost:8888/user/avatar/1709730362355', '2024-03-06 21:06:02', '2024-03-06 21:12:43', '1702110573099.jpeg', 'image/jpeg', './upload/user/avatar', '1709730625781.jpeg', '71249', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730367418', '学习', '123', 'http://localhost:8888/user/avatar/1709730367418', '2024-03-06 21:06:07', '2024-03-06 21:14:26', 'xuexi.jpeg', 'image/jpeg', './upload/user/avatar', '1709730864913.jpeg', '53267', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730372557', '体育', '123', 'http://localhost:8888/user/avatar/1709730372557', '2024-03-06 21:06:12', '2024-03-06 21:12:18', '1701352922838.jpeg', 'image/jpeg', './upload/user/avatar', '1709730611078.jpeg', '13970', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709730380639', '电影和节目', '123', 'http://localhost:8888/user/avatar/1709730380639', '2024-03-06 21:06:20', '2024-03-06 21:14:59', '电影.jpeg', 'image/jpeg', './upload/user/avatar', '1709730899044.jpeg', '77229', 1, 1, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709733343047', '特朗普', '123', 'http://localhost:8888/user/avatar/1709733343047', '2024-03-06 21:55:43', '2024-03-06 21:56:25', '特朗普.jpeg', 'image/jpeg', './upload/user/avatar', '1709733385002.jpeg', '56698', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709820642242', '梅子', '123', 'http://localhost:8888/user/avatar/1709820642242', '2024-03-07 22:10:42', '2024-03-07 22:11:29', 'jennie.jpeg', 'image/jpeg', './upload/user/avatar', '1709820689205.jpeg', '79802', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709902530670', '旎旎', '123', 'http://localhost:8888/user/avatar/1709902530670', '2024-03-08 20:55:30', '2024-03-08 20:57:04', '旎旎.jpeg', 'image/jpeg', './upload/user/avatar', '1709902624411.jpeg', '56214', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709905648920', '鞋底的石子儿', '123', 'http://localhost:8888/user/avatar/1709905648920', '2024-03-08 21:47:28', '2024-03-08 21:49:07', '诗之二.jpeg', 'image/jpeg', './upload/user/avatar', '1709905747300.jpeg', '73822', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709962443377', '郭嘉', '123', 'http://localhost:8888/user/avatar/1709962443377', '2024-03-09 13:34:03', '2024-03-09 13:36:14', '3.jpeg', 'image/jpeg', './upload/user/avatar', '1709962574468.jpeg', '61901', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709963638248', '叉叉', '123', 'http://localhost:8888/user/avatar/1709963638248', '2024-03-09 13:53:58', '2024-03-09 13:55:37', '4.jpeg', 'image/jpeg', './upload/user/avatar', '1709963737614.jpeg', '60618', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709964349418', '亲亲', '123', 'http://localhost:8888/user/avatar/1709964349418', '2024-03-09 14:05:49', '2024-03-09 14:07:53', '6.jpeg', 'image/jpeg', './upload/user/avatar', '1709964473540.jpeg', '61622', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709968099989', '橙子', '123', 'http://localhost:8888/user/avatar/1709968099989', '2024-03-09 15:08:19', '2024-03-09 15:10:01', '8.jpeg', 'image/jpeg', './upload/user/avatar', '1709968201654.jpeg', '87812', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709968338867', 'ln', '123', 'http://localhost:8888/user/avatar/1709968338867', '2024-03-09 15:12:18', '2024-03-09 15:14:43', '9.jpg', 'image/jpeg', './upload/user/avatar', '1709968483872.jpg', '25564', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1709968523870', '浪花', '123', 'http://localhost:8888/user/avatar/1709968523870', '2024-03-09 15:15:23', '2024-03-09 15:16:18', '10.jpeg', 'image/jpeg', './upload/user/avatar', '1709968578834.jpeg', '83398', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1710054197921', '欢喜', '123', 'http://localhost:8888/user/avatar/1710054197921', '2024-03-10 15:03:17', '2024-03-10 15:03:39', '头像.jpeg', 'image/jpeg', './upload/user/avatar', '1710054219804.jpeg', '61435', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1714543289857', '猪猪', '123', 'http://localhost:8888/user/avatar/1714543289857', '2024-05-01 14:01:29', '2024-05-01 14:30:44', '动漫.jpeg', 'image/jpeg', './upload/user/avatar', '1714545044547.jpeg', '55531', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1714549381813', '朴彩英', '123', 'http://localhost:8888/user/avatar/1714549381813', '2024-05-01 15:43:01', '2024-05-01 15:43:51', '朴彩英.jpeg', 'image/jpeg', './upload/user/avatar', '1714549431980.jpeg', '87297', 1, 0, 0);
INSERT INTO `user` (`userId`, `userName`, `password`, `avatarUrl`, `createTime`, `updateTime`, `originalname`, `mimetype`, `dest`, `filename`, `size`, `history`, `isExplore`, `manage`) VALUES ('1735910367763', '如意', '123', NULL, '2025-01-03 21:19:27', '2025-01-03 21:19:27', NULL, NULL, NULL, NULL, NULL, 1, 0, 0);
COMMIT;

-- ----------------------------
-- Table structure for user_block
-- ----------------------------
DROP TABLE IF EXISTS `user_block`;
CREATE TABLE `user_block` (
  `userId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `blockId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`userId`,`blockId`) USING BTREE,
  KEY `blockId` (`blockId`) USING BTREE,
  CONSTRAINT `user_block_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_block_ibfk_2` FOREIGN KEY (`blockId`) REFERENCES `block` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_block
-- ----------------------------
BEGIN;
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709728495272', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709820642242', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709963638248', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709964349418', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968338867', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968523870', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1710054197921', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1714549381813', '1667028360697');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709728495272', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709820642242', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709963638248', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709964349418', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968338867', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968523870', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1710054197921', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1714549381813', '1667028411493');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709728495272', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709820642242', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709963638248', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709964349418', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968338867', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968523870', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1710054197921', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1714549381813', '1667028662350');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709726632137', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709728495272', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709963638248', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709964349418', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968523870', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1710054197921', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1714549381813', '1667028677380');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709726632137', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709728495272', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709820642242', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709963638248', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709964349418', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1709968523870', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1710054197921', '1667028710453');
INSERT INTO `user_block` (`userId`, `blockId`) VALUES ('1714549381813', '1667028710453');
COMMIT;

-- ----------------------------
-- Table structure for user_chat_queue
-- ----------------------------
DROP TABLE IF EXISTS `user_chat_queue`;
CREATE TABLE `user_chat_queue` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `sourceUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `targetUser` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_chat_queue
-- ----------------------------
BEGIN;
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1710050219666', '', '1709726632137', '1709820642242', '2024-03-10 13:56:59', '2024-03-10 13:56:59');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1710052396364', '', '1709728495272', '1709726632137', '2024-03-10 14:33:16', '2024-03-10 14:33:16');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1710052405623', '今天适合学习', '1709726632137', '1709728495272', '2024-03-10 14:33:25', '2024-03-10 14:33:25');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1710053795942', '应该学前端哈哈哈', '1709968099989', '1709726632137', '2024-03-10 14:56:35', '2024-03-10 14:57:33');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1710053802679', '最近在学java', '1709726632137', '1709968099989', '2024-03-10 14:56:42', '2024-03-10 14:57:23');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1712064262119', '', '1709968523870', '1709726632137', '2024-04-02 21:24:22', '2024-04-02 21:24:22');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1714632259018', '我也喜欢你很久了', '1709726632137', '1714543289857', '2024-05-02 14:44:19', '2024-05-02 14:45:08');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1714632265624', '自从第一次遇见你，我就喜欢上了你', '1714543289857', '1709726632137', '2024-05-02 14:44:25', '2024-05-02 14:44:55');
INSERT INTO `user_chat_queue` (`id`, `content`, `sourceUser`, `targetUser`, `createTime`, `updateTime`) VALUES ('1735362465144', '', '1714549381813', '1709726632137', '2024-12-28 13:07:45', '2024-12-28 13:07:45');
COMMIT;

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `id` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `userId` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `playCount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '0',
  `dt` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `cateId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `isShort` int NOT NULL COMMENT '是否为短视频',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `cateId` (`cateId`) USING BTREE,
  KEY `video_ibfk_4` (`userId`) USING BTREE,
  CONSTRAINT `video_ibfk_3` FOREIGN KEY (`cateId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of video
-- ----------------------------
BEGIN;
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709727158279', '(G)I-DLE】“Fate” 现场乐队表演版 [it\'s Live] (4K中字)', '1709726632137', '67', '221007.506', '说起来其实我觉得娃更适合这种“演唱会”“live”的形式诶，我一直觉得娃是很有生命力的团，这种形式更能把她们的生命力彰显出来。面在这个视频里的生命力真的很让人眼前一亮，她真的不是木头美人', '1709726739056', '2024-03-06 20:12:38', '2025-01-03 19:50:50', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709727225326', '(G)I-DLE - I DO (官方MV)', '1709726632137', '21', '190250', '(G)I-DLE - I DO (官方MV)', '1709726744101', '2024-03-06 20:13:45', '2024-12-27 22:21:07', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709727360760', '迪迦奥特曼主题曲《TAKE ME HIGHER》——V6', '1709726632137', '25', '286186.333', '迪迦奥特曼主题曲《TAKE ME HIGHER》——V6', '1709726816214', '2024-03-06 20:16:00', '2024-12-27 22:39:56', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709727694829', 'BLACKPINK《Lovesick Girls》超辣私服练习室！', '1709726632137', '49', '197973.197', 'BLACKPINK《Lovesick Girls》超辣私服练习室！', '1709726744101', '2024-03-06 20:21:34', '2025-01-03 22:11:52', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709728097869', '超清60帧 BLACKPINK - As If It\'s Your Last 人气歌谣 170716', '1709726632137', '35', '216853.833', '超清60帧 BLACKPINK - As If It\'s Your Last 人气歌谣 170716', '1709726739056', '2024-03-06 20:28:17', '2025-01-03 19:54:55', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709728442684', 'C罗这一记帽子戏法至今难忘丨18年世界杯葡萄牙VS西班牙丨名场面', '1709726632137', '72', '91903.92300000001', 'C罗这一记帽子戏法至今难忘丨18年世界杯葡萄牙VS西班牙丨名场面', '1709726950345', '2024-03-06 20:34:02', '2025-01-03 21:39:03', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709728788586', '《北 极 不 相 信 眼 泪》', '1709728495272', '17', '580081.3829999999', '《北 极 不 相 信 眼 泪》', '1709726781533', '2024-03-06 20:39:48', '2025-01-03 22:12:24', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709728917857', '南方姑娘-赵雷 官方版MV', '1709728495272', '48', '335759.909', '南方姑娘-赵雷 官方版MV', '1709726739056', '2024-03-06 20:41:57', '2025-01-03 19:55:42', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709729476568', '足坛伪球迷指南之“六大球星错觉”：盘点破除那些球星错觉！', '1709728495272', '26', '255651.746', '足坛伪球迷指南之“六大球星错觉”：盘点破除那些球星错觉！', '1709726950345', '2024-03-06 20:51:16', '2025-01-03 21:40:48', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709729514660', '童年那么长，原来也就一首歌的时间啊！', '1709728495272', '52', '243156.667', '童年那么长，原来也就一首歌的时间啊！', '1709726762835', '2024-03-06 20:51:54', '2025-01-03 21:41:02', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709729818524', '童年你慢些走。我快跟上你了', '1709729533921', '55', '65016.009', '童年你慢些走。我快跟上你了', '1709726762835', '2024-03-06 20:56:58', '2025-01-03 21:41:06', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709730058428', '《向云端》完整版', '1709729533921', '23', '247479', '本来是听无rap版的，还纳闷为啥会出现猫叫声，总体是一种很悠闲很舒畅的。而加了rap后更是说是一种对生活的美好向往，让自己别再抑郁。直到第二部分的向云端开头瞬间就起鸡皮疙瘩了，所以说无论是有rap还是无rap，带给的都是美好的心灵感受，不必当个点评家说rap不好或者难听吧，听着心里感觉舒畅和感动就完事了', '1709726739056', '2024-03-06 21:00:58', '2024-03-14 20:16:43', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709730689098', '那些你熟悉却又不知道名字', '1709729533921', '17', '911314.875', '那些你熟悉却又不知道名字', '1709726781533', '2024-03-06 21:11:29', '2025-01-03 22:12:05', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709731471688', '挪威舞团The Quick Style宝莱坞风格婚礼舞蹈现场', '1709729533921', '28', '108367.302', '挪威舞团The Quick Style宝莱坞风格婚礼舞蹈现场', '1709726739056', '2024-03-06 21:24:31', '2024-12-28 12:59:06', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709731599134', '粤语说唱经典 陈冠希 x 应采儿 MC仁 厨房仔《Everywhere We Go》', '1709729533921', '53', '265961.224', '粤语说唱经典 陈冠希 x 应采儿 MC仁 厨房仔《Everywhere We Go》', '1709726752168', '2024-03-06 21:26:39', '2025-01-03 21:35:30', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709732368308', '赌神出场bgm：《赌神》- 卢冠廷', '1709728495272', '3', '86805', '赌神出场bgm：《赌神》- 卢冠廷', '1709726777884', '2024-03-06 21:39:28', '2024-03-07 22:07:37', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709732612806', '【防弹少年团】《Butter》官方MV公开！', '1709728495272', '14', '182880.24899999998', '【防弹少年团】《Butter》官方MV公开！', '1709726744101', '2024-03-06 21:43:32', '2025-01-03 22:11:38', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709733037458', '洪家铁线拳，五郎八卦棍，十二路谭腿三人团灭斧头帮', '1709728495272', '26', '228182.26799999998', '洪家铁线拳，五郎八卦棍，十二路谭腿三人团灭斧头帮', '1709726752168', '2024-03-06 21:50:37', '2025-01-03 21:38:08', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709734139055', '十年漫威，一生钢铁侠！《Monsters》致敬钢铁侠', '1709733343047', '17', '266507.5', '十年漫威，一生钢铁侠！《Monsters》致敬钢铁侠', '1709726816214', '2024-03-06 22:08:59', '2025-01-03 21:49:05', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901189845', '前方高能！回忆一代人的童年 感受金属与金属碰撞！变形金刚超燃混', '1709820642242', '17', '276061.383', '前方高能！回忆一代人的童年 感受金属与金属碰撞！变形金刚超燃混', '1709726752168', '2024-03-08 20:33:09', '2024-07-11 20:29:52', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901227938', '加勒比海盗/燃向/踩点/混剪', '1709820642242', '10', '205078.005', '加勒比海盗/燃向/踩点/混剪', '1709726816214', '2024-03-08 20:33:47', '2024-03-09 15:24:11', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901343387', '从美国总统表情反应分析外星人是否存在', '1709820642242', '11', '284676.009', '从美国总统表情反应分析外星人是否存在', '1709726798997', '2024-03-08 20:35:43', '2024-12-27 22:45:07', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901525538', '黑衣人1的结尾真的太惊艳了，浩瀚的银河系只是外星人手里的一颗玻璃弹珠\n', '1709820642242', '12', '42236.44', '黑衣人1的结尾真的太惊艳了，浩瀚的银河系只是外星人手里的一颗玻璃弹珠\n', '1709726798997', '2024-03-08 20:38:45', '2024-12-28 13:04:37', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901682371', '漫威里那些令人激动不已的救场，每一幕都很经典！', '1709820642242', '10', '161814', '漫威里那些令人激动不已的救场，每一幕都很经典！', '1709726816214', '2024-03-08 20:41:22', '2024-12-27 22:37:50', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709901732306', '3分钟，让你能识别路上所有的车！！', '1709820642242', '2', '272383.5', '3分钟，让你能识别路上所有的车！！', '1709726798997', '2024-03-08 20:42:12', '2024-03-09 15:07:21', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709902167810', '经典动漫音乐七龙珠主题曲《摩诃不思议大冒险》完整版，多少人的童年回忆啊', '1709820642242', '20', '228924.875', '经典动漫音乐七龙珠主题曲《摩诃不思议大冒险》完整版，多少人的童年回忆啊', '1709726816214', '2024-03-08 20:49:27', '2025-01-03 21:43:55', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709902212933', '名侦探柯南主题曲《转动命运之轮》— 坂井泉水！', '1709820642242', '13', '296575.5', '名侦探柯南主题曲《转动命运之轮》— 坂井泉水！', '1709726816214', '2024-03-08 20:50:12', '2025-01-03 21:43:00', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709902491136', '我们好像在哪见过 -杨宗纬、叶蓓', '1709820642242', '24', '199125', '我们好像在哪见过 -杨宗纬、叶蓓', '1709726739056', '2024-03-08 20:54:51', '2025-01-03 19:56:29', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709902846546', '第一个凭自己的智慧变成奥特曼的男人！', '1709902530670', '24', '204753.492', '第一个凭自己的智慧变成奥特曼的男人！', '1709726816214', '2024-03-08 21:00:46', '2025-01-03 21:49:07', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709903103144', '擎天柱超帅名场面之一', '1709902530670', '15', '302911.667', '擎天柱超帅名场面之一', '1709726816214', '2024-03-08 21:05:03', '2024-12-28 12:57:08', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709903474181', '2018年的夏天到底有什么魔力？让我们怀念至今！', '1709902530670', '52', '363624.535', '2018年的夏天到底有什么魔力？让我们怀念至今！', '1709726748303', '2024-03-08 21:11:14', '2025-01-03 21:51:16', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709903824403', '东方红艳 赵真-火火的姑娘', '1709902530670', '25', '256895.66700000002', '东方红艳 赵真-火火的姑娘', '1709726748303', '2024-03-08 21:17:04', '2025-01-03 22:07:48', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709903878483', '林丹十大神奇击球——变态的身体素质', '1709902530670', '8', '366642.426', '林丹十大神奇击球——变态的身体素质', '1709726950345', '2024-03-08 21:17:58', '2024-12-28 13:09:58', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709904147909', '《恶搞之家》逆天动物合集！', '1709902530670', '14', '135348.912', '《恶搞之家》逆天动物合集！', '1709726816214', '2024-03-08 21:22:27', '2024-07-15 21:46:23', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709904597222', '温奕心《一路生花》我希望许过的愿望一路生花！', '1709728495272', '34', '256810.167', '温奕心《一路生花》我希望许过的愿望一路生花！', '1709726773338', '2024-03-08 21:29:57', '2025-01-03 21:50:50', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709904846470', '【EXO】回顾《Call Me Baby》最出圈最经典舞台！一首可以在15年厮杀中得到18个一位的爆', '1709902530670', '26', '216595.50999999998', '【EXO】回顾《Call Me Baby》最出圈最经典舞台！一首可以在15年厮杀中得到18个一位的爆', '1709726773338', '2024-03-08 21:34:06', '2025-01-03 21:49:15', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709905956013', '李奕遐 - 那時正好 (女生版) Na Shi Zheng Hao『春日的五月 你穿著白連衣裙', '1709905648920', '83', '249567.846', '李奕遐 - 那時正好 (女生版) Na Shi Zheng Hao『春日的五月 你穿著白連衣裙', '1709726732940', '2024-03-08 21:52:36', '2024-12-28 13:08:11', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709906040181', '大籽《白月光与朱砂痣》完整版MV', '1709905648920', '15', '207444.83299999998', '大籽《白月光与朱砂痣》完整版MV', '1709726752168', '2024-03-08 21:54:00', '2025-01-03 21:42:48', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709906184558', '2023年最新的8款免费加速器，速冲！', '1709905648920', '3', '230434.172', '2023年最新的8款免费加速器，速冲！', '1709726798997', '2024-03-08 21:56:24', '2024-03-09 15:07:25', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709906560937', 'GEM邓紫棋-《我的秘密》｜我在犹豫要不要告诉你，喜欢你是我的秘密', '1709820642242', '25', '253027.188', 'GEM邓紫棋-《我的秘密》｜我在犹豫要不要告诉你，喜欢你是我的秘密', '1709726748303', '2024-03-08 22:02:40', '2025-01-03 21:51:12', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709962703249', 'Time After Time ～花舞う街で～ 倉木麻衣 - 迷宫的十字路口剧场版1080P怀旧剪辑重制版', '1709962443377', '20', '251178.333', 'Time After Time ～花舞う街で～ 倉木麻衣 - 迷宫的十字路口剧场版1080P怀旧剪辑重制版', '1709726762835', '2024-03-09 13:38:23', '2025-01-03 21:27:17', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709963106823', '【盛哲】《在你的身边》 官方字幕MV完整版【我以为忘了想念】', '1709962443377', '36', '277141', '【盛哲】《在你的身边》 官方字幕MV完整版【我以为忘了想念】', '1709726748303', '2024-03-09 13:45:06', '2025-01-03 21:56:54', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709963889528', '《遗失的心跳》-萧亚轩/第一次听就上头，鬼知道我听了多少遍', '1709963638248', '15', '212647.846', '《遗失的心跳》-萧亚轩/第一次听就上头，鬼知道我听了多少遍', '1709726752168', '2024-03-09 13:58:09', '2024-12-27 22:47:27', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709964424184', '【赵传】我终于失去了你（MV 1080P 60FPS）', '1709964349418', '64', '280639.66699999996', '【赵传】我终于失去了你（MV 1080P 60FPS）', '1709726752168', '2024-03-09 14:07:04', '2025-01-03 21:28:11', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709964765739', '《年少的你啊》---浩然H.R', '1709964349418', '46', '180186.304', '《年少的你啊》---浩然H.R', '1709726762835', '2024-03-09 14:12:45', '2025-01-03 21:40:58', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709966796036', '于文文《体面》超感人神曲！祝大家七夕快乐！', '1709964349418', '25', '274730.333', '于文文《体面》超感人神曲！祝大家七夕快乐！', '1709726739056', '2024-03-09 14:46:36', '2024-12-27 22:21:13', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709966991829', 'HDR《冰雪奇缘》主题曲《Let it go》Idina Menzel版 2160P！', '1709964349418', '63', '217258', 'HDR《冰雪奇缘》主题曲《Let it go》Idina Menzel版 2160P！', '1709726816214', '2024-03-09 14:49:51', '2024-12-27 22:21:16', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709968946947', '绝美偶像剧！【4K】王蓝茵《恶作剧》“我想我已慢慢喜欢你 因为我拥有爱情的勇气 我任性', '1709968099989', '64', '228287.667', '绝美偶像剧！【4K】王蓝茵《恶作剧》“我想我已慢慢喜欢你 因为我拥有爱情的勇气 我任性', '1709726752168', '2024-03-09 15:22:26', '2025-01-03 21:37:34', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709968992295', '孙燕姿《遇见》爆火神曲！祝大家节日快乐！', '1709968099989', '19', '208917', '孙燕姿《遇见》爆火神曲！祝大家节日快乐！', '1709726739056', '2024-03-09 15:23:12', '2024-12-27 22:44:29', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1709970879644', '00后有属于自己的老歌了？有些熟悉的旋律竟已是好几年前的歌！', '1709968338867', '64', '242090.33299999998', '00后有属于自己的老歌了？有些熟悉的旋律竟已是好几年前的歌！', '1709726762835', '2024-03-09 15:54:39', '2025-01-03 21:42:35', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1710049033545', 'IU 新歌 “Celebrity” 首个Live现场', '1709968523870', '53', '232594.05899999998', 'IU 新歌 “Celebrity” 首个Live现场', '1709726744101', '2024-03-10 13:37:13', '2024-12-27 21:55:03', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1710054012961', '龙珠经典', '1709726637539', '41', '272533', '龙珠经典', '1709726752168', '2024-03-10 15:00:12', '2025-01-03 21:42:44', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1714545759293', '郭富城 – 对你爱不完 MV', '1714543289857', '36', '287445', '郭富城 – 对你爱不完 MV', '1709726816214', '2024-05-01 14:42:39', '2024-12-27 22:46:06', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1714546475533', '转角遇到爱 罗志祥《爱转角》', '1714543289857', '68', '291595.964', '转角遇到爱 罗志祥《爱转角》', '1709726748303', '2024-05-01 14:54:35', '2025-01-03 22:05:13', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1714549541546', '程艾影_赵雷', '1714549381813', '153', '300586', '程艾影_赵雷', '1709726762835', '2024-05-01 15:45:41', '2024-12-27 22:20:25', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1735304876456', '李行亮《回忆里的那个人》，一首难忘的怀旧情歌，听得扎心', '1709726632137', '46', '253695.83299999998', '李行亮《回忆里的那个人》，一首难忘的怀旧情歌，听得扎心', '1709726739056', '2024-12-27 21:07:56', '2025-01-03 19:59:40', 0);
INSERT INTO `video` (`id`, `name`, `userId`, `playCount`, `dt`, `description`, `cateId`, `createTime`, `updateTime`, `isShort`) VALUES ('1735306697868', '江语晨《最后一页》（周杰伦导演电视剧《熊猫人》片尾曲）', '1709726632137', '21', '262207.667', '江语晨《最后一页》（周杰伦导演电视剧《熊猫人》片尾曲）', '1709726950345', '2024-12-27 21:38:17', '2025-01-03 21:38:30', 0);
COMMIT;

-- ----------------------------
-- Table structure for video_carousel
-- ----------------------------
DROP TABLE IF EXISTS `video_carousel`;
CREATE TABLE `video_carousel` (
  `id` char(50) NOT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `fileId` char(50) DEFAULT NULL,
  `videoId` char(50) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `videoId` (`videoId`),
  CONSTRAINT `video_carousel_ibfk_1` FOREIGN KEY (`videoId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of video_carousel
-- ----------------------------
BEGIN;
INSERT INTO `video_carousel` (`id`, `title`, `description`, `fileId`, `videoId`, `createTime`, `updateTime`) VALUES ('1709906624535', '邓紫棋新歌', '邓紫棋又发布新歌曲了，快来一起沉浸', '1709906619735', '1709906560937', '2024-03-08 22:03:44', '2024-03-08 22:03:44');
INSERT INTO `video_carousel` (`id`, `title`, `description`, `fileId`, `videoId`, `createTime`, `updateTime`) VALUES ('1709966836598', '于文文', '新歌来袭', '1709966823244', '1709966796036', '2024-03-09 14:47:16', '2024-03-09 14:47:16');
INSERT INTO `video_carousel` (`id`, `title`, `description`, `fileId`, `videoId`, `createTime`, `updateTime`) VALUES ('1709967047912', '星愿', '迪士尼百年巨献', '1709967041866', '1709966991829', '2024-03-09 14:50:47', '2024-03-09 14:50:47');
COMMIT;

-- ----------------------------
-- Table structure for video_file
-- ----------------------------
DROP TABLE IF EXISTS `video_file`;
CREATE TABLE `video_file` (
  `videoId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fileId` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mark` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of video_file
-- ----------------------------
BEGIN;
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727158279', '1709727084908', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727158279', '1709727063159', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727225326', '1709727209958', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727225326', '1709727194304', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727360760', '1709727346388', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727360760', '1709727327479', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727694829', '1709727454540', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709727694829', '1709727442557', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728097869', '1709727722769', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728097869', '1709727713740', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728442684', '1709728395846', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728442684', '1709728385211', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728788586', '1709728740338', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728788586', '1709728728868', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728917857', '1709728895778', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709728917857', '1709728886852', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729476568', '1709729313193', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729476568', '1709729304313', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729514660', '1709729498103', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729514660', '1709729488867', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729818524', '1709729803976', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709729818524', '1709729792879', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709730058428', '1709729966368', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709730058428', '1709729945136', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709730689098', '1709730148028', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709730689098', '1709730138470', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709731471688', '1709731378770', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709731471688', '1709731369255', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709731599134', '1709731575235', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709731599134', '1709731563902', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709732368308', '1709732226978', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709732368308', '1709732217183', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709732612806', '1709732396149', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709732612806', '1709732382800', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709733037458', '1709732636462', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709733037458', '1709732624411', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709734139055', '1709733849490', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709734139055', '1709733836831', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901189845', '1709901110666', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901189845', '1709901097364', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901227938', '1709901213610', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901227938', '1709901203026', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901343387', '1709901327862', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901343387', '1709901313906', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901525538', '1709901470611', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901525538', '1709901451200', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901682371', '1709901621039', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901682371', '1709901597726', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901732306', '1709901717925', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709901732306', '1709901694229', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902167810', '1709901874613', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902167810', '1709901864049', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902212933', '1709902199399', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902212933', '1709902186689', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902491136', '1709902329503', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902491136', '1709902316251', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902846546', '1709902720187', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709902846546', '1709902711051', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903103144', '1709902877013', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903103144', '1709902860731', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903474181', '1709903409319', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903474181', '1709903400705', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903824403', '1709903582676', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903824403', '1709903571441', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903878483', '1709903859422', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709903878483', '1709903845360', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904147909', '1709904130007', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904147909', '1709904116411', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904597222', '1709904349290', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904597222', '1709904390416', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904846470', '1709904672334', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709904846470', '1709904658586', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709905956013', '1709905941572', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709905956013', '1709905926999', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906040181', '1709906026386', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906040181', '1709906016645', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906184558', '1709906136471', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906184558', '1709906123304', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906560937', '1709906509235', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709906560937', '1709906493458', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709962703249', '1709962669128', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709962703249', '1709962651189', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709963106823', '1709962803884', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709963106823', '1709962790409', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709963889528', '1709963855253', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709963889528', '1709963873700', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709964424184', '1709964385850', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709964424184', '1709964393314', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709964765739', '1709964733533', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709964765739', '1709964744875', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709966796036', '1709966685249', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709966796036', '1709966671691', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709966991829', '1709966978526', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709966991829', '1709966959733', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709968946947', '1709968792774', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709968946947', '1709968780915', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709968992295', '1709968981131', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709968992295', '1709968965087', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709970879644', '1709970701192', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1709970879644', '1709970691100', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1710049033545', '1710049013107', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1710049033545', '1710049004062', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1710054012961', '1710053952071', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1710054012961', '1710053959001', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714545759293', '1714545487933', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714545759293', '1714545476149', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714546475533', '1714546215389', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714546475533', '1714546206164', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714549541546', '1714549529565', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1714549541546', '1714549499518', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1735304876456', '1735304859109', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1735304876456', '1735304829928', 'source');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1735306697868', '1735306673843', 'cover');
INSERT INTO `video_file` (`videoId`, `fileId`, `mark`) VALUES ('1735306697868', '1735306652108', 'source');
COMMIT;

-- ----------------------------
-- Table structure for video_record
-- ----------------------------
DROP TABLE IF EXISTS `video_record`;
CREATE TABLE `video_record` (
  `vId` char(50) DEFAULT NULL,
  `userId` char(50) DEFAULT NULL,
  `createTime` date DEFAULT NULL,
  `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `count` varchar(500) DEFAULT NULL,
  KEY `vId` (`vId`),
  KEY `userId` (`userId`),
  CONSTRAINT `video_record_ibfk_1` FOREIGN KEY (`vId`) REFERENCES `video` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `video_record_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of video_record
-- ----------------------------
BEGIN;
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709728495272', '2024-03-06', '2024-03-06 20:46:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709728495272', '2024-03-06', '2024-03-06 21:31:22', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709728495272', '2024-03-06', '2024-03-06 21:53:23', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709728495272', '2024-03-06', '2024-03-06 21:51:24', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709729533921', '2024-03-06', '2024-03-06 21:27:47', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709729533921', '2024-03-06', '2024-03-06 21:28:27', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709729533921', '2024-03-06', '2024-03-06 21:27:59', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709729533921', '2024-03-06', '2024-03-06 21:13:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709729533921', '2024-03-06', '2024-03-06 21:27:40', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709729533921', '2024-03-06', '2024-03-06 21:26:48', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709729533921', '2024-03-06', '2024-03-06 21:27:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709729533921', '2024-03-06', '2024-03-06 21:27:18', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709729533921', '2024-03-06', '2024-03-06 21:27:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709729533921', '2024-03-06', '2024-03-06 21:28:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709729533921', '2024-03-06', '2024-03-06 21:28:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709729533921', '2024-03-06', '2024-03-06 21:28:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-03-06', '2024-03-06 21:28:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-03-06', '2024-03-06 21:29:04', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709726632137', '2024-03-06', '2024-03-06 21:29:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709726632137', '2024-03-06', '2024-03-06 21:29:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-03-06', '2024-03-06 22:20:12', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-03-06', '2024-03-06 22:25:38', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-03-06', '2024-03-06 22:20:54', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-03-06', '2024-03-06 22:20:29', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-06', '2024-03-06 22:18:42', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709726632137', '2024-03-06', '2024-03-06 21:29:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709728495272', '2024-03-06', '2024-03-06 21:51:01', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709728495272', '2024-03-06', '2024-03-06 21:30:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709728495272', '2024-03-06', '2024-03-06 21:30:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709728495272', '2024-03-06', '2024-03-06 21:55:00', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709728495272', '2024-03-06', '2024-03-06 21:33:12', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709728495272', '2024-03-06', '2024-03-06 21:33:05', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709728495272', '2024-03-06', '2024-03-06 21:31:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709728495272', '2024-03-06', '2024-03-06 21:31:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709728495272', '2024-03-06', '2024-03-06 21:31:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709728495272', '2024-03-06', '2024-03-06 21:31:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709728495272', '2024-03-06', '2024-03-06 21:52:43', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709728495272', '2024-03-06', '2024-03-06 21:55:28', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709728495272', '2024-03-06', '2024-03-06 21:53:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709733343047', '2024-03-06', '2024-03-06 21:56:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709733343047', '2024-03-06', '2024-03-06 21:56:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709733343047', '2024-03-06', '2024-03-06 22:00:09', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709733343047', '2024-03-06', '2024-03-06 21:59:33', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732368308', '1709733343047', '2024-03-06', '2024-03-06 21:57:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709733343047', '2024-03-06', '2024-03-06 21:57:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709733343047', '2024-03-06', '2024-03-06 21:57:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709733343047', '2024-03-06', '2024-03-06 21:57:51', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709733343047', '2024-03-06', '2024-03-06 21:58:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709733343047', '2024-03-06', '2024-03-06 21:58:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709733343047', '2024-03-06', '2024-03-06 21:58:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709733343047', '2024-03-06', '2024-03-06 21:58:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709733343047', '2024-03-06', '2024-03-06 21:59:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709733343047', '2024-03-06', '2024-03-06 21:59:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709733343047', '2024-03-06', '2024-03-06 21:59:44', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709733343047', '2024-03-06', '2024-03-06 21:59:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709733343047', '2024-03-06', '2024-03-06 22:00:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709733343047', '2024-03-06', '2024-03-06 22:09:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-03-06', '2024-03-06 22:19:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-03-06', '2024-03-06 22:19:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-03-07', '2024-03-07 22:07:25', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-03-07', '2024-03-07 22:00:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-03-07', '2024-03-07 22:03:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709726632137', '2024-03-07', '2024-03-07 22:05:21', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2024-03-07', '2024-03-07 22:05:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709726632137', '2024-03-07', '2024-03-07 22:06:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-07', '2024-03-07 22:08:01', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709726632137', '2024-03-07', '2024-03-07 22:07:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732368308', '1709726632137', '2024-03-07', '2024-03-07 22:07:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-03-07', '2024-03-07 22:07:44', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-03-07', '2024-03-07 22:07:50', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709726632137', '2024-03-07', '2024-03-07 22:08:14', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709726632137', '2024-03-07', '2024-03-07 22:08:16', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-03-07', '2024-03-07 22:07:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-03-07', '2024-03-07 22:08:21', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709820642242', '2024-03-07', '2024-03-07 22:17:29', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709820642242', '2024-03-07', '2024-03-07 22:17:33', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709820642242', '2024-03-07', '2024-03-07 22:18:30', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709820642242', '2024-03-07', '2024-03-07 22:18:19', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709820642242', '2024-03-07', '2024-03-07 22:17:19', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709820642242', '2024-03-07', '2024-03-07 22:17:35', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709820642242', '2024-03-07', '2024-03-07 22:16:59', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709820642242', '2024-03-07', '2024-03-07 22:16:58', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709820642242', '2024-03-07', '2024-03-07 22:20:36', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709820642242', '2024-03-07', '2024-03-07 22:16:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709820642242', '2024-03-07', '2024-03-07 22:17:14', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709820642242', '2024-03-07', '2024-03-07 22:20:55', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709820642242', '2024-03-07', '2024-03-07 22:17:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709820642242', '2024-03-07', '2024-03-07 22:18:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709820642242', '2024-03-07', '2024-03-07 22:18:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709820642242', '2024-03-07', '2024-03-07 22:18:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709820642242', '2024-03-07', '2024-03-07 22:18:54', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709820642242', '2024-03-07', '2024-03-07 22:19:24', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709726632137', '2024-03-07', '2024-03-07 22:21:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709820642242', '2024-03-08', '2024-03-08 22:05:58', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709820642242', '2024-03-08', '2024-03-08 21:58:51', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709902530670', '2024-03-08', '2024-03-08 21:39:37', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709902530670', '2024-03-08', '2024-03-08 21:06:21', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709902530670', '2024-03-08', '2024-03-08 21:08:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709902530670', '2024-03-08', '2024-03-08 21:40:44', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709902530670', '2024-03-08', '2024-03-08 21:18:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709902530670', '2024-03-08', '2024-03-08 21:18:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709902530670', '2024-03-08', '2024-03-08 21:39:45', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709902530670', '2024-03-08', '2024-03-08 21:18:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709902530670', '2024-03-08', '2024-03-08 21:39:02', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709902530670', '2024-03-08', '2024-03-08 21:38:02', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709902530670', '2024-03-08', '2024-03-08 21:37:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709902530670', '2024-03-08', '2024-03-08 21:38:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709902530670', '2024-03-08', '2024-03-08 21:38:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709902530670', '2024-03-08', '2024-03-08 21:38:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709902530670', '2024-03-08', '2024-03-08 21:38:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709902530670', '2024-03-08', '2024-03-08 21:39:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709902530670', '2024-03-08', '2024-03-08 21:39:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709902530670', '2024-03-08', '2024-03-08 21:39:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709902530670', '2024-03-08', '2024-03-08 21:39:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709902530670', '2024-03-08', '2024-03-08 21:40:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709902530670', '2024-03-08', '2024-03-08 21:40:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709902530670', '2024-03-08', '2024-03-08 21:40:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709902530670', '2024-03-08', '2024-03-08 21:41:27', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901732306', '1709902530670', '2024-03-08', '2024-03-08 21:41:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709902530670', '2024-03-08', '2024-03-08 21:41:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709820642242', '2024-03-08', '2024-03-08 21:42:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709820642242', '2024-03-08', '2024-03-08 21:42:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709820642242', '2024-03-08', '2024-03-08 21:42:26', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709820642242', '2024-03-08', '2024-03-08 21:42:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709820642242', '2024-03-08', '2024-03-08 21:42:38', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709820642242', '2024-03-08', '2024-03-08 21:42:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709820642242', '2024-03-08', '2024-03-08 21:42:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709820642242', '2024-03-08', '2024-03-08 21:42:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709820642242', '2024-03-08', '2024-03-08 21:42:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709820642242', '2024-03-08', '2024-03-08 21:42:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709820642242', '2024-03-08', '2024-03-08 21:42:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709820642242', '2024-03-08', '2024-03-08 21:42:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709820642242', '2024-03-08', '2024-03-08 21:43:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709820642242', '2024-03-08', '2024-03-08 21:43:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709820642242', '2024-03-08', '2024-03-08 21:43:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709820642242', '2024-03-08', '2024-03-08 21:58:29', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709820642242', '2024-03-08', '2024-03-08 21:43:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-03-08', '2024-03-08 21:43:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-03-08', '2024-03-08 21:43:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709726632137', '2024-03-08', '2024-03-08 21:43:58', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709726632137', '2024-03-08', '2024-03-08 21:44:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709726632137', '2024-03-08', '2024-03-08 21:44:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-03-08', '2024-03-08 21:44:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-03-08', '2024-03-08 21:44:42', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709726632137', '2024-03-08', '2024-03-08 21:44:24', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-03-08', '2024-03-08 21:44:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-03-08', '2024-03-08 21:44:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709726632137', '2024-03-08', '2024-03-08 21:44:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-03-08', '2024-03-08 21:44:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709726632137', '2024-03-08', '2024-03-08 21:45:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709733343047', '2024-03-08', '2024-03-08 21:45:18', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709733343047', '2024-03-08', '2024-03-08 21:45:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709733343047', '2024-03-08', '2024-03-08 21:45:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709733343047', '2024-03-08', '2024-03-08 21:45:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709733343047', '2024-03-08', '2024-03-08 21:45:44', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709733343047', '2024-03-08', '2024-03-08 21:45:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709733343047', '2024-03-08', '2024-03-08 21:46:06', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709733343047', '2024-03-08', '2024-03-08 21:45:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709733343047', '2024-03-08', '2024-03-08 21:46:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709733343047', '2024-03-08', '2024-03-08 21:46:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709733343047', '2024-03-08', '2024-03-08 21:46:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709733343047', '2024-03-08', '2024-03-08 21:46:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709733343047', '2024-03-08', '2024-03-08 21:46:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709733343047', '2024-03-08', '2024-03-08 21:46:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709905648920', '2024-03-08', '2024-03-08 21:56:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709820642242', '2024-03-08', '2024-03-08 21:58:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709820642242', '2024-03-08', '2024-03-08 21:58:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906184558', '1709820642242', '2024-03-08', '2024-03-08 21:58:46', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709820642242', '2024-03-08', '2024-03-08 22:07:05', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709820642242', '2024-03-08', '2024-03-08 22:06:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709820642242', '2024-03-09', '2024-03-09 13:20:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709820642242', '2024-03-09', '2024-03-09 13:21:28', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709820642242', '2024-03-09', '2024-03-09 13:30:25', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709820642242', '2024-03-09', '2024-03-09 13:28:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709820642242', '2024-03-09', '2024-03-09 13:31:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709962443377', '2024-03-09', '2024-03-09 13:35:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709962443377', '2024-03-09', '2024-03-09 14:08:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709962443377', '2024-03-09', '2024-03-09 15:05:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709962443377', '2024-03-09', '2024-03-09 15:05:50', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709730380639', '2024-03-09', '2024-03-09 14:21:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709730380639', '2024-03-09', '2024-03-09 14:24:35', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709730372557', '2024-03-09', '2024-03-09 14:27:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709730357380', '2024-03-09', '2024-03-09 14:42:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709964349418', '2024-03-09', '2024-03-09 14:47:30', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709964349418', '2024-03-09', '2024-03-09 14:51:30', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709964349418', '2024-03-09', '2024-03-09 14:56:44', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709963638248', '2024-03-09', '2024-03-09 15:03:34', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709963638248', '2024-03-09', '2024-03-09 14:57:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709963638248', '2024-03-09', '2024-03-09 14:57:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709963638248', '2024-03-09', '2024-03-09 14:57:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709963638248', '2024-03-09', '2024-03-09 14:57:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709963638248', '2024-03-09', '2024-03-09 14:58:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709963638248', '2024-03-09', '2024-03-09 15:03:30', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709963638248', '2024-03-09', '2024-03-09 14:58:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709963638248', '2024-03-09', '2024-03-09 14:59:06', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709963638248', '2024-03-09', '2024-03-09 14:58:23', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709963638248', '2024-03-09', '2024-03-09 14:58:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709963638248', '2024-03-09', '2024-03-09 15:03:54', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709963638248', '2024-03-09', '2024-03-09 14:58:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709963638248', '2024-03-09', '2024-03-09 14:58:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709963638248', '2024-03-09', '2024-03-09 14:58:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709963638248', '2024-03-09', '2024-03-09 14:58:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709963638248', '2024-03-09', '2024-03-09 14:59:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906184558', '1709963638248', '2024-03-09', '2024-03-09 14:59:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709963638248', '2024-03-09', '2024-03-09 14:59:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709963638248', '2024-03-09', '2024-03-09 14:59:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709963638248', '2024-03-09', '2024-03-09 14:59:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709963638248', '2024-03-09', '2024-03-09 14:59:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709963638248', '2024-03-09', '2024-03-09 14:59:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709963638248', '2024-03-09', '2024-03-09 14:59:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709963638248', '2024-03-09', '2024-03-09 15:03:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709963638248', '2024-03-09', '2024-03-09 15:03:51', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709963638248', '2024-03-09', '2024-03-09 15:03:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709963638248', '2024-03-09', '2024-03-09 15:03:58', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709963638248', '2024-03-09', '2024-03-09 15:03:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709962443377', '2024-03-09', '2024-03-09 15:05:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709962443377', '2024-03-09', '2024-03-09 15:06:57', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709962443377', '2024-03-09', '2024-03-09 15:05:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709962443377', '2024-03-09', '2024-03-09 15:05:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709962443377', '2024-03-09', '2024-03-09 15:05:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709962443377', '2024-03-09', '2024-03-09 15:05:24', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709962443377', '2024-03-09', '2024-03-09 15:05:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709962443377', '2024-03-09', '2024-03-09 15:05:37', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709962443377', '2024-03-09', '2024-03-09 15:05:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709962443377', '2024-03-09', '2024-03-09 15:05:46', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709962443377', '2024-03-09', '2024-03-09 15:06:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709962443377', '2024-03-09', '2024-03-09 15:06:23', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709962443377', '2024-03-09', '2024-03-09 15:06:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709962443377', '2024-03-09', '2024-03-09 15:06:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709962443377', '2024-03-09', '2024-03-09 15:06:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709962443377', '2024-03-09', '2024-03-09 15:06:46', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709962443377', '2024-03-09', '2024-03-09 15:06:51', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709962443377', '2024-03-09', '2024-03-09 15:07:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709962443377', '2024-03-09', '2024-03-09 15:07:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709962443377', '2024-03-09', '2024-03-09 15:07:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901732306', '1709962443377', '2024-03-09', '2024-03-09 15:07:21', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906184558', '1709962443377', '2024-03-09', '2024-03-09 15:07:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709962443377', '2024-03-09', '2024-03-09 15:07:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709962443377', '2024-03-09', '2024-03-09 15:07:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709962443377', '2024-03-09', '2024-03-09 15:13:54', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709968338867', '2024-03-09', '2024-03-09 15:46:19', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709968338867', '2024-03-09', '2024-03-09 15:46:01', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709968338867', '2024-03-09', '2024-03-09 15:23:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709968338867', '2024-03-09', '2024-03-09 15:24:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709968338867', '2024-03-09', '2024-03-09 15:24:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901227938', '1709968338867', '2024-03-09', '2024-03-09 15:24:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709968338867', '2024-03-09', '2024-03-09 15:24:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709968338867', '2024-03-09', '2024-03-09 15:24:38', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709968338867', '2024-03-09', '2024-03-09 15:24:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709968338867', '2024-03-09', '2024-03-09 15:24:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709968338867', '2024-03-09', '2024-03-09 15:47:21', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709968338867', '2024-03-09', '2024-03-09 15:24:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709968338867', '2024-03-09', '2024-03-09 15:24:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709968338867', '2024-03-09', '2024-03-09 15:55:57', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709968338867', '2024-03-09', '2024-03-09 15:25:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709968338867', '2024-03-09', '2024-03-09 15:25:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709968338867', '2024-03-09', '2024-03-09 15:25:24', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709968338867', '2024-03-09', '2024-03-09 15:25:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709968338867', '2024-03-09', '2024-03-09 15:25:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709968338867', '2024-03-09', '2024-03-09 15:25:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709968338867', '2024-03-09', '2024-03-09 15:48:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709820642242', '2024-03-09', '2024-03-09 16:15:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709820642242', '2024-03-09', '2024-03-09 16:15:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709820642242', '2024-03-09', '2024-03-09 16:15:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709820642242', '2024-03-09', '2024-03-09 16:15:13', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709820642242', '2024-03-09', '2024-03-09 16:16:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709968523870', '2024-03-09', '2024-03-09 16:17:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709968523870', '2024-03-09', '2024-03-09 16:17:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709968523870', '2024-03-09', '2024-03-09 16:17:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709968523870', '2024-03-09', '2024-03-09 16:17:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709968523870', '2024-03-09', '2024-03-09 16:17:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709968523870', '2024-03-09', '2024-03-09 16:17:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709968523870', '2024-03-09', '2024-03-09 16:17:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709968523870', '2024-03-09', '2024-03-09 16:17:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709968523870', '2024-03-09', '2024-03-09 16:18:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709968523870', '2024-03-09', '2024-03-09 16:18:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709968523870', '2024-03-09', '2024-03-09 16:18:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709968523870', '2024-03-09', '2024-03-09 16:18:24', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709968523870', '2024-03-09', '2024-03-09 16:18:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709968523870', '2024-03-09', '2024-03-09 16:18:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709968523870', '2024-03-09', '2024-03-09 16:18:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709968523870', '2024-03-09', '2024-03-09 16:18:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709968523870', '2024-03-09', '2024-03-09 16:18:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709968523870', '2024-03-09', '2024-03-09 16:18:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709968523870', '2024-03-09', '2024-03-09 16:18:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709968523870', '2024-03-09', '2024-03-09 16:19:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709968523870', '2024-03-09', '2024-03-09 16:19:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709968523870', '2024-03-09', '2024-03-09 16:19:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709968523870', '2024-03-09', '2024-03-09 16:20:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709968523870', '2024-03-09', '2024-03-09 16:20:04', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709968523870', '2024-03-09', '2024-03-09 16:20:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709968523870', '2024-03-09', '2024-03-09 16:21:45', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709968523870', '2024-03-09', '2024-03-09 16:20:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709968523870', '2024-03-09', '2024-03-09 16:20:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709968523870', '2024-03-09', '2024-03-09 16:20:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709968523870', '2024-03-09', '2024-03-09 16:21:04', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709968523870', '2024-03-09', '2024-03-09 16:21:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709968523870', '2024-03-09', '2024-03-09 16:21:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709968523870', '2024-03-09', '2024-03-09 16:22:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-09', '2024-03-09 16:24:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-03-09', '2024-03-09 16:24:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-03-09', '2024-03-09 16:25:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-03-09', '2024-03-09 16:25:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-03-09', '2024-03-09 16:35:52', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-09', '2024-03-09 16:25:38', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-03-09', '2024-03-09 16:25:40', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709726632137', '2024-03-09', '2024-03-09 16:25:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709726632137', '2024-03-09', '2024-03-09 16:25:37', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2024-03-09', '2024-03-09 16:25:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-03-09', '2024-03-09 16:32:21', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-03-09', '2024-03-09 16:32:00', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-03-09', '2024-03-09 16:35:37', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-03-09', '2024-03-09 16:35:45', '10');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709726632137', '2024-03-09', '2024-03-09 16:35:58', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-03-09', '2024-03-09 16:35:29', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709726632137', '2024-03-09', '2024-03-09 16:32:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-03-09', '2024-03-09 16:32:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-03-09', '2024-03-09 16:36:08', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-03-10', '2024-03-10 14:16:48', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-03-10', '2024-03-10 14:30:12', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-03-10', '2024-03-10 13:04:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709968523870', '2024-03-10', '2024-03-10 13:37:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-10', '2024-03-10 14:54:47', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-03-10', '2024-03-10 14:52:50', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709726632137', '2024-03-10', '2024-03-10 13:40:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-03-10', '2024-03-10 13:40:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-10', '2024-03-10 14:55:23', '12');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-03-10', '2024-03-10 13:53:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2024-03-10', '2024-03-10 14:54:59', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709820642242', '2024-03-10', '2024-03-10 13:57:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709820642242', '2024-03-10', '2024-03-10 13:57:26', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709968338867', '2024-03-10', '2024-03-10 13:57:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709726632137', '2024-03-10', '2024-03-10 14:16:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709726632137', '2024-03-10', '2024-03-10 14:16:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2024-03-10', '2024-03-10 14:55:51', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-10', '2024-03-10 14:53:58', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-10', '2024-03-10 14:52:20', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709726632137', '2024-03-10', '2024-03-10 14:28:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-03-10', '2024-03-10 14:30:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709728495272', '2024-03-10', '2024-03-10 14:34:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709968099989', '2024-03-10', '2024-03-10 14:36:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709968099989', '2024-03-10', '2024-03-10 14:36:46', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709968099989', '2024-03-10', '2024-03-10 14:36:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-03-10', '2024-03-10 14:38:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-03-10', '2024-03-10 16:18:57', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-03-10', '2024-03-10 15:35:43', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709968099989', '2024-03-10', '2024-03-10 15:38:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-11', '2024-03-11 20:19:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-03-11', '2024-03-11 20:40:40', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-11', '2024-03-11 20:40:48', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-11', '2024-03-11 20:28:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709726632137', '2024-03-11', '2024-03-11 20:30:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-11', '2024-03-11 20:39:18', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2024-03-11', '2024-03-11 20:42:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-03-11', '2024-03-11 20:43:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709726632137', '2024-03-11', '2024-03-11 20:44:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-03-11', '2024-03-11 20:44:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-03-11', '2024-03-11 20:44:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-03-11', '2024-03-11 20:44:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-03-11', '2024-03-11 20:44:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709726632137', '2024-03-11', '2024-03-11 20:45:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-03-12', '2024-03-12 21:08:47', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-12', '2024-03-12 20:43:54', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2024-03-12', '2024-03-12 20:41:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-12', '2024-03-12 20:53:56', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-03-12', '2024-03-12 20:46:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709726632137', '2024-03-12', '2024-03-12 20:46:26', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-03-12', '2024-03-12 20:57:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-03-12', '2024-03-12 21:08:54', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-03-13', '2024-03-13 19:40:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-03-13', '2024-03-13 19:40:54', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-13', '2024-03-13 20:27:20', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-14', '2024-03-14 20:14:51', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-14', '2024-03-14 20:17:09', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-03-14', '2024-03-14 19:24:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-03-14', '2024-03-14 19:39:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-14', '2024-03-14 20:24:36', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709726632137', '2024-03-14', '2024-03-14 20:16:38', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-03-14', '2024-03-14 20:15:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730058428', '1709726632137', '2024-03-14', '2024-03-14 20:16:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2024-03-14', '2024-03-14 20:18:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709726632137', '2024-03-15', '2024-03-15 22:44:23', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-15', '2024-03-15 22:43:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-15', '2024-03-15 22:43:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709726632137', '2024-03-15', '2024-03-15 22:46:13', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-16', '2024-03-16 16:44:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-03-16', '2024-03-16 16:45:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-03-16', '2024-03-16 16:46:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-03-16', '2024-03-16 16:46:51', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709726632137', '2024-03-16', '2024-03-16 16:46:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-03-16', '2024-03-16 16:47:01', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-03-16', '2024-03-16 16:47:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-03-16', '2024-03-16 16:47:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-16', '2024-03-16 16:48:45', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-20', '2024-03-20 21:26:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-23', '2024-03-23 14:23:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726637539', '2024-03-23', '2024-03-23 16:01:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726637539', '2024-03-23', '2024-03-23 16:08:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726637539', '2024-03-23', '2024-03-23 16:08:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-03-24', '2024-03-24 14:13:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-03-28', '2024-03-28 19:40:29', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-03-28', '2024-03-28 20:12:26', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-03-28', '2024-03-28 20:12:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-04-30', '2024-04-30 21:21:01', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-04-30', '2024-04-30 21:24:35', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-04-30', '2024-04-30 22:21:25', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-04-30', '2024-04-30 22:28:55', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-04-30', '2024-04-30 21:22:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709726632137', '2024-04-30', '2024-04-30 21:25:08', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-04-30', '2024-04-30 21:25:09', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709726632137', '2024-04-30', '2024-04-30 21:22:18', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2024-04-30', '2024-04-30 21:36:26', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-04-30', '2024-04-30 21:22:26', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-04-30', '2024-04-30 21:25:13', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-04-30', '2024-04-30 21:22:41', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-04-30', '2024-04-30 21:22:46', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-04-30', '2024-04-30 21:22:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-04-30', '2024-04-30 21:25:24', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709726632137', '2024-04-30', '2024-04-30 21:23:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-04-30', '2024-04-30 21:24:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-04-30', '2024-04-30 21:24:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-04-30', '2024-04-30 21:24:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709726632137', '2024-04-30', '2024-04-30 21:24:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-04-30', '2024-04-30 21:25:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-04-30', '2024-04-30 21:25:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-04-30', '2024-04-30 21:25:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709726632137', '2024-04-30', '2024-04-30 22:15:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-04-30', '2024-04-30 22:44:32', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709726632137', '2024-05-01', '2024-05-01 13:59:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1714543289857', '2024-05-01', '2024-05-01 14:27:34', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1714543289857', '2024-05-01', '2024-05-01 14:48:04', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1714543289857', '2024-05-01', '2024-05-01 14:39:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714545759293', '1714543289857', '2024-05-01', '2024-05-01 15:00:57', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1714543289857', '2024-05-01', '2024-05-01 14:48:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1714543289857', '2024-05-01', '2024-05-01 14:48:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1714543289857', '2024-05-01', '2024-05-01 14:48:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1714543289857', '2024-05-01', '2024-05-01 14:55:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1714543289857', '2024-05-01', '2024-05-01 14:56:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1714543289857', '2024-05-01', '2024-05-01 14:56:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1714543289857', '2024-05-01', '2024-05-01 15:01:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1714543289857', '2024-05-01', '2024-05-01 15:06:23', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1714543289857', '2024-05-01', '2024-05-01 15:08:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1714543289857', '2024-05-01', '2024-05-01 15:40:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1714549381813', '2024-05-01', '2024-05-01 16:25:33', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1714549381813', '2024-05-01', '2024-05-01 15:49:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1714549381813', '2024-05-01', '2024-05-01 15:55:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1714549381813', '2024-05-01', '2024-05-01 15:50:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1714549381813', '2024-05-01', '2024-05-01 15:52:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1714549381813', '2024-05-01', '2024-05-01 15:53:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1714549381813', '2024-05-01', '2024-05-01 15:53:26', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1714549381813', '2024-05-01', '2024-05-01 15:55:23', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1714549381813', '2024-05-01', '2024-05-01 15:55:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-05-01', '2024-05-01 16:37:12', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-05-01', '2024-05-01 16:33:13', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-05-01', '2024-05-01 16:33:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-05-01', '2024-05-01 16:33:36', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-05-01', '2024-05-01 16:33:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-05-01', '2024-05-01 16:34:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-05-01', '2024-05-01 16:35:04', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2024-05-01', '2024-05-01 16:35:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709726632137', '2024-05-01', '2024-05-01 16:36:04', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2024-05-02', '2024-05-02 14:50:28', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1714543289857', '2024-05-02', '2024-05-02 14:43:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714545759293', '1709726632137', '2024-05-02', '2024-05-02 14:50:06', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-05-02', '2024-05-02 14:49:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-05-02', '2024-05-02 14:50:54', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-05-02', '2024-05-02 14:50:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-05-02', '2024-05-02 14:56:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-05-02', '2024-05-02 16:50:06', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709726632137', '2024-05-02', '2024-05-02 15:00:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-05-02', '2024-05-02 15:01:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-05-02', '2024-05-02 16:49:28', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-05-02', '2024-05-02 16:49:47', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-05-02', '2024-05-02 16:49:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-05-02', '2024-05-02 16:50:09', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709726632137', '2024-05-02', '2024-05-02 16:52:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-05-02', '2024-05-02 16:52:14', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-05-02', '2024-05-02 16:52:37', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-05-02', '2024-05-02 16:52:40', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-05-02', '2024-05-02 16:53:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-07-11', '2024-07-11 20:34:10', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901189845', '1709726632137', '2024-07-11', '2024-07-11 20:29:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-07-11', '2024-07-11 20:29:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-07-11', '2024-07-11 20:30:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-07-11', '2024-07-11 20:30:25', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-07-11', '2024-07-11 20:30:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2024-07-15', '2024-07-15 21:31:44', '20');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-07-15', '2024-07-15 21:45:50', '17');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-07-15', '2024-07-15 21:42:29', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714545759293', '1709726632137', '2024-07-15', '2024-07-15 21:26:37', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-07-15', '2024-07-15 21:43:57', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-07-15', '2024-07-15 21:28:31', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-07-15', '2024-07-15 21:46:08', '11');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-07-15', '2024-07-15 21:36:24', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2024-07-15', '2024-07-15 21:42:15', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-07-15', '2024-07-15 21:36:41', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-07-15', '2024-07-15 21:42:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2024-07-15', '2024-07-15 21:43:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-07-15', '2024-07-15 21:45:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-07-15', '2024-07-15 21:46:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904147909', '1709726632137', '2024-07-15', '2024-07-15 21:46:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714545759293', '1709726632137', '2024-09-11', '2024-09-11 20:08:57', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709726632137', '2024-09-11', '2024-09-11 20:14:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-09-11', '2024-09-11 20:14:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-09-11', '2024-09-11 20:19:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-09-11', '2024-09-11 20:24:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-09-11', '2024-09-11 20:24:45', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-09-11', '2024-09-11 20:28:58', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-09-11', '2024-09-11 20:36:45', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-09-11', '2024-09-11 20:36:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-09-11', '2024-09-11 20:38:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709726632137', '2024-09-11', '2024-09-11 20:44:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-09-11', '2024-09-11 21:43:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2024-11-09', '2024-11-09 17:42:33', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-11-09', '2024-11-09 17:16:14', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-11-09', '2024-11-09 17:16:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-11-09', '2024-11-09 17:42:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-11-09', '2024-11-09 17:42:18', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-11-09', '2024-11-09 17:42:22', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-11-09', '2024-11-09 17:42:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-11-09', '2024-11-09 17:42:53', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-12-24', '2024-12-24 20:34:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-12-24', '2024-12-24 21:26:55', '6');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-12-24', '2024-12-24 20:34:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2024-12-24', '2024-12-24 21:16:57', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-12-24', '2024-12-24 20:35:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-12-24', '2024-12-24 20:37:24', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-12-24', '2024-12-24 21:42:09', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-12-24', '2024-12-24 21:16:21', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-12-24', '2024-12-24 21:28:13', '9');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709726632137', '2024-12-24', '2024-12-24 21:27:31', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-12-24', '2024-12-24 20:58:42', '12');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-12-24', '2024-12-24 22:04:30', '44');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-12-24', '2024-12-24 21:35:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709726632137', '2024-12-24', '2024-12-24 21:07:50', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-12-24', '2024-12-24 21:06:34', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-12-24', '2024-12-24 21:07:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-12-24', '2024-12-24 21:12:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709726632137', '2024-12-24', '2024-12-24 21:15:59', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709726632137', '2024-12-24', '2024-12-24 21:25:23', '13');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-12-24', '2024-12-24 21:26:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-12-24', '2024-12-24 22:11:47', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714549541546', '1709726632137', '2024-12-27', '2024-12-27 22:20:25', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2024-12-27', '2024-12-27 22:47:51', '11');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2024-12-27', '2024-12-27 22:20:40', '6');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966796036', '1709726632137', '2024-12-27', '2024-12-27 22:21:13', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-12-27', '2024-12-27 22:47:39', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2024-12-27', '2024-12-27 22:18:01', '13');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-12-27', '2024-12-27 22:40:00', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2024-12-27', '2024-12-27 22:44:31', '11');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-12-27', '2024-12-27 22:38:17', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-12-27', '2024-12-27 21:55:08', '7');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2024-12-27', '2024-12-27 20:40:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709726632137', '2024-12-27', '2024-12-27 20:40:43', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-12-27', '2024-12-27 20:41:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714545759293', '1709726632137', '2024-12-27', '2024-12-27 22:46:06', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727360760', '1709726632137', '2024-12-27', '2024-12-27 22:39:56', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709726632137', '2024-12-27', '2024-12-27 22:38:06', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1735304876456', '1709726632137', '2024-12-27', '2024-12-27 22:39:58', '19');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2024-12-27', '2024-12-27 22:20:35', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2024-12-27', '2024-12-27 22:20:43', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-12-27', '2024-12-27 21:16:13', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-12-27', '2024-12-27 22:26:23', '7');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2024-12-27', '2024-12-27 22:46:11', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-12-27', '2024-12-27 22:38:03', '5');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2024-12-27', '2024-12-27 21:51:09', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-12-27', '2024-12-27 21:32:44', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2024-12-27', '2024-12-27 21:32:45', '8');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-12-27', '2024-12-27 22:20:31', '12');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-12-27', '2024-12-27 21:31:56', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710049033545', '1709726632137', '2024-12-27', '2024-12-27 21:55:03', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1735306697868', '1709726632137', '2024-12-27', '2024-12-27 22:30:31', '11');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2024-12-27', '2024-12-27 22:36:08', '23');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709726632137', '2024-12-27', '2024-12-27 21:40:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-12-27', '2024-12-27 22:44:33', '7');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727225326', '1709726632137', '2024-12-27', '2024-12-27 22:21:07', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709966991829', '1709726632137', '2024-12-27', '2024-12-27 22:21:15', '4');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709726632137', '2024-12-27', '2024-12-27 22:26:32', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709726632137', '2024-12-27', '2024-12-27 22:17:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901682371', '1709726632137', '2024-12-27', '2024-12-27 22:37:50', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2024-12-27', '2024-12-27 22:21:32', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-12-27', '2024-12-27 22:37:54', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-12-27', '2024-12-27 22:37:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709726632137', '2024-12-27', '2024-12-27 22:39:39', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968992295', '1709726632137', '2024-12-27', '2024-12-27 22:44:29', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-12-27', '2024-12-27 22:44:45', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901343387', '1709726632137', '2024-12-27', '2024-12-27 22:45:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2024-12-27', '2024-12-27 22:47:23', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963889528', '1709726632137', '2024-12-27', '2024-12-27 22:47:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903103144', '1709726632137', '2024-12-28', '2024-12-28 12:57:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2024-12-28', '2024-12-28 12:57:20', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709726632137', '2024-12-28', '2024-12-28 12:57:27', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2024-12-28', '2024-12-28 12:58:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2024-12-28', '2024-12-28 12:58:19', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731471688', '1709726632137', '2024-12-28', '2024-12-28 12:59:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2024-12-28', '2024-12-28 13:00:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2024-12-28', '2024-12-28 13:01:49', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2024-12-28', '2024-12-28 13:03:23', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709726632137', '2024-12-28', '2024-12-28 13:04:10', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2024-12-28', '2024-12-28 13:04:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709901525538', '1709726632137', '2024-12-28', '2024-12-28 13:04:37', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1735306697868', '1709726632137', '2024-12-28', '2024-12-28 13:11:56', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2024-12-28', '2024-12-28 13:05:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2024-12-28', '2024-12-28 13:06:33', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709905956013', '1709726632137', '2024-12-28', '2024-12-28 13:08:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2024-12-28', '2024-12-28 13:08:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2024-12-28', '2024-12-28 13:08:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2024-12-28', '2024-12-28 13:09:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2024-12-28', '2024-12-28 13:09:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903878483', '1709726632137', '2024-12-28', '2024-12-28 13:09:58', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709726632137', '2024-12-28', '2024-12-28 13:12:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1735306697868', '1709726632137', '2025-01-03', '2025-01-03 21:38:30', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1735304876456', '1709726632137', '2025-01-03', '2025-01-03 19:59:40', '3');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728097869', '1709726632137', '2025-01-03', '2025-01-03 19:54:55', '6');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727158279', '1709726632137', '2025-01-03', '2025-01-03 19:50:50', '2');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728917857', '1709726632137', '2025-01-03', '2025-01-03 19:55:42', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902491136', '1709726632137', '2025-01-03', '2025-01-03 19:56:29', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709962703249', '1709726632137', '2025-01-03', '2025-01-03 21:27:17', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964424184', '1709726632137', '2025-01-03', '2025-01-03 21:28:11', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709731599134', '1709726632137', '2025-01-03', '2025-01-03 21:35:30', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709968946947', '1709726632137', '2025-01-03', '2025-01-03 21:37:34', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709733037458', '1709726632137', '2025-01-03', '2025-01-03 21:38:08', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728442684', '1709726632137', '2025-01-03', '2025-01-03 21:39:03', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729476568', '1709726632137', '2025-01-03', '2025-01-03 21:40:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709964765739', '1709726632137', '2025-01-03', '2025-01-03 21:40:58', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729514660', '1709726632137', '2025-01-03', '2025-01-03 21:41:02', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709729818524', '1709726632137', '2025-01-03', '2025-01-03 21:41:06', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709970879644', '1709726632137', '2025-01-03', '2025-01-03 21:42:35', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1710054012961', '1709726632137', '2025-01-03', '2025-01-03 21:42:44', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906040181', '1709726632137', '2025-01-03', '2025-01-03 21:42:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902212933', '1709726632137', '2025-01-03', '2025-01-03 21:43:00', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902167810', '1709726632137', '2025-01-03', '2025-01-03 21:43:55', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709734139055', '1709726632137', '2025-01-03', '2025-01-03 21:49:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709902846546', '1709726632137', '2025-01-03', '2025-01-03 21:49:07', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904846470', '1709726632137', '2025-01-03', '2025-01-03 21:49:15', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709904597222', '1709726632137', '2025-01-03', '2025-01-03 21:50:50', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709906560937', '1709726632137', '2025-01-03', '2025-01-03 21:51:12', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903474181', '1709726632137', '2025-01-03', '2025-01-03 21:51:16', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709963106823', '1709726632137', '2025-01-03', '2025-01-03 21:56:54', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1714546475533', '1709726632137', '2025-01-03', '2025-01-03 22:05:13', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709903824403', '1709726632137', '2025-01-03', '2025-01-03 22:07:48', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709732612806', '1709726632137', '2025-01-03', '2025-01-03 22:11:38', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709727694829', '1709726632137', '2025-01-03', '2025-01-03 22:11:52', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709730689098', '1709726632137', '2025-01-03', '2025-01-03 22:12:05', '1');
INSERT INTO `video_record` (`vId`, `userId`, `createTime`, `updateTime`, `count`) VALUES ('1709728788586', '1709726632137', '2025-01-03', '2025-01-03 22:12:24', '1');
COMMIT;

-- ----------------------------
-- Function structure for getAllComment
-- ----------------------------
DROP FUNCTION IF EXISTS `getAllComment`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getAllComment`(commendId char(50)) RETURNS varchar(4000) CHARSET utf8mb4
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
