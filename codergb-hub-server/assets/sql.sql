create
    definer = root@localhost function getAllComment(commendId char(50)) returns varchar(4000)
BEGIN
DECLARE sTemp VARCHAR(4000);
DECLARE sTempChd VARCHAR(4000);
SET sTemp='$';
SET sTempChd = CAST(commendId AS CHAR);
WHILE sTempChd IS NOT NULL DO
SET sTemp= CONCAT(sTemp,',',sTempChd);

SELECT GROUP_CONCAT(id) INTO sTempChd FROM `comment` WHERE FIND_IN_SET(replyId,sTempChd)>0;

END WHILE;
RETURN sTemp;
END;

