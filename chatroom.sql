-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 16, 2016 at 09:25 PM
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

--
-- Dumping data for table `chatRoom`
--

INSERT INTO `chatRoom` (`id`, `chat`, `name`, `recipient`) VALUES
(1, 'hi', 'id1', 0),
(2, 'hi', 'id1', 0),
(3, 'hi', 'id1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msg_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `msg` varchar(500) NOT NULL,
  `msg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msg_id`, `user_id`, `msg`, `msg_time`) VALUES
(1, 8, 'fdsa', '2016-02-15 19:57:18'),
(2, 9, 'hi', '2016-02-16 18:51:45'),
(3, 16, 'hi', '2016-02-16 19:00:12'),
(4, 27, 'ji', '2016-02-16 19:28:06'),
(5, 28, 'hola', '2016-02-16 20:21:06'),
(6, 9, 'hi', '2016-02-16 20:21:09');

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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `avi`, `status`, `c`, `email`, `password`) VALUES
(1, 'asdf', 'http://www.wildlifedepartment.com/wildlifemgmt/turtles/Common%20Map%20Turtle.jpg', 0, '#1bffe1', '', ''),
(2, 'test2', 'http://www.wildlifedepartment.com/wildlifemgmt/turtles/Common%20Map%20Turtle.jpg', 1, '#23ff31', '', ''),
(3, 'test3', 'http://www.wildlifedepartment.com/wildlifemgmt/turtles/Common%20Map%20Turtle.jpg', 2, '#ec73ff', '', ''),
(4, 'tesingcustomer', 'http://www.wildlifedepartment.com/wildlifemgmt/turtles/Common%20Map%20Turtle.jpg', 2, '#7a8afe', '', ''),
(5, 'asdf', 'fdsa', 2, '#30ff33', '', ''),
(6, 'asdf', 'fdsa', 2, '#30ff33', '', ''),
(7, 'sesstest', 'asdf', 2, '#00f927', '', ''),
(8, 'testsess2', 'fds', 2, '#000000', '', ''),
(9, 'hihi', 'asdf', 1, '#000000', '', ''),
(10, 'hihi', 'img', 1, '#69ff7a', '', ''),
(11, 'tuestest', 'img', 1, '#000000', 'me@me.com', '5ebe2294ecd0e0f08eab7690d2a6ee69'),
(12, 'rwwerwe', 'ssdf', 1, '#000000', 'adsf@fdsa.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(13, 'rwwerwe', 'ssdf', 1, '#000000', 'asdsf@fdsa.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(14, 'siobhan', 'http://www.backwaterreptiles.com/images/turtles/red-eared-slider-turtle-for-sale.jpg', 2, '#003dff', 'emaillly@yllliame.com', '660330d60fbc1a241be39280696b2942'),
(15, 'siobhanagain', 'img', 2, '#ff00ce', 'woao@woao.com', '22af645d1859cb5ca6da0c484f1f37ea'),
(16, 'fdsa', 'asdf', 2, '#000000', 'fdsa@rew.com', '912ec803b2ce49e4a541068d495ab570'),
(17, 'fdsa', 'asdf', 2, '#000000', 'ww@rew.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(18, 'fdsa', 'asdf', 2, '#000000', 'qqw@rew.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(19, 'fdsa', 'asdf', 2, '#000000', 'qqw@werwe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(20, 'fdsa', 'asdf', 2, '#000000', 'qqqw@werwe.com', 'fc2baa1a20b4d5190b122b383d7449fd'),
(21, 'fdsa', 'asdf', 2, '#000000', 'qqqsw@werwe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(22, 'fdsa', 'asdf', 2, '#000000', 'qqqssw@werwsdfe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(23, 'fdsa', 'asdf', 2, '#000000', 'qqqssw@werwsdhfe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(24, 'fdsa', 'asdf', 2, '#000000', 'qqqssw@werwsdhdfe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(25, 'fdsa', 'asdf', 2, '#000000', 'qqsqssw@werwsdhdfe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(26, 'me', 'pic', 2, '#fff', 'ya@ya.com', 'test'),
(27, 'fdsa', 'asdf', 2, '#000000', 'qqsqssw@werwssdhdfe.com', 'd41d8cd98f00b204e9800998ecf8427e'),
(28, 'siobhan', 'http://assets.worldwildlife.org/photos/144/images/hero_small/Giant_Panda_Hero_image_%28c%29_Michel_Gunther_WWF_Canon.jpg?1345515244', 2, '#00ff92', 'me@siobhan.ca', '912ec803b2ce49e4a541068d495ab570');

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
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
