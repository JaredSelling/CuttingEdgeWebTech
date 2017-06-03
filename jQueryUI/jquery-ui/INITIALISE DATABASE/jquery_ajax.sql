-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2014 at 06:18 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jquery_ajax`
--


-- --------------------------------------------------------

--
-- Table structure for table `fruits`
--

DROP TABLE IF EXISTS `fruits`;
CREATE TABLE IF NOT EXISTS `fruits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `available` enum('yes','no') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `fruits`
--

INSERT INTO `fruits` (`id`, `name`, `available`) VALUES
(1, 'apples', 'no'),
(2, 'bananas', 'yes'),
(3, 'grapes', 'yes'),
(4, 'pomegranates', 'no'),
(5, 'pineapples', 'no'),
(6, 'coconuts', 'no'),
(7, 'oranges', 'no'),
(8, 'cherries', 'yes'),
(9, 'kiwi fruit', 'no'),
(10, 'strawberries', 'no'),
(11, 'mangoes', 'no'),
(12, 'raspberries', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
CREATE TABLE IF NOT EXISTS `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `display_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `name`, `display_order`) VALUES
(1, 'List item 1', 1),
(2, 'List item 2', 2),
(3, 'List item 3', 3),
(4, 'List item 4', 6),
(5, 'List item 5', 5),
(6, 'List item 6', 6),
(7, 'List item 7', 7),
(8, 'List item 8', 8),
(9, 'List item 9', 9),
(10, 'List item 10', 10);

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
CREATE TABLE IF NOT EXISTS `parts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `quantity` enum('lots','enough','none') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `parts`
--

INSERT INTO `parts` (`id`, `name`, `quantity`) VALUES
(1, 'exhaust', 'lots'),
(2, 'brake pads', 'lots'),
(3, 'brake disks', 'enough'),
(4, 'windscreen', 'enough'),
(5, 'windscreen wipers', 'none'),
(6, 'oil filter', 'enough'),
(7, 'air filter', 'none'),
(8, 'cambelt', 'lots'),
(9, 'CV joint', 'lots'),
(10, 'CV joint gaiter', 'enough'),
(11, 'headlight', 'lots'),
(12, 'radiator', 'enough');

-- --------------------------------------------------------

--
-- Table structure for table `toys`
--

DROP TABLE IF EXISTS `toys`;
CREATE TABLE IF NOT EXISTS `toys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `box` enum('orange','blue','green','red') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `toys`
--

INSERT INTO `toys` (`id`, `name`, `box`) VALUES
(1, 'car', 'orange'),
(2, 'teddy-bear', 'green'),
(3, 'lorry', 'orange'),
(4, 'train', 'blue'),
(5, 'monkey1', 'green'),
(6, 'monkey2', 'green'),
(7, 'boat', 'blue'),
(8, 'aeroplane A', 'red'),
(9, 'aeroplane B', 'red'),
(10, 'rocket', 'red'),
(11, 'fire engine', 'blue'),
(12, 'tractor', 'orange');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
