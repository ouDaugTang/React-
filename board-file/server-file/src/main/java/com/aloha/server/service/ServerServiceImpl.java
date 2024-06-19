package com.aloha.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aloha.server.dto.Board;
import com.aloha.server.dto.Files;
import com.aloha.server.mapper.ServerMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ServerServiceImpl implements ServerService {

    @Autowired
    private ServerMapper serverMapper;

    @Autowired
    private FileService fileService;

    @Override
    public Board insertBoard(Board board) throws Exception {
        int result = serverMapper.insertBoard(board);
        
        int newNo = board.getNo();
        Board newBoard = serverMapper.selectBoard(newNo);

        // 파일 업로드
        Files fileInfo = new Files();
        String parentTable = "board";
        fileInfo.setParentTable(parentTable);
        fileInfo.setParentNo(newNo);
        List<MultipartFile> fileList = board.getFiles();
        log.info(fileList + " 몇개들어있음?");

        if (fileList == null || fileList.isEmpty()) {
            log.info("첨부한 파일이 있습니다.");
            return newBoard;
        }

        List<Files> uploadedFileList = fileService.uploadFiles(fileInfo, fileList);
        if (uploadedFileList == null || uploadedFileList.isEmpty()) {
            log.info("파일 업로드 실패..");
        } else {
            log.info("파일 업로드 성공");
            log.info(uploadedFileList.toString());
        }

        return newBoard;
    }

    @Override
    public Board selectBoard(int no) throws Exception {
        return serverMapper.selectBoard(no);
    }

    @Override
    public List<Board> selectAllBoards() throws Exception {
        return serverMapper.selectAllBoards();
    }

    @Override
    public int updateBoard(Board board) throws Exception {
        return serverMapper.updateBoard(board);
    }

    @Override
    public int deleteBoard(int no) throws Exception {
        return serverMapper.deleteBoard(no);
    }

}
