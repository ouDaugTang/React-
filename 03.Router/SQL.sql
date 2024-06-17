CREATE TABLE `board` (
  `no` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `writer` varchar(100) NOT NULL,
  `content` text,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `views` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`no`)
)

INSERT INTO board (title, writer, content)
VALUES
('첫 번째 게시물', '작성자1', '이것은 첫 번째 게시물의 내용입니다.'),
('두 번째 게시물', '작성자2', '이것은 두 번째 게시물의 내용입니다.'),
('세 번째 게시물', '작성자3', '이것은 세 번째 게시물의 내용입니다.'),
('네 번째 게시물', '작성자4', '이것은 네 번째 게시물의 내용입니다.'),
('다섯 번째 게시물', '작성자5', '이것은 다섯 번째 게시물의 내용입니다.'),
('여섯 번째 게시물', '작성자6', '이것은 여섯 번째 게시물의 내용입니다.'),
('일곱 번째 게시물', '작성자7', '이것은 일곱 번째 게시물의 내용입니다.'),
('여덟 번째 게시물', '작성자8', '이것은 여덟 번째 게시물의 내용입니다.'),
('아홉 번째 게시물', '작성자9', '이것은 아홉 번째 게시물의 내용입니다.'),
('열 번째 게시물', '작성자10', '이것은 열 번째 게시물의 내용입니다.');