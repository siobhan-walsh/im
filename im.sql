-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 19, 2016 at 03:03 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `im`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatroom`
--

CREATE TABLE `chatroom` (
  `chatroom_id` int(11) NOT NULL,
  `host_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chatroom`
--

INSERT INTO `chatroom` (`chatroom_id`, `host_id`, `name`) VALUES
(1, 1, 'asdf'),
(2, 1, 'test'),
(3, 1, 'why'),
(4, 1, 'rrr'),
(5, 1, 'rrr'),
(6, 1, 'x'),
(7, 1, 'x'),
(8, 1, 'p'),
(9, 1, 'p'),
(10, 1, 'a'),
(11, 1, 'a'),
(12, 1, 'x'),
(13, 1, 'x'),
(14, 1, 'r'),
(15, 1, 'r'),
(16, 1, 't'),
(17, 1, 'o'),
(18, 1, 'o'),
(19, 1, 'w'),
(20, 1, 'w'),
(21, 1, 'f'),
(22, 1, 'f'),
(23, 1, 'x'),
(24, 1, 'x'),
(25, 1, 'xz'),
(26, 1, 'xz'),
(27, 1, 'q'),
(28, 1, 'p'),
(29, 1, 'p'),
(30, 1, 'q'),
(31, 1, 'q'),
(32, 1, 'o'),
(33, 1, 'o'),
(34, 1, 'ee'),
(35, 1, '0099oo'),
(36, 1, '22qq'),
(37, 1, 'ter'),
(38, 1, 'hihi'),
(39, 1, 'sew'),
(40, 1, 'zz'),
(41, 1, 'zzqq'),
(42, 1, 'rew'),
(43, 1, 'cry'),
(44, 1, 'qwert'),
(45, 1, 'ttttttttttt'),
(46, 1, 'tttttttt'),
(47, 1, 'iuouio'),
(48, 1, 'ababababa'),
(49, 1, 'wwwwww'),
(50, 15, 'awesomechat'),
(51, 8, 'funchatparty'),
(52, 3, 'okkkkkk'),
(53, 3, 'george'),
(54, 3, 'dance'),
(55, 3, 'phone'),
(56, 3, 'phonebone'),
(57, 3, 'phonetone');

-- --------------------------------------------------------

--
-- Table structure for table `chatroom_users`
--

CREATE TABLE `chatroom_users` (
  `crUser_id` int(11) NOT NULL,
  `chatroom_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chatroom_users`
--

INSERT INTO `chatroom_users` (`crUser_id`, `chatroom_id`, `user_id`) VALUES
(1, 43, 1),
(2, 44, 1),
(3, 45, 1),
(4, 47, 1),
(5, 49, 1),
(6, 50, 1),
(7, 50, 2),
(8, 50, 8),
(9, 50, 10),
(10, 51, 1),
(11, 51, 3),
(12, 51, 5),
(13, 51, 6),
(14, 51, 8),
(15, 51, 11),
(16, 52, 4),
(17, 53, 3),
(18, 53, 4),
(19, 53, 5),
(20, 53, 6),
(21, 54, 3),
(22, 54, 4),
(23, 54, 8),
(24, 54, 9),
(25, 54, 10),
(26, 55, 3),
(27, 55, 4),
(28, 55, 5),
(29, 55, 6),
(30, 56, 3),
(31, 56, 4),
(32, 56, 5),
(33, 56, 6),
(34, 57, 3),
(35, 57, 4),
(36, 57, 5),
(37, 57, 6);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msg_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `chatroom_id` int(11) NOT NULL,
  `msg` varchar(500) NOT NULL,
  `msg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msg_id`, `user_id`, `chatroom_id`, `msg`, `msg_time`) VALUES
(1, 1, 1, 'hi', '2016-05-18 19:52:59'),
(2, 1, 1, 'wow', '2016-05-18 19:53:17'),
(3, 1, 50, 'teset50', '2016-05-18 21:09:19'),
(4, 1, 43, 'test43', '2016-05-18 21:09:43'),
(5, 8, 50, 'omg hi fancy seeing you in this cr', '2016-05-18 21:11:28'),
(6, 8, 51, 'ye you guys here?', '2016-05-18 21:15:05'),
(7, 1, 51, 'oh wow new chatroom ok this is cool', '2016-05-18 21:15:40'),
(8, 1, 51, 'where is arya?', '2016-05-18 21:16:13'),
(9, 3, 51, 'i am here', '2016-05-18 21:16:31'),
(10, 3, 51, 'i got a cool profile pic now :)', '2016-05-18 21:17:38'),
(11, 4, 57, 'hello?', '2016-05-18 21:30:57'),
(12, 4, 57, 'hello?why am i not an admin sigh', '2016-05-18 21:31:02'),
(13, 4, 57, 'lkj\\', '2016-05-18 21:32:39'),
(14, 4, 57, 'asdf', '2016-05-18 21:33:15'),
(15, 4, 57, 'better test', '2016-05-18 21:33:42'),
(16, 4, 57, 'ok now it works', '2016-05-18 21:33:47'),
(17, 4, 57, 'yayaya', '2016-05-18 21:33:50'),
(18, 3, 51, 'back', '2016-05-18 23:03:59'),
(19, 3, 51, 'hi', '2016-05-18 23:16:00'),
(20, 3, 51, 'omh', '2016-05-18 23:16:02'),
(21, 3, 51, 'too much', '2016-05-18 23:16:06'),
(22, 3, 51, 'can;t', '2016-05-18 23:16:09'),
(23, 3, 51, 'now', '2016-05-18 23:16:36'),
(24, 3, 51, 'ugh', '2016-05-18 23:16:40'),
(25, 3, 51, 'hiii', '2016-05-18 23:47:36'),
(26, 3, 56, 'hello?', '2016-05-19 00:01:58'),
(27, 3, 56, 'is anyone there?', '2016-05-19 00:02:02'),
(28, 3, 57, 'hey jon', '2016-05-19 00:02:36'),
(29, 4, 56, 'i am here', '2016-05-19 00:03:32'),
(30, 4, 56, 'no waaaa', '2016-05-19 00:12:19'),
(31, 4, 56, 'i hatethis', '2016-05-19 00:12:24'),
(32, 3, 56, 'oh hey', '2016-05-19 00:24:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `avi` varchar(500) NOT NULL,
  `status` int(11) NOT NULL,
  `c` varchar(7) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `avi`, `status`, `c`, `email`, `password`) VALUES
(1, 'sio', './img/default/admin-avi-default', 1, '#ffccee', 'test@test', '098f6bcd4621d373cade4e832627b4f6'),
(2, '', './img/default/avi-default.jpg', 1, '#772457', '', 'd41d8cd98f00b204e9800998ecf8427e'),
(3, 'arya', './img/3/08d9381.jpeg', 1, '#772457', 'arya@arya.com', '4bf84babe76dabda6c4da4d25354704d'),
(4, 'jonsnow', './img/4/f6ab9df.jpeg', 2, '#772457', 'jon@snow', '2b93fbdf27d43547bec8794054c28e00'),
(5, 'tyrion', './img/5/842968b.jpeg', 2, '#772457', 'ty@ty', '96bbe532072f59e4ecad83494dc70419'),
(6, 'sansa', './img/6/3277d33.jpeg', 2, '#772457', 'sansa@sansa', '07716070b3424f1256eea20c64ff5f79'),
(7, 'asdf', './img/default/avi-default.jpg', 2, '#772457', 'asdf@gmail.com', '912ec803b2ce49e4a541068d495ab570'),
(8, 'adminy', './img/default/admin-avi-default.jpg', 1, '#772457', 'adminy', 'a65a0cad3e35822c49835a7b1087e41d'),
(9, 'happy', './img/default/avi-default.jpg', 2, '#772457', 'happy@happy', '56ab24c15b72a457069c5ea42fcfc640'),
(10, 'old', './img/default/admin-avi-default.jpg', 1, '#772457', 'old@old', '149603e6c03516362a8da23f624db945'),
(11, 'xxx', './img/default/admin-avi-default.jpg', 1, '#772457', 'xx@xx', 'f561aaf6ef0bf14d4208bb46a4ccb3ad'),
(12, 'ccc', './img/default/admin-avi-default.jpg', 1, '#772457', 'cc@cc', '9df62e693988eb4e1e1444ece0578579'),
(13, 'a', './img/default/admin-avi-default.jpg', 1, '#772457', 'asdf@g', '0cc175b9c0f1b6a831c399e269772661'),
(14, 'fdsa', './img/default/admin-avi-default.jpg', 1, '#772457', 'fdsa@fdsa', 'fc2baa1a20b4d5190b122b383d7449fd'),
(15, 'tt', './img/default/admin-avi-default.jpg', 1, '#772457', 'tt@tt', 'accc9105df5383111407fd5b41255e23'),
(16, 'tess', './img/default/avi-default.jpg', 2, '#772457', 'tess@tess', '8b8be2799a2796a36a02004608426bdb'),
(17, 'me', './img/default/avi-default.jpg', 2, '#772457', 'me@me', 'ab86a1e1ef70dff97959067b723c5c24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatroom`
--
ALTER TABLE `chatroom`
  ADD PRIMARY KEY (`chatroom_id`),
  ADD KEY `host_id` (`host_id`);

--
-- Indexes for table `chatroom_users`
--
ALTER TABLE `chatroom_users`
  ADD PRIMARY KEY (`crUser_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chatroom_id` (`chatroom_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`msg_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `chatroom_id` (`chatroom_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatroom`
--
ALTER TABLE `chatroom`
  MODIFY `chatroom_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `chatroom_users`
--
ALTER TABLE `chatroom_users`
  MODIFY `crUser_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `chatroom`
--
ALTER TABLE `chatroom`
  ADD CONSTRAINT `chatroom_ibfk_1` FOREIGN KEY (`host_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `chatroom_users`
--
ALTER TABLE `chatroom_users`
  ADD CONSTRAINT `chatroom_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `chatroom_users_ibfk_2` FOREIGN KEY (`chatroom_id`) REFERENCES `chatroom` (`chatroom_id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`chatroom_id`) REFERENCES `chatroom` (`chatroom_id`);
