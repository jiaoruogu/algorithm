from urllib import request

class Spider():

    url = 'https://www.huxiu.com/article/275683.html'

    def __get_content(self):
        r = request.urlopen(Spider.url)
        htmls = r.read()
        htmls = str(htmls, encoding='utf-8')

        print(htmls)

    def go(self):
        self.__get_content()

spider = Spider()
spider.go()
