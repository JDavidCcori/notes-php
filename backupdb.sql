-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: tasks
-- ------------------------------------------------------
-- Server version       8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `task_id` int DEFAULT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `comment_ibfk_1` (`user_id`),
  KEY `comment_ibfk_2` (`task_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--
LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (14,10,7,'Hiiii','2022-01-18 05:43:04'),(15,11,13,'hola','2022-01-18 09:10:01'),(16,11
,13,'hola','2022-01-18 09:10:01'),(17,1,15,'Hey, te puedo ayudar ?','2022-01-18 15:57:33'),(19,5,15,'Te sale 404 al
 refrescar tu app ? xd','2022-01-18 16:05:02'),(20,5,13,'Hola pedro','2022-01-18 17:39:35'),(22,13,12,'Hello world'
,'2022-01-19 00:49:51'),(23,12,17,'falta como tiempo','2022-01-19 09:40:47');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `followers`
--
DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `follow_id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receptor_id` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`follow_id`),
  KEY `sender_id` (`sender_id`),
  KEY `receptor_id` (`receptor_id`),
  CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`receptor_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `followers`
--
LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (1,2,1,'2022-01-17 23:32:00'),(2,2,1,'2022-01-17 23:32:00'),(3,1,2,'2022-01-17 23:35
:09'),(4,5,10,'2022-01-18 05:51:12'),(5,5,1,'2022-01-18 06:43:32'),(6,5,13,'2022-01-18 16:44:49'),(7,12,13,'2022-01
-19 09:41:09');
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `recover`
--
DROP TABLE IF EXISTS `recover`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recover` (
  `recover_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `is_used` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`recover_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `recover_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `recover`
--
LOCK TABLES `recover` WRITE;
/*!40000 ALTER TABLE `recover` DISABLE KEYS */;
/*!40000 ALTER TABLE `recover` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `tasks`
--
DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  `priority` varchar(10) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `likes` int DEFAULT NULL,
  `is_public` tinyint(1) DEFAULT '0',
  `$task_state` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`task_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `tasks`
--
LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (6,'Fechas','Probando fechas y orden','2022-02-17 22:58:04','2022-02-19','',1,NULL,0,0),
(7,'Hacer deploy','Hcer depoy','2022-02-17 23:00:13','2022-02-19','',1,NULL,1,0),(11,'Finales I','Actividades 2021 
II retrasado por más de dos meses','2022-02-17 23:31:33','2022-02-21','',2,NULL,0,0),(12,'Como están?','Ciaoooooooo
ooooooo','2022-02-18 05:40:46','2022-02-18','medio',10,NULL,1,0),(13,'Ya casi está listo','Modifiqué mi tarea','202
2-02-18 05:50:58','2022-02-24','bajo',5,NULL,1,0),(15,'Ayudaaaaa','Nesecito ayuda con apache server :( :(','2022-02
-18 15:49:52','2022-02-24','',13,NULL,1,0),(16,'Tarea 01','Tarea para Mañana','2022-02-18 21:35:53','2022-02-12',''
,11,NULL,0,0),(17,'Probando','Probando nuevas funcionalidades de la pagina, antes del ...','2022-02-19 09:38:24','2
022-02-20','medio',12,NULL,1,0);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `day_of_birth` date DEFAULT NULL,
  `profile_img` varchar(255) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'victor@gmail.com','Victor','$2y$10$6fwfPVlcGjxmzIS6M.nNL.Il5c7jNag9vXNb8noaFJBS7s7.K
xbQ2',NULL,'685787-img_e9014.jpg',NULL),(2,'Jquery@gmail.com','Jquery','$2y$10$BWFWMoJbl648jBMLIJVZ4OtkVQWnreWPxg0e
yVwgRG7ybeRknmP/y',NULL,'340704-instagram_1645075004878.png',NULL),(3,'raul@gmail.com|','raul','$2y$10$Rxy3UpoBkwqu
Ti.LpJFDC.6t7fXjHEAcESnsLOsk.9x/eBWJxVve2',NULL,NULL,NULL),(4,'fabiana@gmail.com','Fabiana','$2y$10$hC/75IiCHfiwMgg
0TUTctuYb1JkYTlGuHPWVUTwSWSvK2EB8Cb4rC',NULL,NULL,NULL),(5,'momo@gmail.com','Momo','$2y$10$nIwfTNX2LswRIaYSYpnlgufa
jjIQ6s0X5e660rp6RgN4A2tHXqWxi',NULL,'106366-img_e7835.jpg',NULL),(10,'momos@gmail.com','momoland','$2y$10$Bb5YwGEXx
n2LClgMcSMpBuF29xffOOx7A6jSRRaZ6YikzRX.fHXVy',NULL,'694713-img_e9030.jpg',NULL),(11,'pedro@gmail.com','Pedro','$2y$
10$HWo7vWxDKXUOv6uA6LbqqeC8MqRtq0pbTxcxDlzuuDKjDlkMVEvBW',NULL,NULL,NULL),(12,'datatheyvit123@gmail.com','JDavid','
$2y$10$wBx3txwOgR2Gr/BgGCIlk.c/7tCcVTdnNnl2ZCe2MyLTZfkdLNp1a',NULL,'812085-win_20210824_14_19_44_pro.jpg',NULL),(13
,'raul@gmail.com','protón','$2y$10$M1C5ue8DkyXAeCh0CNfSeuK1Vow7Op.EZw0gqLlgkbArU9T.K7lNm',NULL,'5266-img_e9016.jpg'
,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
-- Dump completed on 2022-02-19  9:50:44
