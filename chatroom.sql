-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 01, 2016 at 08:13 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `chatroom`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatRoom`
--

CREATE TABLE `chatRoom` (
  `id` int(11) NOT NULL,
  `chat` text NOT NULL,
  `name` varchar(300) NOT NULL,
  `recipient` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `avi`, `status`, `c`, `email`, `password`) VALUES
(30, 'super_admin', './img/default/admin-avi-default.jpg', 1, 'rgba(24', 'admincity@gmail.com', '912ec803b2ce49e4a541068d495ab570'),
(31, 'test', './img/default/admin-avi-default.jpg', 1, '#772457', 'tes@test.com', 'ad0234829205b9033196ba818f7a872b'),
(32, 'test2', './img/default/admin-avi-default.jpg', 1, '#772457', 'test2@gmaiol.com', '912ec803b2ce49e4a541068d495ab570'),
(33, 'asdf', './img/33/7cd4ddb.jpeg', 1, '#772457', 'asdf', '1bb1dbb613d0db2041e35f52fea672c7');

-- --------------------------------------------------------

--
-- Table structure for table `usreRoomJoin`
--

CREATE TABLE `usreRoomJoin` (
  `roomId` int(11) NOT NULL,
  `usreId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatRoom`
--
ALTER TABLE `chatRoom`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `recipient` (`recipient`),
  ADD KEY `id` (`id`);

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
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `usreRoomJoin`
--
ALTER TABLE `usreRoomJoin`
  ADD KEY `roomId` (`roomId`),
  ADD KEY `usreId` (`usreId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatRoom`
--
ALTER TABLE `chatRoom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`chatroom_id`) REFERENCES `chatRoom` (`id`);
