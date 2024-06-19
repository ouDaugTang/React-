package com.aloha.server.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.aloha.server.dto.Files;

import jakarta.servlet.http.HttpServletResponse;

public interface FileService {

    public List<Files> selectAllFiles() throws Exception;
    
    public Files selectFileById(int no) throws Exception;
    
    public int insertFile(Files file) throws Exception;

    public int updateFile(Files file) throws Exception;

    public int deleteFile(int no) throws Exception;

    // 파일 업로드
    public Files upload(Files files) throws Exception;
    
    // 여러 파일 업로드
    public List<Files> uploadFiles(Files fileInfo, List<MultipartFile> fileList) throws Exception;

    // 부모 로 파일 조회
    public List<Files> listByParent(Files file) throws Exception;   

    // 파일 다운로드
    public int download(int no, HttpServletResponse response) throws Exception;

}
