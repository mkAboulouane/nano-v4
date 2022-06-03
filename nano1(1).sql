-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 03, 2022 at 12:01 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nano1`
--

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(7),
(7),
(7);

-- --------------------------------------------------------

--
-- Table structure for table `paiment`
--

CREATE TABLE `paiment` (
  `id` bigint(20) NOT NULL,
  `payed_at` date DEFAULT NULL,
  `prix` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `type_paiment` varchar(255) DEFAULT NULL,
  `panier_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `panier`
--

CREATE TABLE `panier` (
  `id` bigint(20) NOT NULL,
  `date_ajout` date DEFAULT NULL,
  `etat_commande` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `prix_total` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `formation_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pic_byte` longblob DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `produit_bio_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `produit_bio`
--

CREATE TABLE `produit_bio` (
  `id` bigint(20) NOT NULL,
  `added_at` date DEFAULT NULL,
  `available` bit(1) NOT NULL,
  `description` longtext DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `photos` varchar(255) DEFAULT NULL,
  `prix` double NOT NULL,
  `prix_ancien` double NOT NULL,
  `promotion` bit(1) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `visible` bit(1) NOT NULL,
  `image_principal_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produit_bio`
--

INSERT INTO `produit_bio` (`id`, `added_at`, `available`, `description`, `nom`, `photos`, `prix`, `prix_ancien`, `promotion`, `updated_at`, `visible`, `image_principal_id`) VALUES
(1, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 0', NULL, 903.3971267002216, 4418.951467345962, b'0', NULL, b'1', NULL),
(2, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 1', NULL, 1060.9178583942378, 4401.4459597798395, b'0', NULL, b'1', NULL),
(3, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 2', NULL, 1424.2788878595647, 4791.723431434206, b'0', NULL, b'1', NULL),
(4, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 3', NULL, 351.74162590638787, 2683.991328083975, b'0', NULL, b'1', NULL),
(5, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 4', NULL, 715.5577929589714, 3647.292258439875, b'0', NULL, b'1', NULL),
(6, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 5', NULL, 428.59125923510203, 2293.1764424104013, b'0', NULL, b'1', NULL),
(7, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 6', NULL, 905.4922378446558, 1125.2632112424515, b'0', NULL, b'1', NULL),
(8, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 7', NULL, 1239.1058865990274, 327.86160244759054, b'1', NULL, b'1', NULL),
(9, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 8', NULL, 196.99879125218612, 357.8544145244289, b'1', NULL, b'1', NULL),
(10, '2022-06-03', b'1', 'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum', 'Lantilles 9', NULL, 304.59283996875433, 1938.1681346292157, b'1', NULL, b'1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `produit_panier_item`
--

CREATE TABLE `produit_panier_item` (
  `id` bigint(20) NOT NULL,
  `prix` double DEFAULT NULL,
  `quantite` int(11) NOT NULL,
  `panier_id` bigint(20) DEFAULT NULL,
  `produit_bio_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reunion`
--

CREATE TABLE `reunion` (
  `type` varchar(10) NOT NULL,
  `id` bigint(20) NOT NULL,
  `added_at` date DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `duree` varchar(255) DEFAULT NULL,
  `encadrant_prof` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `visible` bit(1) NOT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `nombre_place` int(11) DEFAULT NULL,
  `prix` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reunion`
--

INSERT INTO `reunion` (`type`, `id`, `added_at`, `date`, `description`, `duree`, `encadrant_prof`, `nom`, `updated_at`, `visible`, `lieu`, `nombre_place`, `prix`) VALUES
('FORMATION', 1, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 0', NULL, b'0', NULL, 0, 1086),
('CONGRE', 2, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 0', NULL, b'0', 'Mhamid 0', NULL, NULL),
('FORMATION', 3, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 1', NULL, b'0', NULL, 3, 817),
('CONGRE', 4, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 1', NULL, b'0', 'Mhamid 1', NULL, NULL),
('FORMATION', 5, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 2', NULL, b'0', NULL, 6, 1019),
('CONGRE', 6, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 2', NULL, b'0', 'Mhamid 2', NULL, NULL),
('FORMATION', 7, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 3', NULL, b'0', NULL, 9, 817),
('CONGRE', 8, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 3', NULL, b'0', 'Mhamid 3', NULL, NULL),
('FORMATION', 9, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 4', NULL, b'0', NULL, 12, 1665),
('CONGRE', 10, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 4', NULL, b'0', 'Mhamid 4', NULL, NULL),
('FORMATION', 11, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 5', NULL, b'0', NULL, 15, 152),
('CONGRE', 12, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 5', NULL, b'0', 'Mhamid 5', NULL, NULL),
('FORMATION', 13, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 6', NULL, b'0', NULL, 18, 1933),
('CONGRE', 14, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 6', NULL, b'0', 'Mhamid 6', NULL, NULL),
('FORMATION', 15, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 7', NULL, b'0', NULL, 21, 32),
('CONGRE', 16, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 7', NULL, b'0', 'Mhamid 7', NULL, NULL),
('FORMATION', 17, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 8', NULL, b'0', NULL, 24, 1126),
('CONGRE', 18, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 8', NULL, b'0', 'Mhamid 8', NULL, NULL),
('FORMATION', 19, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', '20', NULL, 'learn java 9', NULL, b'0', NULL, 27, 1379),
('CONGRE', 20, '2022-06-03', NULL, 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte.', NULL, 'khalil', 'learn java 9', NULL, b'0', 'Mhamid 9', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles_permissions`
--

CREATE TABLE `roles_permissions` (
  `role_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role_app`
--

CREATE TABLE `role_app` (
  `id` bigint(20) NOT NULL,
  `authority` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role_app`
--

INSERT INTO `role_app` (`id`, `authority`, `created_at`, `updated_at`) VALUES
(1, 'ADMIN', NULL, NULL),
(3, 'AGENT', NULL, NULL),
(5, 'CLIENT', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`user_id`, `role_id`) VALUES
(2, 1),
(4, 3),
(6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user_app`
--

CREATE TABLE `user_app` (
  `id` bigint(20) NOT NULL,
  `account_non_expired` bit(1) NOT NULL,
  `account_non_locked` bit(1) NOT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `credentials_non_expired` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_changed` bit(1) NOT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `image_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_app`
--

INSERT INTO `user_app` (`id`, `account_non_expired`, `account_non_locked`, `adress`, `city`, `created_at`, `credentials_non_expired`, `email`, `enabled`, `gender`, `nom`, `password`, `password_changed`, `pays`, `phone`, `prenom`, `updated_at`, `username`, `image_id`) VALUES
(2, b'1', b'1', NULL, NULL, '2022-06-03 09:38:17', b'1', 'admin', b'1', NULL, NULL, '$2a$10$URuOg1.GiW6AAorTCisBQu7H9zE163MXM./Vb84DobVuWxSPeTxvq', b'0', NULL, 'admin', NULL, NULL, 'admin', NULL),
(4, b'1', b'1', NULL, NULL, '2022-06-03 09:38:17', b'1', 'gerant', b'1', NULL, NULL, '$2a$10$uxLhE2Uu0gBtGAV/TeBbXuBZAwd7dvUXAP.Tnvg0dLfe07B6k2d9a', b'0', NULL, 'gerant', NULL, NULL, 'gerant', NULL),
(6, b'1', b'1', NULL, NULL, '2022-06-03 09:38:17', b'1', 'client', b'1', NULL, NULL, '$2a$10$fc7e2HUfyt0guOtsA45OnebA.f/a6S8f0lSyW5t2IfU6pnUlTW.J6', b'0', NULL, 'client', NULL, NULL, 'client', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `paiment`
--
ALTER TABLE `paiment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5biia7ywoutylyxsooo5b5ooi` (`panier_id`);

--
-- Indexes for table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK87p6i4mrrpjp7lx35vw9bs8cx` (`formation_id`),
  ADD KEY `FKeiqj6lq4dkw011ev71dn6dv7h` (`user_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlr2s8o3q5kbhwxrhprj2i5lj` (`produit_bio_id`);

--
-- Indexes for table `produit_bio`
--
ALTER TABLE `produit_bio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8u6fxdu1wcv9e0spwwu64678w` (`image_principal_id`);

--
-- Indexes for table `produit_panier_item`
--
ALTER TABLE `produit_panier_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9qvxj91mesk6rw4t9uhy6rtro` (`panier_id`),
  ADD KEY `FK3kl7ea0awhl3nov6whr9hldxq` (`produit_bio_id`);

--
-- Indexes for table `reunion`
--
ALTER TABLE `reunion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD KEY `FKboeuhl31go7wer3bpy6so7exi` (`permission_id`),
  ADD KEY `FK3q3rt3at2wf4ooe7npa3et6yb` (`role_id`);

--
-- Indexes for table `role_app`
--
ALTER TABLE `role_app`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD KEY `FK4e8pdqeupv69eukb2bvy2ftbd` (`role_id`),
  ADD KEY `FK50gpsre6oxwwqf394f8wov1yf` (`user_id`);

--
-- Indexes for table `user_app`
--
ALTER TABLE `user_app`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKanvgaccoxk8tikjbtvbv7k2d8` (`image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `paiment`
--
ALTER TABLE `paiment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produit_bio`
--
ALTER TABLE `produit_bio`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `produit_panier_item`
--
ALTER TABLE `produit_panier_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reunion`
--
ALTER TABLE `reunion`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `paiment`
--
ALTER TABLE `paiment`
  ADD CONSTRAINT `FK5biia7ywoutylyxsooo5b5ooi` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`id`);

--
-- Constraints for table `panier`
--
ALTER TABLE `panier`
  ADD CONSTRAINT `FK87p6i4mrrpjp7lx35vw9bs8cx` FOREIGN KEY (`formation_id`) REFERENCES `reunion` (`id`),
  ADD CONSTRAINT `FKeiqj6lq4dkw011ev71dn6dv7h` FOREIGN KEY (`user_id`) REFERENCES `user_app` (`id`);

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `FKlr2s8o3q5kbhwxrhprj2i5lj` FOREIGN KEY (`produit_bio_id`) REFERENCES `produit_bio` (`id`);

--
-- Constraints for table `produit_bio`
--
ALTER TABLE `produit_bio`
  ADD CONSTRAINT `FK8u6fxdu1wcv9e0spwwu64678w` FOREIGN KEY (`image_principal_id`) REFERENCES `photos` (`id`);

--
-- Constraints for table `produit_panier_item`
--
ALTER TABLE `produit_panier_item`
  ADD CONSTRAINT `FK3kl7ea0awhl3nov6whr9hldxq` FOREIGN KEY (`produit_bio_id`) REFERENCES `produit_bio` (`id`),
  ADD CONSTRAINT `FK9qvxj91mesk6rw4t9uhy6rtro` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`id`);

--
-- Constraints for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD CONSTRAINT `FK3q3rt3at2wf4ooe7npa3et6yb` FOREIGN KEY (`role_id`) REFERENCES `role_app` (`id`),
  ADD CONSTRAINT `FKboeuhl31go7wer3bpy6so7exi` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`);

--
-- Constraints for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `FK4e8pdqeupv69eukb2bvy2ftbd` FOREIGN KEY (`role_id`) REFERENCES `role_app` (`id`),
  ADD CONSTRAINT `FK50gpsre6oxwwqf394f8wov1yf` FOREIGN KEY (`user_id`) REFERENCES `user_app` (`id`);

--
-- Constraints for table `user_app`
--
ALTER TABLE `user_app`
  ADD CONSTRAINT `FKanvgaccoxk8tikjbtvbv7k2d8` FOREIGN KEY (`image_id`) REFERENCES `photos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
