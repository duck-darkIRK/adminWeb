import { updateAccessTokenAsync } from "../webAdmin.ts";
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'

export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export async function makeRequest(callback, ...args) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await callback(...args, getCookie('access_token'));
      console.log("🚀 ~ returnnewPromise ~ data:", data )
      
      if ('errors' in data && data.errors[0].message === 'Unauthorized') {
        throw new Error('Authorization error');
      } else if (data.errors && data.errors[0].message !== 'Unauthorized') {
        reject('không tìm thấy thông tin');
      }
      
      resolve(data);
    } catch (e) {
      try {
        const newCookie = await updateAccessTokenAsync(getCookie('id'), getCookie('refresh_token'));
        if (!("errors" in newCookie)) {
          document.cookie = `access_token= ${newCookie.accessToken}`;
          document.cookie = `id= ${newCookie.id}`;
          document.cookie = `refresh_token= ${newCookie.refreshToken}`;
          const data2 = await callback(...args, newCookie.accessToken);
          console.log("🚀 ~ returnnewPromise ~ data:", data2 )
          if ("errors" in data2) {
            reject(data2.errors[0].message)
          }
          resolve(data2);
        } else {
          reject('Chưa đăng nhập!');
        }
      } catch (error) {
        reject(error);
      }
    }
  });
}



