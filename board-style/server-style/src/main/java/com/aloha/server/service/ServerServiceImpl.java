package com.aloha.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.server.dto.Board;
import com.aloha.server.mapper.ServerMapper;

@Service
public class ServerServiceImpl implements ServerService {

    @Autowired
    ServerMapper serverMapper;

    @Override
    public int insertBoard(Board board) throws Exception {

        return serverMapper.insertBoard(board);
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
