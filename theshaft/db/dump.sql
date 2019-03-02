/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: amenities
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `amenities` (
  `DORM` text,
  `P_BATHROOM` int(11) DEFAULT NULL,
  `LAUNDRY` int(11) DEFAULT NULL,
  `CARPET` int(11) DEFAULT NULL,
  `F_KITCHEN` int(11) DEFAULT NULL,
  `P_KITCHEN` int(11) DEFAULT NULL,
  `LOUNGE` int(11) DEFAULT NULL,
  `GYM` int(11) DEFAULT NULL,
  `BIKE` int(11) DEFAULT NULL,
  `COMPUTER` int(11) DEFAULT NULL,
  `PRINT` int(11) DEFAULT NULL,
  `AC` int(11) DEFAULT NULL,
  `MUSIC` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: avg_stars
# ------------------------------------------------------------

CREATE OR REPLACE VIEW `avg_stars` AS
select
  `d`.`DORM` AS `DORM`,
  avg(`r`.`NUM_STARS`) AS `avg_stars`
from
  (
  `dorm_static_info` `d`
  join `review` `r`
  )
where
  (`d`.`DORM` = `r`.`DORM`)
group by
  `d`.`DORM`;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: class_makeup
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `class_makeup` (
  `id` int(11) DEFAULT NULL,
  `DORM` text,
  `FRESHMAN` int(11) DEFAULT NULL,
  `SOPHOMORE` int(11) DEFAULT NULL,
  `JUNIOR` int(11) DEFAULT NULL,
  `SENIOR` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: dorm_explore_photos
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `dorm_explore_photos` (
  `DORM` varchar(45) NOT NULL,
  `PHOTOGRAPHER` varchar(45) DEFAULT NULL,
  `MAIN_IMAGE` mediumtext,
  `OTHER1` mediumtext,
  `OTHER2` mediumtext,
  `OTHER3` mediumtext,
  `OTHER4` mediumtext,
  PRIMARY KEY (`DORM`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: dorm_static_info
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `dorm_static_info` (
  `DORM` text,
  `ADDRESS` text,
  `DESCRIPTION` text,
  `COLLEGE` text,
  `THUMBNAIL_IMAGE` text,
  `SUITE` text,
  `WALKTHROUGH` int(11) DEFAULT NULL,
  `SINGLE_` int(11) DEFAULT NULL,
  `DOUBLE_` int(11) DEFAULT NULL,
  `TRIPLE_` int(11) DEFAULT NULL,
  `PROS` text,
  `CONS` text,
  `LATITUDE` double DEFAULT NULL,
  `LONGITUDE` double DEFAULT NULL,
  `LOTTERY_NUMS` text,
  `CLASS_MAKEUP` text
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: floor_plans
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `floor_plans` (
  `DORM` varchar(40) NOT NULL,
  `1` varchar(60) DEFAULT NULL,
  `2` varchar(60) DEFAULT NULL,
  `3` varchar(60) DEFAULT NULL,
  `4` varchar(60) DEFAULT NULL,
  `5` varchar(60) DEFAULT NULL,
  `6` varchar(60) DEFAULT NULL,
  `7` varchar(60) DEFAULT NULL,
  `8` varchar(60) DEFAULT NULL,
  `9` varchar(60) DEFAULT NULL,
  `10` varchar(60) DEFAULT NULL,
  `11` varchar(60) DEFAULT NULL,
  `12` varchar(60) DEFAULT NULL,
  `13` varchar(60) DEFAULT NULL,
  `14` varchar(60) DEFAULT NULL,
  `15` varchar(60) DEFAULT NULL,
  `16` varchar(60) DEFAULT NULL,
  `17` varchar(60) DEFAULT NULL,
  `18` varchar(60) DEFAULT NULL,
  `19` varchar(60) DEFAULT NULL,
  `20` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`DORM`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: related_articles
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `related_articles` (
  `DORM` varchar(40) NOT NULL,
  `RELATED1` varchar(255) DEFAULT NULL,
  `RELATED2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`DORM`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: related_articles_metadata
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `related_articles_metadata` (
  `URL` varchar(255) NOT NULL,
  `TITLE` varchar(255) NOT NULL,
  `IMAGE_URL` varchar(255) NOT NULL,
  `AUTHOR` varchar(255) NOT NULL,
  `DATE` varchar(45) NOT NULL,
  PRIMARY KEY (`URL`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: related_dorms
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `related_dorms` (
  `DORM` varchar(40) NOT NULL,
  `RELATED1` varchar(40) NOT NULL,
  `RELATED2` varchar(40) NOT NULL,
  PRIMARY KEY (`DORM`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: review
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `review` (
  `TIMESTAMP` text,
  `ADDRESS` text,
  `DORM` text,
  `YEAR` text,
  `ROOM_NUM` text,
  `NUM_STARS` int(11) DEFAULT NULL,
  `RECOMMEND` int(11) DEFAULT NULL,
  `REVIEW_TXT` text,
  `THUMBS_UP` text,
  `THUMBS_DOWN` text
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: suites
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `suites` (
  `DORM` text,
  `TWO_SUITE` int(11) DEFAULT NULL,
  `THREE_SUITE` int(11) DEFAULT NULL,
  `FOUR_SUITE` int(11) DEFAULT NULL,
  `FIVE_SUITE` int(11) DEFAULT NULL,
  `SIX_SUITE` int(11) DEFAULT NULL,
  `SEVEN_SUITE` int(11) DEFAULT NULL,
  `EIGHT_SUITE` int(11) DEFAULT NULL,
  `NINE_SUITE` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: amenities
# ------------------------------------------------------------

INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('47 Claremont', 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('600 W 113th', 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Broadway Hall', 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Carlton Arms', 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('East Campus', 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Furnald Hall', 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Harmony Hall', 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Hogan Hall', 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('McBain Hall', 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('River Hall', 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Ruggles Hall', 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Schapiro Hall', 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Watt Hall', 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Wien Hall', 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Woodbridge Hall', 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Hewitt Hall', 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Elliott Hall', 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Sulzberger Tower', 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('600 W 116th St.', 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('616 W 116th St.', 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('620 W 116th St.', 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('601 W 110th St.', 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Cathedral Gardens', 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0);
INSERT INTO
  `amenities` (
    `DORM`,
    `P_BATHROOM`,
    `LAUNDRY`,
    `CARPET`,
    `F_KITCHEN`,
    `P_KITCHEN`,
    `LOUNGE`,
    `GYM`,
    `BIKE`,
    `COMPUTER`,
    `PRINT`,
    `AC`,
    `MUSIC`
  )
VALUES
  ('Plimpton Hall', 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: class_makeup
# ------------------------------------------------------------

INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (1, '47 Claremont', 0, 0, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (2, '600 W 113th', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (3, 'Broadway Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (4, 'Carlton Arms', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (5, 'Carman Hall', 1, 0, 0, 0);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (6, 'East Campus', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (7, 'Furnald Hall', 1, 1, 0, 0);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (8, 'Harmony Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (9, 'Hartley Hall', 1, 1, 0, 0);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (10, 'Hogan Hall', 0, 0, 0, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (11, 'John Jay Hall', 1, 0, 0, 0);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (12, 'River Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (13, 'Ruggles Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (14, 'Schapiro Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (16, 'Watt Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (17, 'Wien Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (18, 'Woodbridge Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (19, 'Hewitt Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (20, 'Elliott Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (21, 'Sulzberger Tower', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (22, '600 W 116th St.', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (23, '616 W 116th St.', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (24, '620 W 116th St.', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (25, '601 W 110th St.', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (26, 'Cathedral Gardens', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (27, 'Plimpton Hall', 0, 1, 1, 1);
INSERT INTO
  `class_makeup` (
    `id`,
    `DORM`,
    `FRESHMAN`,
    `SOPHOMORE`,
    `JUNIOR`,
    `SENIOR`
  )
VALUES
  (28, 'McBain Hall', 0, 1, 1, 1);

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: dorm_explore_photos
# ------------------------------------------------------------

INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '47 Claremont',
    'Lila',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FHXBX6S53BANRLVYYEP2SM7KBQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AB23CSWS6BD4XOLSCA5MNAAUCA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/U546RJOEDZGW3BNNBVBKVISQVE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BF3CSLM5QBCETNEWEOUJFAL7KQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UUJINRCSCFG7LJJYHZB5ZGQKE4.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '600 W 113th',
    'Elisabeth McLaughlin',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52QDVVUAVJB6VPQ7HJZD77F2YY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GQ3DXUGJHJEMBCMPZIHTUNUFZY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/I5MSQRHHSRAMXKJ6F6SA2T35II.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MHL34FWWZJCMBO5NQEN5TNBEDQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DVE2KEE2GREAFLC73V2UB6OMKA.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '600 W 116th St.',
    'Lula O\'Donnell',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CM7D2EHEZND3FGBCDIOVQKMUXI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7L2A64Q5HZGTRI2VBTM2W5N2XI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/25DAOPD25NDNHBLMC6BXJ44QQU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WTBKSOH2XVDX3LW2LM6V5QDCFY.jpg',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '601 W 110th St.',
    'Natalie Tischler ',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZPQEXFLWVZFTRMZGXYFFEZJLAQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZM6SNGJMXZDNPIOJCNIOV3LDHE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/62SCGLFXN5ANRJFQWLDCUDLSPE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/XJ5SE3HLYZHXNITYR7VCMDSMKI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7NOQH3DBL5HYPOYQFMQE3GRQSM.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '616 W 116th St.',
    'Caroline',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W3YVQ22ELBC3DGNRZ3LEBCJU6E.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HVDAZVBXIJBSVIRY7S4BZK4ZOI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WC5GOUKST5AXDNQBXYJ2FHENDE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OXB6FNWWH5CR7B3YEG2K4D4G3M.jpg',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    '620 W 116th St.',
    'Arielle Shternfeld',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/S3O4XE2NQNBIPM3HMBRLRWTE7E.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PCVSTFU7EJEK3GCFPSOM4GPSSA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZWJQASVEOJBSLAZBOBPF4CGJLE.jpg',
    '',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Broadway Hall',
    'Kirill Buskirk',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J7HNPO2AVRAC3HNWNHEMEMWOGM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/DBV76XWG3VFQRDMXBO2KKWY3LM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QA76HBNL2NBBDH243B3GTUKZNU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OUAGJ7ZQOVAZRJRLT5LNK7WTWY.jpg',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Carlton Arms',
    'Bea',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W2QZQ3K3DVCTZDYM2J75EDAY5A.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VHHRJVKQ5ZBEREQ4AEZK24EHVU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/NI75JKJ6XREXVOTHRSUHPKRYUQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CRQOMVXB45CL5HXTLWVXXMJQOY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LFBYGEDWDBFD5A3IMGDTP5SUMI.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Cathedral Gardens',
    'Margaret Maguire',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/M536CBWKSRG5TBZZX7PUWGC6DE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/B7VKQPLRQJAJ7JTEJKMPQCHXZ4.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OI3TWSK3YFDT7J2QHXJCECWFEM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/D2MHZD6F6NGG3EGL4SRMJEPRNY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/T6EPCOR3N5HPVMXAV3QQJ452H4.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Dorm',
    'Photographer',
    'Main Image',
    'Other',
    'Other',
    'Other',
    'Other'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'East Campus',
    'Caroline',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EFNLDXHRUZGLXLXVPDGKLELKGU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/NSH5VOUV7VD75DFCIMA5PG77XQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZW7YHPBYMRCUDDTWKI6KC2SQGU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/PE55ER2SNJBFTEKE4IHE7JE3DM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UOJXERLG6JGUBPTNRWBD7R5JRU.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Elliott Hall',
    'Cherrie Zheng',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MJEY3WTKGREW3AZP45BXXGKBYE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/NQD3QMVRXBGDPNVZY6GTMUCK5M.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GQTPPAQQTNDGXHXKH26TNFURV4.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HQOAB5HZKFE6DHJ5PC2UK6ZMAI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JBUHEXNBHBA53PPWIRZFRO56Z4.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Furnald Hall',
    'Guglielmo Vedovotto',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6JGJ344BQJDIZKMDDUEXHRYPT4.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/CDWTMP4BCJCGVLMXNCNJGCGUPU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HF2XTLIS2NGTFKJYXZOGN5YI2E.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZCTRKPHPDFA6BID2FPQMKKGX6E.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UC5QXJDA2ZCHDEJYZRIDXCCSQA.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Harmony Hall',
    'Natalie Tischler',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/R4YHYMMJEFA2LJFVUZAIJODKLY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/L5N2CH5N55F3DCA7LA4BERDWQA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CANEIJAUX5EZBBYQRKBZBOANVM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/T24FALM7X5EF3BWD5ZXI3HIIFE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KRA7OT35SJFKHFS7QHHPKULJ5E.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Hewitt Hall',
    'Arielle Shternfeld',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OIU3XCRAH5EQPA5EVXQUNF644M.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CJD6JS3FZRDV5DXBM42KYQXACM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7PER4MDJSJDRRB5LI3RYJWUZFA.jpg',
    '',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Hogan Hall',
    'Guglielmo Vedovotto',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CUTGLXRG6RFGRILXFDBHMWE3EM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AHXXQA5CKND37BIFKPC6DVL5ZA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/4PHFEXRHQRATRFHYEMPJE2X6FA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/RFSQGWLCYFBM3AT7VY7TXEHV5I.jpg',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'McBain Hall',
    'Elisabeth McLaughlin',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/U4MR5UO2A5BJXGOTMXL6ZA2RYI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BNRETXEELNHGLJEZLEJ7JE7XNY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OGIPVCKSSRA7RFPVZLITOCEZWY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/X5CFJVVF55BQVAZQSDQ7Q3EKCI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2TUPXARSRZAGFME5MHIOXOS7CY.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Plimpton Hall',
    'Margaret Maguire',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TLXZGID7WZFQFOT2QXJU6NZ3NQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/2LL3YJJ56ZHWRNATUNOGGN6ZSM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/42MDJQXI4JAFNHRQKKEOH6TKRI.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/4A3LARIKZJCGHDWLSJB7M4UVZE.jpg',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'River Hall',
    'Auden',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AVJRBOZL2RHUHMWEZFL4IBUJUE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RZPPXNN47RGGFBLXIBYG3I4JVU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UMFVT33JNRAVNBZ6M6U4TUGQLM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FGWQQY4H5ZA6PARE2F4CSPKVK4.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CPKCCARBZ5ESRKHJGUYHHRBFXA.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Ruggles Hall',
    'Kirill Buskirk',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OR7RADSPTFFMBGSNB455FHGKVQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/XFQRUJQ7A5EUHBONRFNMO4DQ3I.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WMNQNA6WT5BEZGUXYYSVYGLAIE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/VAKTWZ2WHZFELKQPUP3C6ZTCFU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WROC3XIBIBC3XAHBSPVDJO6CXU.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Schapiro Hall',
    'Aliya Schneider',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7O2CFNDANZGSXOHSL6H2O2UDPU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FMLVSVNS4FB5ZO4GMVSQS6HH4U.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BYILQNXGLZFZTOTW3L54GC3JQQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LT6TO7TD7JEKNBTAC2XI2DQMLY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/M6VZ7VQ365GTFANSQ6QSVUAKCY.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Sulzberger Tower',
    'Cherrie Zheng',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PJM4UI6IVZDF3KTP2ZFCEGPMPM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OAOMRRJ6NJHA5BWL7V3SGWZWAA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SDCXPBDODBDQJAWLMRSHHW4HAU.jpg',
    '',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Symposium',
    'Eliot Olson',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/R46KC3HAOBHJTIX6ZEPDNSOVYA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/P5YO5TGAJNCCJJXCUBSEZXE7AI.jpg',
    '',
    '',
    ''
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Watt Hall',
    'Lola Lafia',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RHHILY5NA5EJHIL6DQFLPBMSAQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EFN3KBYSNNBY3AK4JNADTFCWFM.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6476QY64X5BCTI4E5GBIZM63NU.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JAJXO44J35ESTP3DONDTYHBZIY.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6PLWXOUMT5AZPBWZ5VHMQL2UWE.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Wien Hall',
    'Lola Lafia',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CYBIXSCDP5FFBFEGSV6AV7AQ6U.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PL53UFKLWFHQZOEYDWZGKR2SLE.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JXVMEHTVM5GZ5OESOV3HQQC57A.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WHT5BUSSL5BEXPCQAYIXYYUSOQ.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GITH5WOUHNCJBPRA7FNJ7NAOOU.jpg'
  );
INSERT INTO
  `dorm_explore_photos` (
    `DORM`,
    `PHOTOGRAPHER`,
    `MAIN_IMAGE`,
    `OTHER1`,
    `OTHER2`,
    `OTHER3`,
    `OTHER4`
  )
VALUES
  (
    'Woodbridge Hall',
    'Eliot Olson',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HZOJ4YFXDRHEPPLEWBJNV4ZGGA.jpg',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/JZ2MROB5JBAJTEELHBTAXDLXMU.jpg',
    '',
    '',
    ''
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: dorm_static_info
# ------------------------------------------------------------

INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '47 Claremont',
    '47 Claremont Avenue',
    '47 Claremont, commonly known as Claremont, is located on Claremont Avenue right off 119th Street with mostly juniors and seniors. It is made up of suites of 3-7 people, with shared bathrooms and kitchens. Claremont is loved for its vicinity to Barnard facilities and buildings, and especially coveted now with the opening of Milstein. Though slightly secluded from main campus, Claremont residents experience an intimate, tight-knit group living experience and enjoy quick access to Riverside Park.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FHXBX6S53BANRLVYYEP2SM7KBQ.jpg',
    '',
    0,
    1,
    1,
    0,
    'Suite-style,Fitness room,Close to Barnard/Riverside Park\'',
    'No A/C,Far from campus\'',
    40.810173,
    -73.963966,
    'placeholder',
    'juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '600 W 113th',
    '600 West 113th Street',
    '600 W 113th, located on 113th and Broadway, is the perfect place for you if you want to get a taste of actually living in New York City. The dorm is just a block away from main campus, but also has close access to all the great restaurants in Morningside Heights, Westside, and Duane Reade. It’s made up of apartment style suites with a shared kitchen, private bathrooms and a mix of singles and doubles. 600 is quiet, cozy and convenient, and perfect for anyone who is looking for a more residential feel.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52QDVVUAVJB6VPQ7HJZD77F2YY.jpg',
    '',
    0,
    1,
    1,
    0,
    'Suite-style; residential feel,private bathrooms/ access to kitchen,close to Westside/Duane Reade\'',
    'No A/C,No gym,mostly doubles unless you are a senior\'',
    40.806065,
    -73.965805,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Broadway Hall',
    '114th Street and Broadway',
    'Broadway Hall is a dorm located along 114th Street, and consists of mainly singles and a few doubles. It is fully AC’d and is literally a short walk not only to Lerner and Ferris, but to other places along Broadway and to John Jay and JJ’s. Broadway Hall contains a mini gym on the 4th floor and two sky lounges, one of which is fully reserved for studying. There’s also a bunch of practice rooms too! Many of the doubles, especially on the higher levels near the corners, have great views of the city. If all of these pique your interest, definitely consider Broadway!\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/J7HNPO2AVRAC3HNWNHEMEMWOGM.jpg',
    '',
    0,
    1,
    1,
    0,
    'AC throughout the building,Very close to both Ferris, other restaurants along Broadway,Sky Lounges are very spacious, great view\'',
    'Rooms can be a little small,Bathrooms are shared between genders (not single-use) and two shower stalls per bathroom\'',
    40.806091,
    -73.964722,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Carlton Arms',
    '362 Riverside Drive',
    'Carlton Arms is located on Riverside Drive between 108th and 109th Street. It is the farthest Columbia dorms from main campus, though many still love and choose it because of its large suites consisted of 3, 4, 5, 6, or 8 people. Words from the street say that from Carlton Arms you can catch a glimpse of beautiful sunset on the Hudson, and the distance from campus can also be a blessing in disguise if you want to feel more immersed in the liveliness of upper west side.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W2QZQ3K3DVCTZDYM2J75EDAY5A.jpg',
    '',
    0,
    1,
    1,
    0,
    'Large suites,Good facilities,close to 110th subway station\'',
    'Far from campus,No gym\'',
    40.803829,
    -73.968628,
    'placeholder',
    'sophmores'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'East Campus',
    '70 Morningside Drive',
    'You have probably been to East Campus already, during NSOP or every other weekend. Known as the rowdy senior dorm, EC is consisted of townhouse, duplex suites and two-person flats with private kitchen and bathroom. Despite its notorious issues with stoves and crippling walls, EC is still one of the most popular senior housing options. You can enjoy a beautiful view looking down at Manhattan, along with a group living experience you won’t regret. It is also one of the few Columbia dorms with both A/C and a fitness room!\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/EFNLDXHRUZGLXLXVPDGKLELKGU.jpg',
    '',
    0,
    1,
    1,
    0,
    'A/C,Fitness room,private kitchen and bathroom\'',
    'Noise level,Molding on the walls,No stoves/ovens for 2018-2019\'',
    40.807102,
    -73.958916,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Furnald Hall',
    'Inside campus near Broadway and 115th Street',
    'Comprised of mostly freshmen and some sophomores, this corridor-style dorm is the perfect place if you want a quiet environment to come home to after a busy day of classes. It\'s close to lots of food options including Ferris dining hall, Pret a Manger, and Morton Williams. Each floor has spacious and clean lounges with kitchens, ideal for studying or watching movies with friend, and the lobby area is also a popular hangout spot where you’ll find lots of students cramming late-night homework sessions. All of the rooms have individual A/C units which can be useful during the brutally hot fall months and frigid winters. Furnald is the place to be if you want to live in a peaceful, clean setting with great views overlooking Broadway or the Columbia campus.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/6JGJ344BQJDIZKMDDUEXHRYPT4.jpg',
    '',
    0,
    1,
    1,
    0,
    'Close to Lerner and stores/restaurants on Broadway,Clean bathrooms and kitchens,Quiet, low key\'',
    'May not be social enough for outgoing people,Sense of community can be hit-or-miss based on floor\'',
    40.807415,
    -73.963882,
    'placeholder',
    'first-years,sophomores'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Harmony Hall',
    '544 West 110th Street',
    'Harmony is located on 110th Street between Amsterdam and Broadway, housing mostly sophomores and juniors. It’s a corridor-style residential hall with mostly singles with shared, co-ed bathrooms and a kitchen every floor. It is rather secluded from main campus, but closer to many upper west side restaurants and stores, and offer an off-campus feel. On another note, it is the title of one of Vampire Weekend’s new songs, so if you are a fan of them, maybe you should look into Harmony for your housing options.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/R4YHYMMJEFA2LJFVUZAIJODKLY.jpg',
    '',
    0,
    1,
    1,
    0,
    'Mostly singles,Fitness room,Off-campus experience\'',
    'Coed bathrooms,No A/C,Distance from campus\'',
    40.801891,
    -73.961273,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Hogan Hall',
    '566 W. 114th Street',
    'Hogan Hall, located on W 14th St between Broadway and Amsterdam consists of spacious singles organized into suites. Each suite includes 4, 5, or 6 rooms along with a kitchen and private bathroom. With its close proximity to the Van Am Quad, Hogan is perfect for the senior who wants to spend their final here at MoHi living the quintessential Columbia experience -- equal part all-nighters in Butler and hosting wild ragers for friends.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CUTGLXRG6RFGRILXFDBHMWE3EM.jpg',
    '',
    0,
    0,
    1,
    0,
    'Convenient location - close to John Jay, Butler, and Hamilton,Suite Style,Private kitchen and bathroom\'',
    'No A/C,No fitness room\'',
    40.806332,
    -73.964561,
    'placeholder',
    'seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'River Hall',
    '628 W. 114th St. (between Broadway and Riverside)',
    'River is located on 114th Street between Riverside and Broadway. It’s made up of large suites with almost all singles, with shared bathrooms and a communal common room and a kitchen per floor. Its proximity to Riverside can be a plus for many, and it also has both music practice rooms in its basement and a fitness room. It is relatively further down the hill on Riverside, so it can be a trek in the morning or winter, but if you are looking for somewhere more quiet, you should definitely consider River.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/AVJRBOZL2RHUHMWEZFL4IBUJUE.jpg',
    '',
    0,
    1,
    1,
    0,
    'Singles,Fitness room,Music practice room\'',
    'No A/C,Distance from campus\'',
    40.807362,
    -73.966362,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Ruggles Hall',
    '508 W. 114th Street',
    'Ruggles is located on 114th Street between Amsterdam and Broadway, right across from John Jay Hall. It consists of suites of 4, 6, or 8 people, housing mostly juniors and seniors. It’s a popular choice for upperclassmen who want to live in a tight-knit community with their friends and who want quick access to main campus, dining halls as well as local stores and services. Located right on frat row, noise level can be a problem for some, though that should not deter you from choosing Ruggles for its community and convenience.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OR7RADSPTFFMBGSNB455FHGKVQ.jpg',
    '',
    0,
    1,
    1,
    0,
    'Proximity to John Jay & main campus,Suite-style,Easy to get singles\'',
    'Noise level,No A/C\'',
    40.805752,
    -73.962692,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Schapiro Hall',
    '605 W. 115th Street',
    'Schapiro is located on 115th St between Broadway and Riverside Park. It is a corrodior-style dorm with 15 residential floors that houses sophomores, juniors, and seniors, and include singles as well as traditional and walk-through doubles. It offers traditional perks of a larger dorm - free laundry in the basement and kitchen and study lounges - as well as less conventional features, like a dance room omn the first floor and 17th floor study lounge overloooking the Hudson River.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7O2CFNDANZGSXOHSL6H2O2UDPU.jpg',
    '',
    1,
    1,
    1,
    0,
    'Singles,Dance room on 1st floor,Sky lounge\'',
    'No A/C,Communal bathrooms by floor,Smaller rooms\'',
    40.808495,
    -73.965302,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Watt Hall',
    '549 W. 113th Street',
    'Watt is located on 113th Street between Amsterdam and Broadway, housing mostly juniors and seniors. It’s made up of studio singles and doubles as well as 1-bedroom and 2-bedroom apartment-style rooms. There are private bathroom and kitchen in each apartment, and therefore a favorite for those who want a more private, independent living experience but also don’t want to be too removed from main campus. Its proximity to frat row can be both a pro and a con depending on what kind of residential experience you are looking for!\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/RHHILY5NA5EJHIL6DQFLPBMSAQ.jpg',
    '',
    0,
    1,
    1,
    0,
    'Apartment style with private bathroom and kitchen,Convenient location; proximity to main campus and frats\'',
    'No A/C,Noise level\'',
    40.806091,
    -73.96447,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Woodbridge Hall',
    '431 Riverside Drive',
    'Woodbridge Hall is on Riverside Drive between 115th and 116th Street. The dorm consists of mostly juniors and seniors, with apartment-style rooms that can be used either as a walk-through double or a regular double with a living room. In each one-bedroom apartment there is also a private kitchen and bathroom. Its vicinity to Riverside Park and relative location from campus is perfect for upperclassmen students who want to feel more independent and experience a residential experience that is closer to living in the real world.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HZOJ4YFXDRHEPPLEWBJNV4ZGGA.jpg',
    '',
    0,
    1,
    1,
    0,
    'Apartment-style with private kitchen & bathroom,Large rooms,Gym on 1st floor\'',
    'No A/C,Distance from campus (on Riverside)\'',
    40.808601,
    -73.966095,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Hewitt Hall',
    'The Quad (3009 Broadway)',
    'Hewitt Hall is perfect for any upperclassmen that miss the convenience of living in the quad. It is predominately made up of singles, with a smattering of doubles and a shared bathroom. Although you will be enrolled on the quad meal plan, residents also have access to the Sulz kitchen if they want to cook. Living in Hewitt, you are in close proximity to the subway station, Hewitt dining hall, classes on Barnard campus and all the great restaurants on Broadway. Hewitt is perfect for anyone who appreciates having their own privacy, but still enjoys the lively atmosphere of living on the quad. \'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/OIU3XCRAH5EQPA5EVXQUNF644M.jpg',
    '',
    0,
    1,
    1,
    1,
    'Many singles,There is a computer lab in the basement\'',
    'No A/C,Shared bathrooms and kitchen\'',
    40.80878,
    -73.96411,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Elliott Hall',
    '49 Claremont Avenue',
    'If you\'re looking for a quiet, independent living space with close proximity to Barnard\'s campus, Elliott Hall is ideal. This dorm is comprised of primarily singles and a few doubles, occupied by sophomores and juniors (including transfers.) The floors are laid out to include one lounge, 2 shared kitchens, 2 shared bathrooms, and two clusters of 12 rooms each. In addition to quiet privacy, residents enjoy close proximity to Riverside Park and a convenient backdoor entrance to the newly beloved Milstein Center. Residents at Elliott can quickly access the mailroom, Barnard gym, and library by merely crossing the street.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MJEY3WTKGREW3AZP45BXXGKBYE.jpg',
    '',
    0,
    1,
    1,
    0,
    'Location,Kitchens and bathrooms are never crowded\'',
    'Singles are tiny,Mouse problem\'',
    40.81025,
    -73.96388,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Sulzberger Tower',
    'The Quad (3009 Broadway)',
    'Sulzberger Tower is located in the Barnard quad and consists of single and double rooms on the 9th floor to the 19th floor of the Sulzberger building. Well known for its magnificent view overlooking the Hudson River and the Morningside Heights neighborhood, Sulzberger Tower is very popular among rising seniors, making it almost impossible for other upperclassmen to get. It has the practicality of the quad (close dining halls and classroom) without the rowdiness and noise level that you might expect from the quad, which is a quality you won’t find in the other Barnard dorms.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PJM4UI6IVZDF3KTP2ZFCEGPMPM.jpg',
    '',
    0,
    1,
    1,
    0,
    'Location,Nice View,Quiet\'',
    'Shared floor bathroom and kitchens,Laundry only available on 8th floor\'',
    40.81103,
    -73.95316,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '600 W 116th St.',
    '600 West 116th Street',
    'Just down the street from Shake Shack, 600 has the prime location of being proximal to Riverside Park, Barnard\'s campus, and the west side of College Walk. With 2-7 person suites, residents of 600 enjoy a shared kitchen, dining area, and bathroom. 600 is occupied by upperclass students who want suite-style living, and share the building with non-tenant occupants. In addition to rooms with beautiful views, residents of 600 also enjoy larger rooms than those in primarily sophomore/freshman housing.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CM7D2EHEZND3FGBCDIOVQKMUXI.jpg',
    '',
    0,
    1,
    1,
    0,
    'Location, Large rooms, Nice views on higher floors\'     ',
    'No A/C, Mice and roaches, Mostly doubles unless you are a senior\'',
    40.80795,
    -73.96445,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '616 W 116th St.',
    '616 W 116th St.',
    '616 is prime real estate on campus, and we\'re not just talking about how close it is to the Shake Shack. This dorm is steps away from Barnard campus and the west side of College Walk. 616 has suite style accomodations, featuring shared dining areas, kitchens, and bathrooms. 616 is known to have some nice views on the higher floors, and is a coveted living space by Barnard students, so it\'s mainly housed by upperclassmen.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W3YVQ22ELBC3DGNRZ3LEBCJU6E.jpg',
    '',
    0,
    1,
    1,
    0,
    'Location,  Suite Style, Computer lab and nice lounge on first floor\'',
    'Wind tunnel, Mouse problem this year, Unlikely to get in as an underclassmen, No A/C\'',
    40.80827,
    -73.96523,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '620 W 116th St.',
    '620 W 116th St.',
    '620 is the goal for many Barnard upperclassmen, and it\'s easy to see why. It\'s steps from the Claremont entrance to the Milstein Center (hello, tunnels? You\'ll never have to battle the elements again) and the west side of College Walk. Proximity to Morton Williams is a plus, as well as beautiful views on the higher floors. \'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/S3O4XE2NQNBIPM3HMBRLRWTE7E.jpg',
    '',
    0,
    1,
    1,
    0,
    'Nice views from higher up, Suite Style\'     ',
    'Wind tunnel, No A/C, No computer lab\'',
    40.80838,
    -73.96548,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    '601 W 110th St.',
    '601 W 110th St.',
    'If you want to feel like an actual adult, 601 W 110th is for you. Barnard leases space in this building, which means most tenants are *gasp* real people. It\'s proximity to Westside is absolutely prime, and although some might complain about the distance from Barnard campus, it\'s really not that far.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZPQEXFLWVZFTRMZGXYFFEZJLAQ.jpg',
    '',
    0,
    1,
    1,
    1,
    'Proximity to Westside Market, Nice sized suites\'',
    'Distance from campus, Bug problems, No A/C\'',
    40.80189,
    -73.96127,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Cathedral Gardens',
    '217 Manhattan Ave',
    'Cathedral Gardens, located at the corner of 110th street and Manhattan Avenue, is the farthest Barnard dorm from campus. Although the location may have its drawbacks, it is made up of some of the largest apartment style suites Barnard housing offers. Each suite has its own private bathroom(s) as well as a kitchen and a lounge area. Cathedral Gardens houses mostly seniors or very lucky juniors and sophomores. Since it is secluded from the main campus, dining halls will be pretty far, but there are still a variety of affordable restaurants and a grocery store close enough to make up for the distance.\'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/M536CBWKSRG5TBZZX7PUWGC6DE.jpg',
    '',
    0,
    1,
    1,
    0,
    'A/C, Spacious Suites, Private bathroom and kitchen\'       ',
    'Distance from Campus, One laundry room on 10th floor\'               ',
    40.80081,
    -73.9601,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Plimpton Hall',
    '1235 Amsterdam Avenue',
    'On the corner of 121st and Amsterdam, Plimpton is the ideal dorm for students who want to be near campus, but not caught up in the bustle. It comprises of apartment-style suites of four singles and a large double. It also includes its own lounge, computer lab, laundry room and houses the Barnard Clay Studio! Although it seems far, in reality, it is only a 7-minute walk away. Furthermore, it is conveniently located on top of a 24 four hour grocery store where you can buy late night snacks or grab lunch. Plimpton is a refreshing dorm that allows you to discover another side of Morningside Heights and Harlem while still being in close vicinity to campus. \'',
    'BARNARD',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/TLXZGID7WZFQFOT2QXJU6NZ3NQ.jpg',
    '',
    0,
    1,
    1,
    0,
    'Large rooms, Private bathroom and kitchen, A/C\'',
    'Distance to campus\'',
    40.8097,
    -73.95854,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'McBain Hall',
    '562 West 113th Street',
    'Located conveniently on the corner of 113th and Broadway, McBain Hall is one of the most popular housing choices for sophomores at Columbia. McBain has mostly doubles with some singles in a corridor-style hall, and has shared kitchens on each floor. If you currently enjoy living in Carman, or are looking for a residence hall that knows how to have fun, McBain would be a great option for you to consider! You\'ll be close to many of your sophomore friends, and popular restaurants (such as Community Food & Juice) are barely a minute away.\'',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/U4MR5UO2A5BJXGOTMXL6ZA2RYI.jpg',
    '',
    0,
    1,
    1,
    0,
    'Fitness room on the 4th floor,Computer lab on 1st floor,Bathrooms and kitchens on each floor are cleaned daily,Large doubles with great views\'',
    'No A/C,Two elevators – both of which are slow,May be noisy due to social atmosphere,Shaft doubles have no views and are fairly undesirable\'',
    40.805931,
    -73.964951,
    'placeholder',
    'sophomores,juniors,seniors'
  );
INSERT INTO
  `dorm_static_info` (
    `DORM`,
    `ADDRESS`,
    `DESCRIPTION`,
    `COLLEGE`,
    `THUMBNAIL_IMAGE`,
    `SUITE`,
    `WALKTHROUGH`,
    `SINGLE_`,
    `DOUBLE_`,
    `TRIPLE_`,
    `PROS`,
    `CONS`,
    `LATITUDE`,
    `LONGITUDE`,
    `LOTTERY_NUMS`,
    `CLASS_MAKEUP`
  )
VALUES
  (
    'Wien Hall',
    'Inside gate on 116th Street between Amsterdam and Morningside',
    'Comprised mostly of sophomores and juniors, Wien Hall is known for being the \"dorm with a sink in each room.\" However, that\'s not all that Wien has to offer! Located on 116th between Amsterdam and Morningside Drive, Wien has some of the greatest views you can get of Central Park and Morningside Park (especially on the higher floors), as well as—you guessed it—the mailing center, just an elevator ride away in the basement. Wien also has a spacious lounge on the first floor (with a piano, if you happen to play) and all floor lounges have a sink, a stove, and a microwave. If you\'re looking for a single, you would have a good chance at snagging one in Wien.',
    'COLUMBIA',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/CYBIXSCDP5FFBFEGSV6AV7AQ6U.jpg',
    '',
    1,
    1,
    1,
    0,
    'Sink in each room,Computer lab on 2nd floor,Mailing center is in Wien,Many singles available',
    'No A/C,Must keep sinks clean to prevent unwanted pests,Walls are relatively thin',
    40.806911,
    -73.959755,
    'placeholder',
    'sophomores,juniors,seniors'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: floor_plans
# ------------------------------------------------------------

INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '47 Claremont',
    '47 Claremont 1.jpg',
    '47 Claremont 2.jpg',
    '47 Claremont 3.jpg',
    '47 Claremont 4.jpg',
    '47 Claremont 5.jpg',
    '47 Claremont 6.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '523 West 113th',
    '523 West 113th 1.jpg',
    '523 West 113th 2.jpg',
    '523 West 113th 3.jpg',
    '523 West 113th 4.jpg',
    '523 West 113th 5.jpg',
    '523 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '531 West 113th',
    '531 West 113th 1.jpg',
    '531 West 113th 2.jpg',
    '531 West 113th 3.jpg',
    '531 West 113th 4.jpg',
    '531 West 113th 5.jpg',
    '531 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '534 West 114th',
    '534 West 114th 1.jpg',
    '534 West 114th 2.jpg',
    '534 West 114th 3.jpg',
    '534 West 114th 4.jpg',
    '534 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '536 West 114th',
    '536 West 114th 1.jpg',
    '536 West 114th 2.jpg',
    '536 West 114th 3.jpg',
    '536 West 114th 4.jpg',
    '536 West 114th 5.jpg',
    '536 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '540 West 114th',
    '540 West 114th 1.jpg',
    '540 West 114th 2.jpg',
    '540 West 114th 3.jpg',
    '540 West 114th 4.jpg',
    '540 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '542 West 114th',
    '542 West 114th 1.jpg',
    '542 West 114th 2.jpg',
    '542 West 114th 3.jpg',
    '542 West 114th 4.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '546 West 114th',
    '546 West 114th 1st floor.jpg',
    '546 West 114th 2nd floor.jpg',
    '546 West 114th 3rd floor.jpg',
    '546 West 114th 4th floor.jpg',
    '546 West 114th 5th floor.jpg',
    '546 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '548 W 113',
    '548 W 113 1st Floor.jpg',
    '548 W 113 2nd Floor.jpg',
    '548 W 113 3rd Floor.jpg',
    '548 W 113 4th Floor.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '548 West 113th',
    '548 West 113th 1.jpg',
    '548 West 113th 2.jpg',
    '548 West 113th 3.jpg',
    '548 West 113th 4.jpg',
    '548 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '548 West 114th',
    '548 West 114th 1.jpg',
    '548 West 114th 2.jpg',
    '548 West 114th 3.jpg',
    '548 West 114th 4.jpg',
    '548 West 114th 5.jpg',
    '548 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '550 West 113th',
    '550 West 113th 1.jpg',
    '550 West 113th 2.jpg',
    '550 West 113th 3.jpg',
    '550 West 113th 4.jpg',
    '550 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '552 West 113th',
    '552 West 113th 1.jpg',
    '552 West 113th 2.jpg',
    '552 West 113th 3.jpg',
    '552 West 113th 4.jpg',
    '552 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '552 West 114th',
    '552 West 114th 1st Floor.jpg',
    '552 West 114th 2nd Floor.jpg',
    '552 West 114th 3rd Floor.jpg',
    '552 West 114th 4th Floor.jpg',
    '552 West 114th 5th Floor.jpg',
    '552 West 114th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '554 West 114th',
    '554 West 114th 1.jpg',
    '554 West 114th 2.jpg',
    '554 West 114th 3.jpg',
    '554 West 114th 4.jpg',
    '554 West 114th 5.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '554 West 114th Street',
    '554 West 114th Street 1st Floor.jpg',
    '554 West 114th Street 2nd Floor.jpg',
    '554 West 114th Street 3rd Floor.jpg',
    '554 West 114th Street 4th Floor.jpg',
    '554 West 114th Street 5th Floor.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '556 West 113th',
    '556 West 113th 1.jpg',
    '556 West 113th 2.jpg',
    '556 West 113th 4.jpg',
    '556 West 113th Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '600 West 113',
    '600 West 113 _10.jpg',
    '600 West 113 _2.jpg',
    '600 West 113 _3.jpg',
    '600 West 113 _4.jpg',
    '600 West 113 _5.jpg',
    '600 West 113 _9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '604 West 114',
    '604 West 114 1st Floor.jpg',
    '604 West 114 2nd Floor.jpg',
    '604 West 114 3rd Floor.jpg',
    '604 West 114 Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '604 West 114th',
    '604 West 114th 4th Floor.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '606 West 114',
    '606 West 114 1st Floor.jpg',
    '606 West 114 2nd Floor.jpg',
    '606 West 114 3rd Floor.jpg',
    '606 West 114 4th Floor.jpg',
    '606 West 114 Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '619-623 (SIC)',
    '619-623 (SIC) 1st floor.jpg',
    '619-623 (SIC) 2nd floor.jpg',
    '619-623 (SIC) 3rd floor.jpg',
    '619-623 (SIC) 4th floor.jpg',
    '619-623 (SIC) 5th floor.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    '627 West 115',
    '627 West 115 1st Floor.jpg',
    '627 West 115 2nd Floor.jpg',
    '627 West 115 3rd Floor.jpg',
    '627 West 115 4th Floor.jpg',
    '627 West 115 5th Floor.jpg',
    '627 West 115 6th Floor.jpg',
    '627 West 115 Basement.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Broadway',
    'Broadway 10.jpg',
    'Broadway 11.jpg',
    'Broadway 12.jpg',
    'Broadway 13.jpg',
    'Broadway 3.jpg',
    'Broadway 4.jpg',
    'Broadway 5.jpg',
    'Broadway 6.jpg',
    'Broadway 7.jpg',
    'Broadway 8.jpg',
    'Broadway 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Carlton Arms',
    'Carlton 1A.jpg',
    'Carlton 1B.jpg',
    'Carlton 1C.jpg',
    'Carlton 2A.jpg',
    'Carlton 2B.jpg',
    'Carlton 7A.jpg',
    'Carlton 7B.jpg',
    'Carlton 7C.jpg',
    'Carlton 7D.jpg',
    'Carlton 8A.jpg',
    'Carlton 8B.jpg',
    'Carlton 8C.jpg',
    'Carlton 8D.jpg',
    'Carlton 9A.jpg',
    'Carlton 9B.jpg',
    'Carlton 9C.jpg',
    'Carlton 9D.jpg',
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Carman',
    'Carman 10.jpg',
    'Carman 11.jpg',
    'Carman 12.jpg',
    'Carman 13.jpg',
    'Carman 2.jpg',
    'Carman 4.jpg',
    'Carman 5.jpg',
    'Carman 6.jpg',
    'Carman 7.jpg',
    'Carman 8.jpg',
    'Carman 9.jpg',
    'Carman Mezzanine.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'East Campus',
    'East Campus 10.jpg',
    'East Campus 12.jpg',
    'East Campus 14.jpg',
    'East Campus 16.jpg',
    'East Campus 18.jpg',
    'East Campus 20.jpg',
    'East Campus 6.jpg',
    'East Campus 8.jpg',
    'East Campus Lower Townhouses.jpg',
    'East Campus Middle Townhouses 1.jpg',
    'East Campus Middle Townhouses 2.jpg',
    'East Campus Middle Townhouses 3.jpg',
    'East Campus Middle Townhouses 4.jpg',
    'East Campus Townhouses Lobby.jpg',
    'East Campus Upper Townhouses 1.jpg',
    'East Campus Upper Townhouses 2.jpg',
    'East Campus Upper Townhouses 3.jpg',
    'East Campus Upper Townhouses 4.jpg',
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Furnald',
    'Furnald 1.jpg',
    'Furnald 10.jpg',
    'Furnald 2.jpg',
    'Furnald 3.jpg',
    'Furnald 4.jpg',
    'Furnald 5.jpg',
    'Furnald 6.jpg',
    'Furnald 7.jpg',
    'Furnald 8.jpg',
    'Furnald 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Harmony',
    'Harmony 1.jpg',
    'Harmony 2.jpg',
    'Harmony 3.jpg',
    'Harmony 4.jpg',
    'Harmony 5.jpg',
    'Harmony 6.jpg',
    'Harmony 7.jpg',
    'Harmony 8.jpg',
    'Harmony Mezzanine.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Hartley',
    'Hartley 10.jpg',
    'Hartley 2.jpg',
    'Hartley 3.jpg',
    'Hartley 4.jpg',
    'Hartley 5.jpg',
    'Hartley 6.jpg',
    'Hartley 7.jpg',
    'Hartley 8.jpg',
    'Hartley 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Hogan',
    'Hogan 2.jpg',
    'Hogan 3.jpg',
    'Hogan 4.jpg',
    'Hogan 5.jpg',
    'Hogan 6.jpg',
    'Hogan 7.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'John Jay',
    'John Jay 10.jpg',
    'John Jay 11.jpg',
    'John Jay 12.jpg',
    'John Jay 13.jpg',
    'John Jay 14.jpg',
    'John Jay 15.jpg',
    'John Jay 5.jpg',
    'John Jay 6.jpg',
    'John Jay 7.jpg',
    'John Jay 8.jpg',
    'John Jay 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'McBain',
    'McBain 1.jpg',
    'McBain 2.jpg',
    'McBain 3.jpg',
    'McBain 4.jpg',
    'McBain 5.jpg',
    'McBain 6.jpg',
    'McBain 7.jpg',
    'McBain 8.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'River',
    'River 1.jpg',
    'River 2.jpg',
    'River 3.jpg',
    'River 4.jpg',
    'River 5.jpg',
    'River 6.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Ruggles',
    'Ruggles 1.jpg',
    'Ruggles 2.jpg',
    'Ruggles 3.jpg',
    'Ruggles 4.jpg',
    'Ruggles 5.jpg',
    'Ruggles 6.jpg',
    'Ruggles 7.jpg',
    'Ruggles 8.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Schapiro',
    'Schapiro 10.jpg',
    'Schapiro 11.jpg',
    'Schapiro 12.jpg',
    'Schapiro 13.jpg',
    'Schapiro 14.jpg',
    'Schapiro 15.jpg',
    'Schapiro 16.jpg',
    'Schapiro 17.jpg',
    'Schapiro 2.jpg',
    'Schapiro 3.jpg',
    'Schapiro 4.jpg',
    'Schapiro 5.jpg',
    'Schapiro 6.jpg',
    'Schapiro 7.jpg',
    'Schapiro 8.jpg',
    'Schapiro 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Wallach',
    'Wallach 10.jpg',
    'Wallach 2.jpg',
    'Wallach 3.jpg',
    'Wallach 4.jpg',
    'Wallach 5.jpg',
    'Wallach 6.jpg',
    'Wallach 7.jpg',
    'Wallach 8.jpg',
    'Wallach 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Watt',
    'Watt 1.jpg',
    'Watt 2.jpg',
    'Watt 3.jpg',
    'Watt 4.jpg',
    'Watt 5.jpg',
    'Watt 6.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Wien',
    'Wien 10.jpg',
    'Wien 11.jpg',
    'Wien 12.jpg',
    'Wien 2.jpg',
    'Wien 3.jpg',
    'Wien 4.jpg',
    'Wien 5.jpg',
    'Wien 6.jpg',
    'Wien 7.jpg',
    'Wien 8.jpg',
    'Wien 9.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );
INSERT INTO
  `floor_plans` (
    `DORM`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
    `13`,
    `14`,
    `15`,
    `16`,
    `17`,
    `18`,
    `19`,
    `20`
  )
VALUES
  (
    'Woodbridge',
    'Woodbridge 1.jpg',
    'Woodbridge 2.jpg',
    'Woodbridge 3.jpg',
    'Woodbridge 4.jpg',
    'Woodbridge 5.jpg',
    'Woodbridge 6.jpg',
    'Woodbridge 7.jpg',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: related_articles
# ------------------------------------------------------------

INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '47 Claremont',
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-how-to-participate-in-the-cubc-housing-exchange/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '548 West 113th Street (Symposium)',
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '600 West 113th Street',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-columbia-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '600 West 116th Street',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-dorm-and-suite-options-for-barnard-groups-of-1-7/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '601 West 110th Street',
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '616 West 116th Street',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-dorm-and-suite-options-for-barnard-groups-of-1-7/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '620 West 116th Street',
    'https://www.columbiaspectator.com/spectrum/2017/03/23/hack-housing-barnard-senior-selection-preview/',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-how-to-participate-in-the-cubc-housing-exchange/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Andersen Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Broadway Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Brooks Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Carlton Arms',
    'https://www.columbiaspectator.com/spectrum/2017/03/09/hack-housing-dorm-and-suite-options-for-columbia-groups/',
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Carman Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/30/hack-housing-which-dorms-and-floors-have-been-renovated-at-columbia-and-barnard/',
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Cathedral Gardens',
    'https://www.columbiaspectator.com/spectrum/2017/03/23/hack-housing-barnard-senior-selection-preview/',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'East Campus',
    'https://www.columbiaspectator.com/spectrum/2017/03/31/hack-housing-columbia-senior-selection-preview/',
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Elliott Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Furnald Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Harmony Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Hartley Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/',
    'https://www.columbiaspectator.com/spectrum/2017/03/09/hack-housing-dorm-and-suite-options-for-columbia-groups/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Hewitt Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Hogan Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/31/hack-housing-columbia-senior-selection-preview/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'John Jay Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'McBain Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/30/hack-housing-which-dorms-and-floors-have-been-renovated-at-columbia-and-barnard/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Plimpton Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-how-to-participate-in-the-cubc-housing-exchange/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Reid Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'River Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Ruggles Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-how-to-participate-in-the-cubc-housing-exchange/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Schapiro Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-columbia-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Sulzberger Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Sulzberger Tower',
    'https://www.columbiaspectator.com/spectrum/2017/03/23/hack-housing-barnard-senior-selection-preview/',
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Wallach Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-columbia-dorm-should-you-live-in/',
    ''
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Watt Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Wien Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/30/hack-housing-which-dorms-and-floors-have-been-renovated-at-columbia-and-barnard/',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/'
  );
INSERT INTO
  `related_articles` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Woodbridge Hall',
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/',
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: related_articles_metadata
# ------------------------------------------------------------

INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/03/hack-housing-which-dorm-should-you-pick-if-you-want-to-feel-like-youre-living-off-campus/',
    'Hack Housing: Which dorm should you pick if you want to feel like you’re living off campus?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GBP5UVL46RBAHFFO7KXWFB2VRA',
    'Isabella Monaco',
    'Mar 7, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-dorm-and-suite-options-for-barnard-groups-of-1-7/',
    'Hack Housing: Dorm and suite options for Barnard groups of 1-7',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/R22G6N454REBLLBBDOL7U2JL6M',
    'Mariella Evangelista',
    'Mar 8, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/08/hack-housing-how-to-participate-in-the-cubc-housing-exchange/',
    'Hack Housing: How to participate in the CU/BC housing exchange',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/T4BHXBBJEVEYNKPHVIKX4KHMX4',
    'Huber Gonzales',
    'Mar 8, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/09/hack-housing-dorm-and-suite-options-for-columbia-groups/',
    'Hack Housing: Dorm and suite options for Columbia groups 1-8',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MDV4CIFZKJHHVI25KX53FCYAI4',
    'Victoria Yang',
    'Mar 9, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/10/hack-housing-which-dorms-have-ac/',
    'Hack Housing: Which dorms have AC?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FVMJ33MTOVHTVMYVG6JWVSYGXM',
    'Isabella Monaco',
    'Mar 16, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-barnard-dorm-should-you-live-in/',
    'Hack Housing: Which Barnard dorm should you live in?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/HPJD56GBIFHQPK7GJ4EQW6ISSU',
    'Veronica Grace Taleon',
    'Mar 21, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-columbia-dorm-should-you-live-in/',
    'Hack Housing: Which Columbia dorm should you live in?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/M5NQVWKLAFBBXLFY673KIN3NEQ',
    'Veronica Grace Taleon',
    'Mar 21, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/21/hack-housing-which-dorms-are-the-quietest-on-campus/',
    'Hack Housing: Which dorms are the quietest on campus?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/GDS6DWLRM5GMPJCMC62AQBLMQM',
    'Sein An',
    'Mar 21, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/23/hack-housing-barnard-senior-selection-preview/',
    'Hack Housing: Barnard senior selection preview',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PAPKVJGXO5BJ5DUNGCERUO4HGI',
    'Veronica Grace Taleon',
    'Mar 23, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/24/hack-housing-which-dorms-are-the-loudest-on-campus/',
    'Hack Housing: Which dorms are the loudest on campus?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/W75FLR3G3BDKVCKEXYWA6GHK5I',
    'Isabella Monaco',
    'Mar 24, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/30/hack-housing-which-dorms-and-floors-have-been-renovated-at-columbia-and-barnard/',
    'Hack Housing: Which dorms and floors have been renovated at Columbia and Barnard?',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/ZOYMVWGRWFCMBLOU7F56MTTONI',
    'Jackie Hajdenberg',
    'Mar 29, 2017'
  );
INSERT INTO
  `related_articles_metadata` (`URL`, `TITLE`, `IMAGE_URL`, `AUTHOR`, `DATE`)
VALUES
  (
    'https://www.columbiaspectator.com/spectrum/2017/03/31/hack-housing-columbia-senior-selection-preview/',
    'Hack Housing: Columbia senior selection preview',
    'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/BYLNPGAHANBGDNYBU76IY4GMIQ',
    'Huber Gonzales',
    'Mar 31, 2017'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: related_dorms
# ------------------------------------------------------------

INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('47 Claremont', 'Ruggles Hall', 'Carlton Arms');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('600 W 113th', 'McBain', 'Schapiro Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '600 W 116th St.',
    'Plimpton Hall',
    '616 W 116th St.'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '601 W 110th St.',
    'Cathedral Gardens',
    '616 W 116th St.'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '616 W 116th St.',
    '620 W 116th St.',
    'Plimpton Hall'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    '620 W 116th St.',
    '616 W 116th St.',
    'Plimpton Hall'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Broadway', 'Schapiro Hall', 'River Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Carlton Arms', 'McBain', 'Ruggles Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Cathedral Gardens',
    '601 W 110th St.',
    '616 W 116th St.'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('East Campus', 'Hogan Hall', '47 Claremont');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Elliott Hall', 'Hewitt Hall', 'Sulzberger Tower');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Furnald Hall', 'Wien Hall', 'Harmony Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Harmony Hall', 'Wien Hall', 'Schapiro Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Hewitt Hall', 'Sulzberger Tower', 'Elliott Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Hogan Hall', 'East Campus', '47 Claremont');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('McBain Hall', '600 W 113th', 'Carlton Arms');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Plimpton Hall',
    '600 W 116th St.',
    '601 W 110th St.'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('River Hall', 'Schapiro Hall', 'Broadway');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Ruggles Hall', '47 Claremont', 'Carlton Arms');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Schapiro Hall', 'Broadway Hall', 'Wien Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  (
    'Sulzberger Tower',
    'Hewitt Hall',
    '620 W 116th St.'
  );
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Symposium', 'Watt Hall', 'Woodbridge Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Watt Hall', 'Woodbridge Hall', 'Symposium');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Wien Hall', 'Broadway', 'Schapiro Hall');
INSERT INTO
  `related_dorms` (`DORM`, `RELATED1`, `RELATED2`)
VALUES
  ('Woodbridge Hall', 'Watt Hall', 'Schapiro Hall');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: review
# ------------------------------------------------------------

INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 1:34:27',
    'raymond.li@columbiaspectator.com',
    'Carman Hall',
    'sophomores',
    '805',
    4,
    1,
    'It\'s the cool dorm. Every other dorm sucks.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 1:36:31',
    'r.bera@columbia.edu',
    'Schapiro Hall',
    'sophomores',
    '526',
    3,
    1,
    'The doubles for sophomoress are pretty large, and the bathrooms are relatively clean. Also a quiet dorm overall; helps if you have friends living in adjacent rooms.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 1:40:28',
    'syt2111@columbia.edu',
    'Watt Hall',
    'juniors',
    '4K',
    5,
    1,
    'Really large double with your own kitchen and bathroom shared with just your roommate. Bathroom gets cleaned once a week and also great location right across from McBain.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 1:48:29',
    'prakruth.adari@columbiaspectator.com',
    'River Hall',
    'juniors',
    '411',
    4,
    1,
    'Singles, nice kitchen, quiet.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:15:21',
    'ec3259@columbia.edu',
    'McBain Hall',
    'sophomores',
    '803',
    4,
    1,
    'Though some floors are gross, my floor’s bathrooms are consistently clean. My room is spacious and has lots of light. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:46:49',
    'ms5336@columbia.edu',
    'Wien Hall',
    'juniors',
    '442B',
    5,
    1,
    'Has a sink, single room, overall just very nice quality. I love how quiet it always is, as well. Location (next to campus, package center is right below, etc) is quite nice.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:47:21',
    'alice.qin@columbiaspectator.com',
    'Reid Hall',
    'first-years',
    '637',
    3,
    0,
    'No AC, and occasionally the electricity is out so I can\'t charge my laptop and phone. Since it faces Broadway street, it can get a bit noisy during nights. The taps in the restroom of Reid Hall do not have hot water. Other than that, other things are fine.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:48:45',
    'rrp2137@barnard.edu',
    'Hewitt Hall',
    'sophomores',
    '257',
    3,
    0,
    'I would recommend this dorm if you want a single but don\'t want to deal with living in a suite, but the bathrooms are not the best and you have to go on a full meal plan.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:49:31',
    'slb2234@columbia.edu',
    'Furnald Hall',
    'first-years',
    '909',
    5,
    1,
    'Furnald has it all: AC, kitchens, clean bathrooms, spacious rooms. It has a reputation for being quiet that initially worried me, but I’ve come to find that Furnald is as social or antisocial as you want it to be. Many of my closest friends live with me, and we are definitely not quiet. If you want some private time, you can have it. If you want a social life, you can have that too.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:52:47',
    'michael.rubin@columbiaspectator.com',
    'Carman Hall',
    'first-years',
    '1003B',
    4,
    1,
    'Carman is a great social opportunity for first-years and a fun way to stay involved in your community. I met a ton of my current friends through living in carman. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 9:58:10',
    'abhishek.hariharan@columbiaspectator.com',
    'John Jay Hall',
    'first-years',
    '1326',
    4,
    1,
    'Close to JJS and John Jay, great floor atmosphere, but restrooms suck and no AC',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:04:15',
    'pk2618@columbia.edu',
    'Wallach Hall',
    'juniors',
    '208',
    4,
    1,
    'Nice dorm with lots of natural lighting. Sometimes there would be cockroach problems, but they’re not that often.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:09:51',
    'sas2401@barnard.edu',
    'Plimpton Hall',
    'sophomores',
    '3A4',
    4,
    1,
    'My only complaint with plimpton would be the long-ish walk to campus and the subway. I love the air conditioning, fake-hardwood flooring/redone bathrooms and living right above Appletree! ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:12:57',
    'serena.cheng@columbia.edu',
    'McBain Hall',
    'sophomores',
    '502',
    2,
    0,
    'Can be pretty noisy and bathrooms are really dirty. There\'s always a weird sewage smell on the first floor and sometimes in the hallways. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:25:32',
    'valeriaescobar7@gmail.com',
    'Carman Hall',
    'first-years',
    '306',
    3,
    1,
    'You are in the dorm as most of your peers which is perfect for the freshmen experience but my room receives no sunlight. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:39:58',
    'cindy.espinosa@columbiaspectator.com',
    'Brooks Hall',
    'first-years',
    '344',
    3,
    1,
    'It has utilities problems, but facilities is usually quick to fix them. Large windows in each room. Small shared room in a quad style.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:44:02',
    'yl3815@columbia.edu',
    '600 W 113th',
    'sophomores',
    '9C6',
    5,
    1,
    'I love Nuss (though we can no longer enjoy Nuss bagels or smoothies :/) for its residential feel and intimacy. It\'s a quiet but intimate group living experience that truly made my year and the access to a kitchen is also a huge plus for me personally.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 10:45:23',
    'agm2182@barnard.edu',
    '600 W 116th',
    'sophomores',
    '3A',
    4,
    1,
    'I have a huge double, hardwood floors, beautiful walls and ceilings, incredible light (I live on a floor that has yet to be renovated). HOWEVER, there are SO many roaches and mice in my suite and on countless other floors in 600. If you can get over that and realize that maintenance requests are a joke, then this close-to-campus, beautifully lit home with tons of closet space would be perfect for you. Oh also, there is only one bathroom in my suite with 7 girls. That can definitely be a problem. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:03:26',
    'll3257@columbia.edu',
    'John Jay Hall',
    'first-years',
    '1444',
    5,
    1,
    'John Jay ROCKS',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:07:38',
    'sophie.kossakowski@columbiaspectator.com',
    'Cathedral Gardens',
    'seniors',
    '5D1',
    5,
    1,
    'Despite the walk (only downside, but the shuttle mitigates this at night) there’s a ton of space to have events, a dishwasher, two showers, AC, and tons of storage room. Everything is newer than other Barnard dorms I’ve lived in and we’ve had zero mice or roaches. The walls are a little thin but overall it’s a super nice place to get away from campus and it’s relaxing and social',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:11:14',
    'nrp2134@columbia.edu',
    'Wallach Hall',
    'first-years',
    '829',
    4,
    1,
    'Great view and spacious, but first couple weeks will be very uncomfortable (although doable) without air conditioning. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:11:51',
    'cgb2138@columbia.edu',
    'Furnald Hall',
    'first-years',
    '106',
    5,
    1,
    'Amazing, soundproof, clean, good bathrooms, nice people, small enough you know everyone, big enough that you know a ton of people from other things who also live in Furnald. BEST DORM. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:16:33',
    'js5151@barnard.edu',
    'Cathedral Gardens',
    'sophomores',
    '4A5',
    4,
    1,
    'Cathedral Gardens has amazing natural lighting pouring in from massive windows into spacious rooms. The suites also have dishwashers. Only downside is the 20 minute walk to campus, which sometimes results in a late-night uber pool. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:35:00',
    'led2155@barnard.edu',
    'Hewitt Hall',
    'sophomores',
    '255',
    4,
    1,
    'Its very accessible, in terms of location and by being on the second floor. I also have a single, and it is a pretty good size, too. The only drawback is having to go up to the third floor to do laundry.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 11:35:54',
    'enk2118@barnard.edu',
    'Plimpton Hall',
    'sophomores',
    '12B3',
    4,
    1,
    'Plimpton is great! AC, nice hardwood floors, conveniently located right next to Appletree. The only problem is it’s pretty far from campus, but even farther from the subway.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 12:40:08',
    'enn2113@barnard.edu',
    'Sulzberger Hall',
    'first-years',
    '327',
    4,
    1,
    'We love a nice location that faces Broadway and room controlled A/C and heater for the summer and winter months. The double is big enough for you to have your own space, so that\'s a plus too! ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:02:29',
    'bbl2115@barnard.edu',
    'Hewitt Hall',
    'sophomores',
    '252',
    3,
    1,
    'It\'s really nice to be in the quad, but the shared bathrooms suck. Also, you have to go to Sulz if you want to use a kitchen, so cooking isn\'t really an option.  It\'s also a louder dorm than you\'d expect.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:06:08',
    'cr2961@columbia.edu',
    'Wien Hall',
    'sophomores',
    '717',
    4,
    1,
    'It is convenient if you are looking for a single as an upperclassman. It is also a convenient location as it\'s not too far from campus. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:24:01',
    'sc4127@columbia.edu',
    '600 W 113th',
    'juniors',
    '9D',
    4,
    1,
    'Great location, good kitchen, cozy lounge, great view. But old building with constant issue. Nice security guard. Mean janitor ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:25:39',
    'camilla.green@columbiaspectator.com',
    'Brooks Hall',
    'first-years',
    '556',
    4,
    1,
    'As it\'s a first-year dorm, you can\'t select it during room selection, but overall it\'s a good dorm. The heating is shoddy and there is no AC so it gets quite warm during hot months, but the building itself is very beautiful because it\'s so old (I even have a fireplace!) Hallway bathrooms are always a gamble but ours are generally pretty clean. Overall, I think you\'ll be pretty happy to be assigned Brooks as a first-years. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:27:29',
    'ads2229@barnard.edu',
    'Hewitt Hall',
    'juniors',
    '579',
    4,
    1,
    'My room is private and spacious with a nice sun-set Instagram-able view that overlooks Claremont and the river. I recommend moving the furniture around so the bed is on the wall along the window to make the room feel larger. The lack of close kitchen and shared bathrooms where most of the showers and sinks don\'t function is disappointing, but the access to the other bathrooms on the quad make up for it. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:38:44',
    'katherine.gerberich@columbiaspectator.com',
    '600 W 116th',
    'juniors',
    '11F3',
    4,
    1,
    'Despite being shafted, this double gets a decent amount of afternoon light. It\'s a spacious room (enough space for a 5x7 rug). There is crown molding and hardwood floors. We have dealt with mice this year, though, and that\'s the biggest downside.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 13:52:18',
    'bh2693@barnard.edu',
    'Brooks Hall',
    'first-years',
    '551',
    4,
    1,
    'I live in a four-person suite in corridor style housing. Each floor comes equipped with decent bathrooms, cleaned daily, a lounge, and a kitchenette. I like the format of my room; there’s plenty of space, both in the two person shared room and the common room. The shared resources are sufficient as well, and I find myself using the kitchenette quite often',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 14:00:42',
    'kak2231@columbia.edu',
    '600 W 113th',
    'sophomores',
    '2C6',
    4,
    1,
    'We have a kitchen right next to our room, we’re close to campus, the building is really clean (no rats, mice, bugs). Sabrina at the desk is the light of my life!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 14:37:21',
    'ncm2145@columbia.edu',
    'McBain Hall',
    'sophomores',
    '829',
    3,
    0,
    'Avoid McBain if you can- the shared kitchen and bathrooms are inconvenient and often messy. It also isn’t as “social” as people may claim',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 14:40:02',
    'ncm2145@columbia.edu',
    'Carman Hall',
    'sophomores',
    '1107B',
    5,
    1,
    'Carman is the best first-years housing!!! It has suite-style bathrooms (rare) and the renovated floors are nicer than any housing I’ll probably have in nyc. Also if you get up high enough (like 1107B) you have a great, EC-like view!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 14:41:58',
    'nl2657@columbia.edu',
    'Wallach Hall',
    'first-years',
    '402',
    4,
    1,
    'Its a nice dorm with medium social life. There aren\'t any parties, but my floor is nice. The dorms themselves are also clean and nice. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 15:08:11',
    'kjb2181@columbia.edu',
    'Ruggles Hall',
    'juniors',
    '707',
    4,
    1,
    'Ruggles allows you to live with your friends and it offers you a kitchen and common space. The only downside is you will probably have to live in a double, but that isn\'t the worst thing. You will spend a lot of time with your friends, which is great!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 15:34:40',
    'rf2668@barnard.edu',
    'Sulzberger Hall',
    'first-years',
    '526',
    3,
    1,
    'Dorm itself is good. Spacious and has AC. But the bathroom situation is complicated. Only two showers and two toilets for the hall and the hot water is turned on only at 8am so if you are a morning showerer you’ll have to wait.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 15:48:20',
    'alena.zhang@columbia.edu',
    'Wallach Hall',
    'first-years',
    '325',
    4,
    1,
    'Nice facilities, big lounge, private bathrooms, good balance between quiet and noise. Good opportunity to make friends with upperclassmen. LLC events aren\'t actually mandatory (there aren\'t really that many) but can sometimes be fun!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 15:59:34',
    'maz2134@columbia.edu',
    'John Jay Hall',
    'first-years',
    '1328',
    5,
    1,
    'Abounding with singles and other freshman eager to mingle, John Jay is the Platonic ideal of the freshman dorm. If you\'re equal parts basic, social, and introverted, and enjoy staying in hotels, look no further. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:00:17',
    'ej2386@columbia.edu',
    'Carman Hall',
    'first-years',
    '1104',
    5,
    1,
    'carman\'s the best',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:04:13',
    'sib2116@columbia.edu',
    'Broadway Hall',
    'juniors',
    '1135',
    5,
    1,
    'Clean, quiet, renovated, spacious singles and air conditioning. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:06:54',
    'madison.harden@columbiaspectator.com',
    'Broadway Hall',
    'juniors',
    '1028',
    5,
    1,
    'The dorm is super quiet (which I think is great post freshman year!) and the rooms themselves are very clean. While the shared bathroom situation isn’t ideal, I never really have problems with overcrowding and it doesn’t get too dirty (only on occasions). Would highly recommend to someone who wants a single and doesn’t mind a quiet living space.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:08:40',
    'yk2762@columbia.edu',
    'Wien Hall',
    'sophomores',
    '336',
    4,
    1,
    'Honestly Wien is pretty nice. Having a sink in your room is super convenient. Wien was recently renovated so no more sketchy lighting/floor. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:10:24',
    'shj2120@columbia.edu',
    'Harmony Hall',
    'sophomores',
    '708',
    4,
    1,
    'At first you don’t understand why the world did this to you. And then you realise 110st station, westside, 1020, all the restaurants, how quiet it is and the fact that you can make anywhere a home with some community. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:34:19',
    'isabela.espadas@columbiaspectator.com',
    'Plimpton Hall',
    'juniors',
    '7C5',
    4,
    1,
    'I recommend the renovated floors of Plimpton very much. Hardwood floors, subway tiles in the bathroom and my room is huge. However, Plimp is a bit far from basically any other dorm ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:39:11',
    'ctc2141@columbia.edu',
    'River Hall',
    'juniors',
    '402',
    4,
    1,
    'Pretty chill atmosphere; people mainly keep to themselves and tend not to bother others. Amenities are decent, with a good number of private bathrooms per floor. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 16:39:59',
    'grace.holleman@columbiaspectator.com',
    'Plimpton Hall',
    'sophomores',
    '12B2',
    4,
    1,
    'Nice to have a kitchen and bathroom. Good sized singles but small doubles. The walk from campus isn\'t that bad. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 17:45:41',
    'jason.kao@columbia.edu',
    'Hartley Hall',
    'first-years',
    '5B9',
    4,
    1,
    'Especially among incoming first-years, Hartley has a reputation for holding the antisocial ones. But everyone that comes to Columbia is freaking awesome, and there\'s really no such thing. Hartley may seem dingey at first, but after some dope decorations it feels very homely. Also, it\'s getting renovated this year!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 18:15:08',
    'km3291@columbia.edu',
    'McBain Hall',
    'sophomores',
    '807',
    4,
    1,
    'Super social dorm, amenities are okay, but a pretty reasonable dorm for sophomoress in terms of size and accessibility to campus. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:00:23',
    'mlt2162@columbia.edu',
    'East Campus',
    'seniors',
    '1214',
    5,
    1,
    'All seniorss are here. Nice big lounge. Lots of problems but still worth it',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:02:44',
    'mlt2162@columbia.edu',
    'Carlton Arms',
    'juniors',
    '7C',
    2,
    0,
    'It’s really far from everything and socially ostracizing. Also the lounge and hallway area is a public space that RAs can enter so cant really drink and chill',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:16:37',
    'hc2841@columbia.edu',
    'Woodbridge Hall',
    'seniors',
    '6C',
    4,
    1,
    'I have mixed feelings about this dorm. The first thing I noticed when I moved in was that the floors were extremely tilted (to the point where I was sliding out of my bed if I pushed it too close to the wall). Laundry seems pretty reliable, had some shower issues early on in the year, but was definitely not as bad as juniors year (in Woodbridge 3G). In juniors year, we had urine leak from the ceiling into our toilet, so take that as you will.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:42:23',
    'sofia.partida@columbiaspectator.com',
    'Carman Hall',
    'first-years',
    '803A',
    4,
    1,
    'The renovated floors are really nice. It is close to both dining halls.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:42:33',
    'jab2449@columbia.edu',
    'Wallach Hall',
    'first-years',
    '625',
    5,
    1,
    'It\'s nearby dining halls, classes, and has nice community events as part of the LLC. Also very clean, and has a great piano.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:42:47',
    'ltn2115@barnard.edu',
    'Sulzberger Hall',
    'first-years',
    '424',
    4,
    1,
    'The room is in good condition, I have air conditioning and I am able to control my own heat. The only downside is that my widows are really drafty and living in the quad can be a bit loud and annoying. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:43:12',
    'jc4865@columbia.edu',
    'McBain Hall',
    'sophomores',
    '602',
    5,
    1,
    'Good sophomores dorm, friendly, sociable and close to campus. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 20:43:21',
    'jesus.mancillagarcia@columbiaspectator.com',
    'John Jay Hall',
    'first-years',
    '1208/07',
    4,
    1,
    'The dorm is conveniently located and is close to most building on campus. There is two dining halls in the dorm. The bathrooms are the best at Columbia.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:02:21',
    'beatrice.shlansky@columbiaspectator.com',
    'John Jay Hall',
    'first-years',
    '1110',
    4,
    1,
    'The dorm is nicely balanced between being social but also providing some sense of privacy. Rooms are sizable and clean. Bathrooms are not the best as they get dirty and hot water for showers is not consistent.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:03:30',
    'ria.honda@columbiaspectator.com',
    'Furnald Hall',
    'first-years',
    '503',
    2,
    0,
    'Although the facilities are nice, it\'s lack of social environment made it a pretty boring place to live for my freshman year. It\'s usually very quiet and people tend to stay in their rooms. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:39:40',
    'kimia.heydari@columbiaspectator.com',
    'Wallach Hall',
    'first-years',
    '925',
    3,
    1,
    'mice but otherwise good ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:40:50',
    'gk2466@columbia.edu',
    'Broadway Hall',
    'juniors',
    '1232',
    5,
    1,
    'It\'s quiet, clean, and the elevators are very functional and fast.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:40:50',
    'julian.shen-berro@columbiaspectator.com',
    '47 Claremont',
    'sophomores',
    '51C',
    5,
    1,
    'Great suite style housing. Could always go into my kitchen and find friends to hang out with. The kitchen and bathroom are very nice and a huge plus.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:41:25',
    'onyinye.enwereji@columbia.spectator.com',
    'Reid Hall',
    'first-years',
    '835',
    3,
    0,
    'There\'s no Air conditioning so in the summer, it\'s unbearably hot. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:41:40',
    'julian.shen-berro@columbiaspectator.com',
    'Carman Hall',
    'first-years',
    '707A',
    5,
    1,
    'Met some of my best friends living in Carman. Always people to hang out with in my suite, on my floor, or just a few flights up or down.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:42:31',
    'acq2116@columbia.edu',
    'Furnald Hall',
    'first-years',
    '208',
    5,
    1,
    'It\'s a tight-knight, extremely supportive community. And it\'s peaceful and always clean! ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:45:46',
    'eden.teferi@columbiaspectator.com',
    'Hartley Hall',
    'sophomores',
    '2C7',
    3,
    1,
    'It\'s a nice single, but I can hear the rats in the walls sometimes. However, I have a very nice view of campus from my window.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:47:02',
    'sec2207@gmail.com',
    'Sulzberger Hall',
    'first-years',
    '611',
    3,
    1,
    'If you\'re living on the quad, Sulz is the best. However, the utilities are really hit-and-miss and the housing can be super crowded. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:47:08',
    'philip.kim@columbiaspectator.com',
    'Schapiro Hall',
    'juniors',
    '1012',
    5,
    1,
    'There are fast elevators, relatively plentiful laundry machines, working air conditioning and heating, comfortable sky lounge, suitably sized rooms, and satisfactory bathrooms. Kitchens are somewhat lacking, and situation can be dependent on how annoying neighbors are. You will only get bugs if you are a pig who cannot keep their room clean.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 21:47:23',
    'erin.neil@columbiaspectator.com',
    'Plimpton Hall',
    'sophomores',
    '5C2',
    4,
    1,
    'This is one of the only dorms in which single rooms out number doubles. It also has air conditioning and full kitchens which makes it feel similar to apartment living. It\'s far from campus, but this has never really proved an issue except when it\'s bitterly cold out.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 22:07:25',
    'kp2803@columbia.edu',
    'Furnald Hall',
    'first-years',
    '109',
    4,
    1,
    'Generally quiet and clean. The first floor can get loud and isolating because of the main lounge.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 22:09:14',
    'soh2105@barnard.edu',
    'Reid Hall',
    'first-years',
    '328',
    4,
    1,
    'Particularly larger than average Reid dorms and the perfect floor for convenience and climate. Never gets too hot in the summer and heater offers optimal comfort in winter. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 22:10:30',
    'pc2857@columbia.edu',
    'John Jay Hall',
    'first-years',
    '1020',
    4,
    1,
    'Have a fantastic campus view and it\'s super convenient in the winter because the dining hall is right downstairs!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/27/2019 23:51:16',
    'hcb2136@columbia.edu',
    'East Campus',
    'seniors',
    '1804B',
    2,
    0,
    'The view is lovely. Your friends will live here. A plant or two may spruce it up. But you will have mold and fire alarms. Will you have a laundry room? Not sure. Kitchen? Up for debate. Save yourself the trouble and stick to Hogan or Claremont. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 1:35:15',
    'kevin.li@columbia.edu',
    'John Jay Hall',
    'first-years',
    '1317',
    5,
    1,
    'Nice community with an option to dive back into your single',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 1:37:54',
    'kevin.li@columbia.edu',
    'Hartley Hall',
    'sophomores',
    '3A5',
    3,
    1,
    'Nice suite with a TV. If you come in with a group of friends you get a nice suite with a kitchen. Kind of dingy overall though. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 1:40:21',
    'kevin.li@columbia.edu',
    'Watt Hall',
    'juniors',
    '5A',
    3,
    1,
    'A little dingy. But, you get your own bathroom and kitchen for two people. Pick a roommate you really like. No lounge. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 10:37:45',
    's.wilcox@columbia.edu',
    'Schapiro Hall',
    'juniors',
    '307S',
    2,
    0,
    'The room is stifling with poor air circulation. As it is a walkthrough double, I have the smaller room closer to the door--a nightmare because not only is it impossible small, but it also effectively doubles as a hallway. Because the room is so low, there\'s no natural light that reaches the room, but you can peer into Casa Hispanica. The sound insulation is nonexistent--most days I will wake up at 4:00AM to the sound of people in the hallway. Some days, the sound of electrical equipment, which was taped to the wall before I or my roommate arrived, falling to the floor will also wake me up, and give me anxiety about how I cannot afford to pay for this expensive and gradually-crumbling room. The bathrooms on floor three have been shut down more than three times this year, which means I\'ve been running around other floor looking for a place to brush my teeth. We also had flooding in our kitchen which lasted from September well into October last semester. Lastly, there\'s mold, which got in the bathrooms and some of the rest of the floor. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 12:15:03',
    'jjs2257@columbia.edu',
    'East Campus',
    'seniors',
    '1006',
    3,
    1,
    'The space is good and the dorm has a fun vibe, but the awful mold and the horrible management of facilities issues were serious problems.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 14:43:49',
    'carolyn.wang@columbiaspectator.com',
    'Wallach Hall',
    'first-years',
    '725',
    4,
    1,
    'Generally very quiet and non-disruptive. Good facilities, albeit prone to getting messy. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 15:34:58',
    'nl2609@barnard.edu',
    '616 W 116th',
    'sophomores',
    '3a3',
    3,
    1,
    'Pros- close to campus, suite style, doubles are big, super nice lounge\ncons- mouse problem, shafted rooms, no ac',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 16:09:56',
    'av2732@columbia.edu',
    'River Hall',
    'juniors',
    '216',
    5,
    1,
    'It\'s quiet and lovely and all singles, which is great when you live with your friends in a suite. The kitchens are big, and allocated to only 10 people so they\'re mostly empty and really nice if you like to cook. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 18:00:43',
    'kaili.meier@columbiaspectator.com',
    '620 W 116th',
    'sophomores',
    '2c3',
    3,
    1,
    'location is good but facilities suck ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 19:06:31',
    'Pc2727@columbia.edu',
    'Hogan Hall',
    'seniors',
    '2A',
    5,
    1,
    'Beautiful EC like suites with all singles without puking first-yearss ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 19:09:21',
    'lw2644@columbia.edu',
    'Hogan Hall',
    'seniors',
    '2A3',
    4,
    1,
    'Comfortable, close to campus. All singles!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 19:42:49',
    'vn2278@columbia.edu',
    'Furnald Hall',
    'first-years',
    '315',
    5,
    1,
    'If you want to come home to somewhere quiet and let yourself relax and have some alone time, I really recommend staying here. There is AC, lighting is good. My only comment is that the shape of it is a bit weird (long rectangle). ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:05:31',
    'mn2776@columbia.edu',
    'River Hall',
    'juniors',
    '601',
    5,
    1,
    'I love how peaceful and clean river is. The bathrooms are nice, and single use, and even the smallest rooms are super comfortable. Also, if you’re on a high floor (5 or 6), don’t worry about being shafted - you still get a lot of light.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:05:43',
    'smp2229@barnard.edu',
    'Sulzberger Hall',
    'first-years',
    '822',
    4,
    1,
    'This is a really good double. There are only a few minor flaws (the blinds are a little tricky to raise and there are some dents in the lights). It is facing the quad which blocks a lot of noise from broadway. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:06:03',
    'ad3485@barnard.edu',
    'Sulzberger Hall',
    'first-years',
    '721',
    3,
    1,
    'It\'s not so bad. Has big windows so gets daylight. Has AC. Relatively bigger space for my stuff like more drawers etc. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:10:21',
    'mn2776@columbia.edu',
    'McBain Hall',
    'sophomores',
    '529',
    3,
    0,
    'I don’t think that living in a double your sophomores year is a good idea. It’s a very transitional year, and having your own space is a good idea. In addition to that, I had the largest room on the floor, and it still felt restrictive. Also, people don’t really take care of their shared spaces, so there were often bad smells and cleanliness issues.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:12:30',
    'mn2776@columbia.edu',
    'Carman Hall',
    'first-years',
    '1001',
    2,
    0,
    'Carman is gross and you don’t havebmuch privacy. I reall did not enjoy living there.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:26:06',
    'katherinegerberich@columbiaspectator.com',
    'Plimpton Hall',
    'sophomores',
    '14B',
    5,
    1,
    'I lived in a single within a suite. I appreciated the privacy that this set-up offered. The suite was easy to clean, and while the common space was small, it was still workable.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:27:45',
    'katherine.gerberich@columbiaspectator.com',
    'Hewitt Hall',
    'first-years',
    '850',
    3,
    1,
    'I personally was not a huge fan of the corridor style living (I prefer a suite), but the bathrooms were always clean and the hallways were never too loud. I didn\'t like the fact that I didn\'t have a kitchen, but I appreciated the central location on campus.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:41:39',
    'pea2116@barnard.edu',
    'Hewitt Hall',
    'sophomores',
    '460',
    5,
    1,
    'Big room, nice bathrooms',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:41:47',
    'ns3276@barnard.edu',
    'Brooks Hall',
    'first-years',
    '845',
    3,
    0,
    'Small rooms, stuffy because no air ventilation due to small windows, heater perpetually on, but it has \"character.\"\"\"',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:41:50',
    'cc4189@barnard.edu',
    '600 W 116th',
    'sophomores',
    '8F',
    4,
    1,
    'super close to campus and morton williams, decent-sized rooms, friendly security guards',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:41:50',
    'sn2695@columbia.edu',
    'John Jay Hall',
    'first-years',
    '1146',
    5,
    1,
    'John Jay is as good as it gets—singles, single-use bathrooms, and a collective propensity to say “hi” in the hallway. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:04',
    'glj2119@columbia.edu',
    'Wien Hall',
    'juniors',
    '618',
    3,
    1,
    'Nice singles with sinks, hall style bathrooms and heaters are very hot',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:30',
    'kks2155@columbia.edu',
    'Wallach Hall',
    'sophomores',
    '210',
    4,
    1,
    'Best location (connects to John Jay, 1 minute from Hamilton, etc). Good view of main campus. Wood floors.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:30',
    'skylar.fetter@columbiaspectator.com',
    'McBain Hall',
    'sophomores',
    '708',
    4,
    1,
    'It has a strong community and great lounge space. I really like living with other sophomoress and even though I\'m in the shaft, the AC is so worth it. Although, the drawback is that I get maybe one hour of sunlight per day and can\'t really tell what the weather is until I go outside. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:34',
    'elizabeth.kolling@columbiaspectator.com',
    'Schapiro Hall',
    'sophomores',
    '412',
    4,
    1,
    'Super convenient, just a short walk across broadway to main campus! Music practice rooms! Sky lounge!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:34',
    'ssb2195@columbia.edu',
    'Carlton Arms',
    'sophomores',
    '9D2',
    5,
    1,
    'I had a huge double (300sf) with lots of light, even though it was technically shafted. Small suites are really nice if you like to cook. I know room size varies a lot, but I got lucky & it’s very worth the walk. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:43',
    'claudia.gohn@columbiaspectator.com',
    'Hartley Hall',
    'first-years',
    '3C1',
    4,
    1,
    'You can probably get a single which is nice but it isn’t renovated.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:42:46',
    'mm5118@columbia.edu',
    'McBain Hall',
    'sophomores',
    '707',
    4,
    1,
    'I live on the shaft which means I have very little light, but the hardwood floors are really nice',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:43:01',
    'ajd2201@barnard.edu',
    'Plimpton Hall',
    'juniors',
    '12A2',
    3,
    1,
    'Though I loved the layout, the facilities issues (elevators dropping, fire alarms always going off) brings down my rating. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:43:25',
    'jade.chlapowski@columbiaspectator.com',
    'John Jay Hall',
    'first-years',
    '1407',
    3,
    1,
    'Some of the singles can feel a bit cramped, but as someone who likes their own space, John Jay is a nice place to live. Plus the single-use bathrooms are definitely a benefit to have.',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:44:12',
    'bingxuan.wang@columbiasoectator.com',
    'Wien Hall',
    'sophomores',
    '819',
    4,
    1,
    'Quiet; well-furnished; has a sink in each room ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:45:06',
    'zee.cleveland@columbiaspectator.com',
    'John Jay Hall',
    'first-years',
    '1028',
    5,
    1,
    'It’s amazing having my own room and private bathrooms. Having two dining halls in the building is great too. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 20:51:19',
    'ky2404@columbia.edu',
    'Carman Hall',
    'first-years',
    '1006B',
    5,
    1,
    'If you get a renovated floor, it will honestly be the best dorm/living space you\'ll have',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 21:44:20',
    'jbm2185@columbia.edu',
    '47 Claremont',
    'sophomores',
    '51D',
    3,
    1,
    'The suite itself is nice, but it\'s difficult to meet anyone outside of your suite in the dorm.  ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '2/28/2019 22:06:01',
    'kad2196@columbia.edu',
    'Hartley Hall',
    'juniors',
    '8B5',
    4,
    1,
    'At-large, and perhaps this is also a function of the actual people living there, Hartley is a great space for fostering community. The suites aren’t too big or too small. They’re perfectly cozy. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '3/1/2019 0:01:41',
    'ev2401@barnard.edu',
    '601 W 110th',
    'sophomores',
    '4K3',
    5,
    1,
    'It\'s so refreshing to live in an actual apartment building while still getting all the benefits of staying in the on-campus housing system. The walk is not as long as people make it out to be and I\'ve really loved living here!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '3/1/2019 0:02:42',
    'ev2401@barnard.edu',
    'Brooks Hall',
    'first-years',
    '345',
    2,
    0,
    'The room sizes vary *so* much in Brooks, I had an absolutely tiny room while friends down the hall had huge ones. The bathrooms were also gross and often not functioning and too small for the hall. Avoid Brooks if you can!',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '3/1/2019 1:45:55',
    'natalie.guerra@columbiaspectator.com',
    'Plimpton Hall',
    'sophomores',
    '10c',
    4,
    1,
    'You get the privacy of a single with the comfort of a suite. Having your own kitchen and bathroom is great. 10/10 would recommend except for the 120 wind tunnel and being far from every other dorm on campus. ',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '3/1/2019 3:24:39',
    'ie2200@barnard.edu',
    'Hewitt Hall',
    'sophomores',
    '3F3',
    4,
    1,
    'Can be a bit lonely since rooms are not in a suite but the rooms are massive in hewitt. The best built in closet ever and the quad is just such a wholesome place to live close to everything',
    '',
    ''
  );
INSERT INTO
  `review` (
    `TIMESTAMP`,
    `ADDRESS`,
    `DORM`,
    `YEAR`,
    `ROOM_NUM`,
    `NUM_STARS`,
    `RECOMMEND`,
    `REVIEW_TXT`,
    `THUMBS_UP`,
    `THUMBS_DOWN`
  )
VALUES
  (
    '3/1/2019 3:25:59',
    'ie2200@barnard.edu',
    'Cathedral Gardens',
    'juniors',
    '43F',
    3,
    0,
    'Had heard amazing things about the suite but besides a spacious living room I did not love living there. Was there over the summer and it was super far from campus, room was pretty small and the building just didn’t feel like a college dorm',
    '',
    ''
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: suites
# ------------------------------------------------------------

INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('47 Claremont', 0, 1, 1, 1, 1, 1, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Carlton Arms', 0, 1, 1, 1, 1, 0, 1, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('East Campus', 1, 0, 1, 1, 1, 0, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Harmony Hall', 0, 0, 0, 0, 1, 0, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Hogan Hall', 0, 0, 1, 1, 1, 0, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Ruggles Hall', 0, 0, 1, 0, 1, 0, 1, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('600 W 116th St.', 1, 1, 1, 1, 1, 1, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('616 W 116th St.', 0, 0, 0, 1, 1, 0, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('620 W 116th St.', 0, 0, 1, 1, 1, 1, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('601 W 110th St.', 1, 1, 1, 1, 1, 1, 1, 1);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Cathedral Gardens', 0, 1, 1, 1, 1, 0, 0, 0);
INSERT INTO
  `suites` (
    `DORM`,
    `TWO_SUITE`,
    `THREE_SUITE`,
    `FOUR_SUITE`,
    `FIVE_SUITE`,
    `SIX_SUITE`,
    `SEVEN_SUITE`,
    `EIGHT_SUITE`,
    `NINE_SUITE`
  )
VALUES
  ('Plimpton Hall', 0, 0, 0, 0, 1, 0, 0, 0);

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
