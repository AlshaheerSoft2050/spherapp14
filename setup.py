from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in spherapp14/__init__.py
from spherapp14 import __version__ as version

setup(
	name="spherapp14",
	version=version,
	description="default_popup",
	author="shaheer",
	author_email="shahir4soft@gmail.com ",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
