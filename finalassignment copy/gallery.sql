-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 01, 2016 at 06:18 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `gallery`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` varchar(500) NOT NULL,
  `title` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`, `title`, `user_id`) VALUES
(31, 'http://www.neet.hu/fotok/92414995_cat.png', 'cat', 2),
(32, 'https://www.hy-vee.com/webres/Image/CMS/Meal_Solutions/30meals.jpg', 'my food today', 85),
(33, 'http://www.mgraves.org/wp-content/uploads/2010/10/cello.png', 'my chello', 86),
(34, 'http://curiousanimals.net/wp-content/uploads/2009/08/coda4.jpg', 'my little pony', 82),
(35, 'https://s-media-cache-ak0.pinimg.com/736x/9c/d5/7a/9cd57a8ecae3aab5c0a36149c784b2f6.jpg', 'fendy', -1),
(37, 'http://inthesetimes.com/images/articles/trump_flicker_face_yess.jpg', 'donald', -1),
(38, 'http://www.maxprog.com/img/cat.jpg', 'cat ', 2),
(39, 'http://cdn1-www.dogtime.com/assets/uploads/2011/04/file_2153_column_popular-dog-names.jpg', 'dog', -1),
(41, 'http://coloringbest.com/assets/2016/01/31/castle-coloring-pages-for-kids-coloring-pages.gif', 'castle', 82);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `user_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`user_id`, `message_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message` varchar(300) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`, `user_id`) VALUES
(1, 'hi my name is katie', 2),
(3, 'my mesage', 2),
(25, 'hellooooooo youuuu', 6),
(26, 'say oooooo', 6),
(27, 'say oooooo', 6),
(28, '', 1),
(29, 'hello what is going downnnnn', 6),
(30, 'helloooooooo', 6),
(33, 'hey whatws up', 2),
(34, 'hey whatws up', 2),
(35, 'hey whatws up', 2),
(36, 'this is my message', 2),
(37, 'this is my message', 2),
(38, 'this is my message', 2),
(39, 'this is my message', 2),
(40, 'this is my message', 2),
(41, 'this is my message', 2),
(42, 'this is my message', 2);

-- --------------------------------------------------------

--
-- Table structure for table `passwords`
--

CREATE TABLE `passwords` (
  `id` int(11) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passwords`
--

INSERT INTO `passwords` (`id`, `password`) VALUES
(2, 'makethis'),
(3, 'wednesday'),
(4, 'yesssssssss'),
(5, 'heyyyyyyyyy'),
(6, 'testing'),
(8, 'blahh'),
(9, 'gold'),
(10, 'gold'),
(11, 'dark'),
(17, 'chicken'),
(18, 'heyyyyy'),
(19, 'workdammit'),
(25, 'kids'),
(27, 'makethis'),
(28, ''),
(29, ''),
(30, 'mouse'),
(31, 'k');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, '1', '1'),
(2, 'katie', 'sak'),
(3, 'test', 'TESYYYY'),
(4, 'test', 'TESYYYY'),
(6, 'kay', 'tee'),
(7, 'john', 'egg'),
(8, 'katie ', '123'),
(9, 'test', '123'),
(12, 'yo', 'yo'),
(81, 'make', 'work'),
(82, 'donald', 'trump'),
(83, 'bob', 'white'),
(84, 'katie ', 'bird'),
(85, 'm', 'k'),
(86, 'yo', 'ma'),
(87, 'jerry', 'seinfeld'),
(88, 'george', 'lewis');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD KEY `message_id` (`message_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `passwords`
--
ALTER TABLE `passwords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `passwords`
--
ALTER TABLE `passwords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=89;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`message_id`) REFERENCES `messages` (`id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
