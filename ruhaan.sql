-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2021 at 12:31 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ruhaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `Id` int(11) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `Author` varchar(500) NOT NULL,
  `Date` varchar(100) NOT NULL,
  `Data` varchar(10000) NOT NULL,
  `Brief` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`Id`, `Title`, `Image`, `Author`, `Date`, `Data`, `Brief`) VALUES
(9483, 'Help The Helpless who need you', 'Images/Blog1.jpg', 'Admin', '23-09-2000', 'Trial', 'What');

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

CREATE TABLE `children` (
  `Image` varchar(500) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Age` int(11) NOT NULL,
  `Interest` varchar(500) NOT NULL,
  `Location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`Image`, `Name`, `Age`, `Interest`, `Location`) VALUES
('Images/child1.jpg', 'Rahul ', 10, 'Sleeping', '');

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Source` varchar(100) NOT NULL,
  `About` varchar(500) NOT NULL,
  `SingleSource` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`Name`, `Email`, `Password`, `Source`, `About`, `SingleSource`) VALUES
('GOONJ', 'goonj@gmail.com', 'Goonj456', 'Images/club1.jpg', 'Welfare', 'Images/club1.jpg'),
('INAAYAT', 'inaayat@gmail.com', 'Inaayat123', 'Images/club1.jpg', 'Welfare club', 'Images/club1.jpg'),
('Raj', 'mr@mr.com', '123456', 'Images/club1.jpg', '', 'Images/club3.jpg'),
('SAMMAAN', 'sammaan@gmail.com', 'Sammaan678', 'Images/club1.jpg', 'Community service', 'Images/club1.jpg'),
('UMEED', 'umeed@gmail.com', 'umeed345', 'Images/club1.jpg', 'Donation club', 'Images/club1.jpg'),
('Vansh Sachdeva', 'mr@mr.com', 'sfsg', 'Images/club1.jpg', 'qwerty', 'Images/club1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `subject` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `joinclub`
--

CREATE TABLE `joinclub` (
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Text` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `searchpost`
--

CREATE TABLE `searchpost` (
  `searchpost` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sitecheck`
--

CREATE TABLE `sitecheck` (
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sitecheck`
--

INSERT INTO `sitecheck` (`Email`, `Password`) VALUES
('', ''),
('', ''),
('1@1', '123456'),
('1@1', '123456'),
('123@1', '123456'),
('123@1', '123456'),
('123@1', '123456'),
('121@1', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`Email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
