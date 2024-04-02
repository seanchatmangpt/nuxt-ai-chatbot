# /usr/bin/env python3
"""
Open the package.json and bump the version number by the date.
Year, month, day, hour
"""

import json
import os
import datetime

def main():
    with open('package.json', 'r') as f:
        package = json.load(f)
        version = datetime.datetime.now().strftime('%Y.%m.%d.%H')
        package['version'] = version
        print(f'Bumping version to {version}')
    with open('package.json', 'w') as f:
        json.dump(package, f, indent=2)

if __name__ == '__main__':
    main()
