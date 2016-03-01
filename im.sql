-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 01, 2016 at 08:28 PM
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
  `chatroom_id` int(11) NOT NULL,
  `host_id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chatRoom`
--


--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatRoom`
--
ALTER TABLE `chatRoom`
  ADD PRIMARY KEY (`chatroom_id`),
  ADD KEY `chatroom_id` (`chatroom_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatRoom`
--
ALTER TABLE `chatRoom`
  MODIFY `chatroom_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;