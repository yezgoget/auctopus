package com.auctopus.project.db.repository;

import com.auctopus.project.db.domain.Auction;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface AuctionRepository extends JpaRepository<Auction, Long> {

    // 경매 임박 24시간 사이
    List<Auction> findImmAuctionByTimeAsc(String todayTime, String tomorrowTime, Pageable pageable);

    // 키워드(word)가 포함된 경매 오픈 전 & 경매중인 물품들
    @Query("SELECT a FROM Auction a where (a.title like CONCAT('%', : word, '%') OR a.content like CONCAT('%', :word, '%')) AND (a.startTime > :currentTime) ORDER BY a.startTime")
    List<Auction> findAllByWord(String word, String currentTime, Pageable pageable);
}
