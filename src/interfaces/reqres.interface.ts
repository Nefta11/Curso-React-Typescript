import React from 'react'

const reqres.interface = () => {
  return (
    <div>
      
    </div>
  )
}

export default reqres.interface
export interface ReqResUserListResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Datum[];
  support:     Support;
}

export interface Datum {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
