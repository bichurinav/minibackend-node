import cheerio from "cheerio";
import fetch from "node-fetch";

export default new (class ReviewController {
  async getTotalReviewsFromTrustpilot(req, res) {
    try {
      const site = "https://www.trustpilot.com/review/cryptocloud.plus";
      const responseSite = await fetch(site);
      const htmlText = await responseSite.text();
      const $ = cheerio.load(htmlText);
      let total = $(
        ".styles_header__yrrqf p[data-reviews-count-typography='true']"
      ).text();

      total = Number(total.split(" ")[0]);

      if (isNaN(total)) {
        throw "Ошибка сервера: Неверный формат количество отзывов";
      }

      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.status(200).json({
        total,
      });
    } catch (e) {
      res.status(500).json({
        message: e,
      });
    }
  }
})();
