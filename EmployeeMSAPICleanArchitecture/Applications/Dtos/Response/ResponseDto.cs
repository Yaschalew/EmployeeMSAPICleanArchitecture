using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Applications.Dtos.Response
{
   public class ResponseDto<T>
    {
        public List<T> Data { get; set; }
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public int TotalRowCount { get; set; }
        public int ItemPerPage { get; set; }
        public int CurrentPage { get; set; }
        public bool HasPrev { get; set; }
        public bool HasNext { get; set; }
        public int TotalPageCount { get; set; }
        public ResponseDto(List<T> data, bool isSuccess, string message)
        {
            Data = data;
            IsSuccess = isSuccess;
            Message = message;

        }
        public ResponseDto(T data, bool isSuccess, string message)
        {
            Data = new List<T> { data };
            IsSuccess = isSuccess;
            Message = message;

        }
        public ResponseDto(List<T> data)
        {
            Data =  data ;
            IsSuccess = true;
            Message = null;

        }
        public ResponseDto(List<T> data,int totalRowCount, int itemPerPage, int currentPage,
                           bool hasPrev, bool hasNext, int totalPageCount)
        {
            Data = data;
            IsSuccess = true;
            Message = null;
            TotalRowCount = totalRowCount;
            ItemPerPage = itemPerPage;
            CurrentPage = currentPage;
            HasPrev = hasPrev;
            HasNext = hasNext;
            TotalPageCount = totalPageCount;

        }
    }
}
