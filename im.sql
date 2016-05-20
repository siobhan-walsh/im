-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 20, 2016 at 08:00 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `im`
--

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `avi`, `status`, `c`, `email`, `password`) VALUES
(1, 'kanye', './img/1/97bab07.png', 1, '#000000', 'kanye@kanye', '71c1e8a22dbe10daae0743e628bb991c'),
(2, 'taytay', './img/2/df2538b.jpeg', 1, '#338ac8', 'tay@tay', '4cdbd8808a5f3366d00df62af8673717'),
(3, 'kim', './img/3/0afc562.jpeg', 2, '#eb59fe', 'kim@kim', 'fb1eaf2bd9f2a7013602be235c305e7a'),
(5, 'nicki', './img/5/cebb156.jpeg', 2, '#08fcf0', 'nicki@nicki', '6c0deba6c74d65570f8aa9f10c6a869b'),
(6, 'beyonce', './img/6/2694482.jpeg', 1, '#000000', 'beyonce', '88f1798e205c841fe851b42095329f84');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;