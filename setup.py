"""
Random demo flask app python package configuration.

"""

from setuptools import setup

setup(
    name='randomsite',
    version='0.1.0',
    packages=['randomsite'],
    include_package_data=True,
    install_requires=[
        'flask',
        'nodeenv',
        'requests',
        'httpie'
    ],
)
